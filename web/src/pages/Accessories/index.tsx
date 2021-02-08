import React, { FormEvent, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AccessoriesCarousel from '../../components/AccessoriesCarousel';

import { EventScheduleResponse } from '../../components/ResponseRender/styles';
import Input from '../../components/Input/styles';
import Button from '../../components/SubmitButton/styles';
import { Container, Form, AccessoriesContainer } from './styles';

import images from '../../assets/images';

import api from '../../services/api';
import errorHandler from '../../errors/handler';

const Accessories: React.FC = () => {
  const [ accessory, setAccessory ] = useState('');
  const [ apiResponse, setApiResponse ] = useState('');
  const [ styles, setStyles ] = useState({})
  
  const FormHandler = (e: FormEvent) => {
    e.preventDefault();

    api.post('/user/accessory', { accessory })
    .then(response => {
      setAccessory('')
      setStyles({ color: 'var(--color-success)' })
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
          <label htmlFor="search-accessories">Ver acessórios de Matola Ingadi</label>
          <Input 
            type="text"
            id="search-accessories"
            placeholder="Exemplo: iluminação"
            value={accessory}
            onChange={e => { setAccessory(e.target.value)}} 
            required
          />
          <Button type="submit">
            Pesquisar
          </Button>
        </Form>
        <AccessoriesContainer>
          <AccessoriesCarousel
            images={
              [
                images.talheres.talheres3,
                images.talheres.talheres4,
                images.talheres.talheres1,
                images.talheres.talheres2,
                images.talheres.talheres5,
                images.talheres.talheres6,
                images.talheres.talheres7,
              ]
            }
          />
        </AccessoriesContainer>
      </Container>
      <Footer
      homePage={false}
      />
    </>
  )
}

export default Accessories;