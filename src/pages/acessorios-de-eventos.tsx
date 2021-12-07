import React, { useContext, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessoriesCarousel from '../components/AccessoriesCarousel';

import { EventScheduleResponse } from '../components/ResponseRender/styles';
import Button from '../components/SubmitButton/styles';

import validator from '../formValidators/accessoriesForm';

import image1 from '../assets/images/mitchell-luo-rNjsDvYUGOw-unsplash.jpg';
import image2 from '../assets/images/eduardo-cano-photo-co-uz3bfBm2ScM-unsplash.jpg';
import image3 from '../assets/images/brayden-gray-RuV_kJNFPiA-unsplash.jpg';
import image4 from '../assets/images/macau-photo-agency-GCPW1-1RtGs-unsplash.jpg';
import image5 from '../assets/images/silviu-beniamin-tofan-peTt3DTUhMQ-unsplash.jpg';
import image6 from '../assets/images/anuvith-premakumar-Iceviap0eGI-unsplash.jpg';
import image7 from '../assets/images/sam-moqadam-ugaOk9LkmQY-unsplash.jpg';

import { 
  Main,
  AccessoriesContainer
} from '../styles/pages/accessories';
import { SelectContainer } from '../styles/pages/select';

import { DataContext } from '../contexts';
import { Accessory } from 'matola-ingadi';

interface FormData {
  accessoriesToSearch: string
}

const  Accessories: React.FC = () => {
    const { data, setData } = useContext(DataContext);
    const [ apiResponse, setApiResponse ] = useState('');
    const [ styles, setStyles ] = useState({});
    const [ photographs, setPhotographs ] = useState<string[]>();

    useEffect(() => {
      fetch('/api/get/all', 
      { method: 'GET' })
      .then( async response => {

        const res = await response.json()

        storeAccessoriesTypes.current(res)
        setData({...data, accessory: res[0]})
        photographsSetter.current(data.accessory)
      })
      .catch(err => {
        console.log(err.response);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const photographsSetter = useRef((acs: Accessory) => {
      const photos = acs.photos.map(image => image.path )
      setPhotographs(photos)
    })

    const storeAccessoriesTypes = useRef((accessories: Accessory[]) => {
      const accessoriesTypes = accessories.map(accessory => (
        accessory.accessoriesType
      ))
      setData({...data, accessoriesTypes})
    });

    const formSubmit = (form: FormData) => {
      fetch(`/api/accessories/${form.accessoriesToSearch}`, 
      { method: 'GET' })
      .then( async response => {
        const res = await response.json()
        setData({...data, accessory: res})
        photographsSetter.current(data.accessory)
      })
      .catch(err => {
        setStyles({ color: 'var(--color-error)' })
        if(err.status == 404)
        return setApiResponse('Acessório naõ foi encontrado');

        setApiResponse('Desculpa, o servidor não respondeu');
      })
    }

  return (
    <div>
      <Head>
        <meta name="robots" content="none" />
        <meta name="title" content="Salão de eventos Matola Ingadi"/>
        <meta
          name="description"
          content="Melhor lugar para festas e grandes eventos em Moçambique"
        />
        <meta 
          name="keywords" 
          content="
            eventos, matola, maputo, salão, ingadi, festas, festa, casamentos, casamentos, batismos, batismo, aniversários, aniversário, comemoração, bons, momentos
          "
        />
        <title>Matola Ingadi</title>
      </Head>

      <Header />
      <Main>
        <Formik
          initialValues={{ 
            accessoriesToSearch: ''
          }}
          validationSchema={validator}
          onSubmit={values => {
            formSubmit(values)
          }}
        >
          <Form className="form">
            <legend>Veja fotos dos nossos acessórios</legend>
            <EventScheduleResponse style={styles}>
              {apiResponse}
            </EventScheduleResponse>
            {/* {
              (accessoriesTypes && accessory.accessoriesType) && (
                <Select 
                  label="Ver acessórios do Matola Ingadi"
                  options={accessoriesTypes}
                  placeholder={`Exemplo: ${accessory.accessoriesType}`}
                  name="search-accessories"
                  setState={setAccessoriesToSearch}
                  state={accessoriesToSearch}
                />
              )
            } */}
            <SelectContainer>
              <Field as="select" name="searchAccessories" type="select" id="searchAccessories" >
                <option hidden value="">Exemplo: Iluminação</option>
                <option value='Iluminação'>Iluminação</option>
              </Field>
              <ErrorMessage component="span" name="searchAccessories" />
            </SelectContainer>
            <Button type="submit">
              Pesquisar
            </Button>
          </Form>
        </Formik>
        <AccessoriesContainer>
          {/* {
            photographs && (
              <AccessoriesCarousel
                images={photographs}
              />
            )
          }
          {
            !photographs && (
              <p
                style={{
                  marginTop: '13rem',
                  display: "flex",
                  flex: 1,
                  justifyContent: 'center',
                  alignContent: 'center'
                }}
              >Carregando...</p>
            )
          } */}
          <AccessoriesCarousel
            images={[
              image1,
              image2,
              image3,
              image4,
              image5,
              image6,
              image7,
            ]}
          />
        </AccessoriesContainer>
      </Main>
      <Footer
        homePage={false}
      />
    </div>
  )
}

export default Accessories;