import React, { memo, FormEvent, useState } from 'react';
import 'nodep-date-input-polyfill';

import Select from '../Select';
import Input from '../../components/Input/styles';
import { EventScheduleResponse } from '../../components/ResponseRender/styles';
import Button from '../../components/SubmitButton/styles';
import { Container, Form } from './styles';

import api from '../../services/api';
import errorHandler from '../../errors/handler';

const EventScheduleForm: React.FC = memo(() => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [ apiResponse, setApiResponse ] = useState('');
  const [ customerEvent, setCustomerEvent ] = useState('');
  const [ date, setDate ] = useState('');
  const [ styles, setStyles ] = useState({});

  const FormHandler = (e: FormEvent) => {
    e.preventDefault();
    const isEmpty = () => {
      return (!customerEvent) || customerEvent === 'Selecione o evento *';
    }

    if(isEmpty()) {
      setApiResponse('Selecione o evento que gostaria de realizar no Matola Ingadi')
      setStyles({ color: 'var(--color-error)' })
      return
    }

    api.post('/user/event', {
      name,
      email,
      phoneNumber,
      customerEvent,
      date
    })
    .then(response => {
      setName('')
      setEmail('')
      setPhoneNumber('')
      setCustomerEvent('')
      setDate('')
      
      setStyles({ color: 'var(--color-success)' })
      setApiResponse(response.data.message);
    })
    .catch(err => {
      setStyles({ color: 'var(--color-error)' })
      if(err.response)
      return setApiResponse(errorHandler.render(err.response.data));

      setApiResponse('Desculpa, o servidor não está online');
    })
  }

  return (
    <Container id="agendar-evento">
      <div>
        <h2>Agende o seu proximo evento no Matola Ingadi</h2>
      </div>
      
      <Form onSubmit={FormHandler}>
        <EventScheduleResponse style={styles} >
          {apiResponse}
        </EventScheduleResponse>
        
        <label htmlFor="event-name">Seu nome</label>
        <Input
          placeholder='Nome *'
          id="event-name"
          value={name}
          onChange={e => {setName(e.target.value)}}
          required
        />
        
        <label htmlFor="event-email">E-mail</label>
        <Input
          type='email'
          id="event-email"
          placeholder='Endereço de email'
          value={email}
          onChange={e => {setEmail(e.target.value)}}
        />
        <label htmlFor="event-telefone">Telefone</label>
        <Input
          id="event-telefone"
          placeholder='Telefone *'
          required
          value={phoneNumber}
          onChange={e => {setPhoneNumber(e.target.value)}}
        /> 
        <Select
          state={customerEvent}
          setState={setCustomerEvent}
          name="select-event"
          placeholder="Selecione o evento *"
          options={[
            'Casamento',
            'Boda',
            'Aniversário',
            'Graduação',
            'Evento Empresarial',
            'Evento Corporativo',
            'Evento Cultural',
            'Festá Religiosa',
            'Outros'
          ]}
        />

        <label style={{display: 'block'}} htmlFor="event-date">
          Data da realização do evento
        </label>
        <Input
          id="event-date"
          type="date"
          value={date}
          onKeyDown={e=> e.preventDefault()}
          onChange={e => {setDate(e.target.value)}}
          required
        />
        <Button type='submit'>
          Submeter
        </Button>
      </Form>
    </Container>
  )
})

export default EventScheduleForm;