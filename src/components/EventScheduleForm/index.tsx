import React, { memo, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { EventScheduleResponse } from '../../components/ResponseRender/styles';
import Button from '../../components/SubmitButton/styles';
import { Main, CalendarContainer } from './styles';
import { months, weekDays } from '../../utils/calendar/days'

import validator from '../../formValidators/EventScheduleForm';
import { SelectContainer } from '../../styles/pages/select';
import { PhoneIcon } from '../../assets/icons';


interface FormData {
  name: string
  email: string
  phoneNumber: string
  customerEvent: string
}

const EventScheduleForm: React.FC = memo(() => {
  const [ apiResponse, setApiResponse ] = useState('');
  const [ styles, setStyles ] = useState({});
  const [date, setDate] = useState(new Date());
  const [ dateError, setDateError ] = useState('');
  const [ month, setMonth ] = useState('');
  const [ day, setDay ] = useState(1);
  const [ weekDay, setWeekDay ] = useState('');
  const [ year, setYear ] = useState(2021);
  

  useEffect(() => {
    setMonth(months[date.getMonth()])
    setWeekDay(weekDays[date.getDay()])
    setDay(date.getDate())
    setYear(date.getFullYear())
  }, [date]) 

  const formSubmit = (form: FormData) => {
    
    if(date <= new Date()) 
    return setDateError('Diga-nos a data em pretende realizar o seu evento')
    
    setDateError('')    

    fetch('/api/save.event', 
      {  
        method: 'POST',

        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),

        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phoneNumber: form.phoneNumber,
          customerEvent: form.customerEvent,
          date: date
        }),
      }
    )
    .then( async response => {

      const res = await response.json()

      if(response.ok) {
        setStyles({ color: 'var(--color-success)' })
        setApiResponse(res.message);

      } else {
        setStyles({ color: 'var(--color-error)' })
        setApiResponse(res.error);
      }
    })
    .catch(err => {
      setStyles({ color: 'var(--color-error)' })
      setApiResponse('Não foi possível mandar os dados.');
    })
  }

  return (
    <Main id="agendar-evento">
      <div>
        <h2>Agende o seu proximo evento no Matola Ingadi</h2>
      </div>
      
      <Formik
          initialValues={{ 
            name: '',
            email: '',
            phoneNumber: '',
            customerEvent: ''
          }}
          validationSchema={validator}
          onSubmit={values => {
            formSubmit(values)
          }}
      >
        <Form className="form">
          <EventScheduleResponse style={styles} >
            {apiResponse}
          </EventScheduleResponse>
          
          <label htmlFor="name">Seu nome</label>
          <Field name="name" id="name" placeholder='Nome *' />
          <ErrorMessage component="span" name="name" />
          
          <label htmlFor="email">E-mail</label>
          <Field name="email" type="email" id="email" placeholder='Endereço de email' />
          <ErrorMessage component="span" name="email" />

          <label htmlFor="phoneNumber">Telefone</label>
          <Field name="phoneNumber" type="tel" id="phoneNumber" placeholder='Telefone *' />
          <ErrorMessage component="span" name="phoneNumber" />

          <SelectContainer>
            <label htmlFor='customerEvent'>Evento</label>
            <Field as="select" name="customerEvent" type="select" id="customerEvent" >
              <option hidden value="">Selecione o evento</option>
              <option value='Casamento'>Casamento</option>
              <option value='Boda'>Boda</option>
              <option value='Aniversário'>Aniversário</option>
              <option value='Graduação'>Graduação</option>
              <option value='Evento Empresarial'>Evento Empresarial</option>
              <option value='Evento Corporativo'>Evento Corporativo</option>
              <option value='Evento Cultural'>Evento Cultural</option>
              <option value='Festá Religiosa'>Festá Religiosa</option>
              <option value='Outros'>Outros</option>
            </Field>
            <ErrorMessage component="span" name="customerEvent" />
          </SelectContainer>
         
          <CalendarContainer>
            <label style={{display: 'block', textAlign: 'center'}}>
              Data da realização do evento
            </label>
            <h3><PhoneIcon />{`${weekDay} ${day} ${month} ${year}`}</h3>
            <Calendar
              minDate={new Date()}
              locale="pt"
              className="ogolfim"
              onChange={(dade: Date) => {setDate(dade)}}
              value={date}
            />
            <span>{dateError}</span>
          </CalendarContainer>

          <Button type='submit'>Submeter</Button>
        </Form>
      </Formik>
    </Main>
  )
})

export default EventScheduleForm;