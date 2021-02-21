import React, { FormEvent, useCallback, useContext, useEffect, useState } from 'react';
import { DataContext } from '../../contexts';
import { Accessory } from 'state-data';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AccessoriesCarousel from '../../components/AccessoriesCarousel';

import { EventScheduleResponse } from '../../components/ResponseRender/styles';
import Button from '../../components/SubmitButton/styles';
import { Container, Form, AccessoriesContainer } from './styles';

import api from '../../services/api';
import errorHandler from '../../errors/handler';
import Select from '../../components/Select';

const Accessories: React.FC = () => {
  const { data, setData } = useContext(DataContext);
  const { accessory, accessoriesTypes } = data;
  const [ accessoriesToSearch, setAccessoriesToSearch ] = useState('');
  const [ apiResponse, setApiResponse ] = useState('');
  const [ styles, setStyles ] = useState({});
  const [ photographs, setPhotographs ] = useState<string[]>();

  useEffect(() => {
    api.get('/accessories/get/all')
    .then(response => {
      setData({...data, accessory: response.data[0]})

      storeAccessoriesTypes(response.data)
    })
    .catch(err => {
      console.log(err.response);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(accessory) {
      const photos = accessory.photos.map(image => (
        image.path
      ))
      setPhotographs(photos)
    }
  }, [accessory])

  const storeAccessoriesTypes = useCallback((accessories: Accessory[]) => {
    const accessoriesTypes = accessories.map(accessory => (
      accessory.accessoriesType
    ))
    setData({...data, accessoriesTypes})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const FormHandler = (e: FormEvent) => {
    e.preventDefault();

    api.get(`/accessories/${accessoriesToSearch}`)
    .then(response => {
      setData({...data, accessory: response.data})
    })
    .catch(err => {
      setStyles({ color: 'var(--color-error)' })
      if(err.response)
      return setApiResponse(errorHandler.render(err.response.data));

      setApiResponse('Desculpa, o servidor não está online');
    })
  }

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={FormHandler}>
          <legend>Vejá fotos dos nossos acessórios</legend>
          <EventScheduleResponse style={styles} >
            {apiResponse}
          </EventScheduleResponse>
          {
            accessoriesTypes && (
              <Select 
                label="Ver acessórios do Matola Ingadi"
                options={accessoriesTypes}
                placeholder={`Exemplo: ${accessory ? accessory.accessoriesType : ''}`}
                name="search-accessories"
                setState={setAccessoriesToSearch}
                state={accessoriesToSearch}
              />
            )
          }
          <Button type="submit">
            Pesquisar
          </Button>
        </Form>
        <AccessoriesContainer>
          {
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
          }
        </AccessoriesContainer>
      </Container>
      <Footer
      homePage={false}
      />
    </>
  )
}

export default Accessories;