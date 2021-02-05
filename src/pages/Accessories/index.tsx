import React, { FormEvent, useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input/styles';
import Button from '../../components/SubmitButton/styles';
import api from '../../services/api';
import { Container, Form, AccessoriesContainer } from './styles';
import AccessoriesCarousel from '../../components/AccessoriesCarousel';
import images from '../../assets/images';
import Footer from '../../components/Footer';

const Accessories: React.FC = () => {
  const [ accessory, setAccessory ] = useState('');
  
  const handlerForm = (e: FormEvent) => {
    e.preventDefault();

    api.post('', {
      accessory
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handlerForm}>
          <legend>Vejá fotos dos nossos acessórios</legend>
          <Input 
            type="text"
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