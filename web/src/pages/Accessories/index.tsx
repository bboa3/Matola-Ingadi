import React, { FormEvent, useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input/styles';
import { Button } from '../../components/SubmitButton/styles';
import api from '../../services/api';
import { Container, Form, AccessoriesContainer } from './styles';

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
      <Header
        homePage={false}
      />
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

        </AccessoriesContainer>
      </Container>
    </>
  )
}

export default Accessories;