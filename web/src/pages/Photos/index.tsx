import React, { useContext, useEffect, useRef } from 'react';
import { DataContext } from '../../contexts';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PhotosCarousel from '../../components/PhotosCarousel';
import { Container } from './styles';

import api from '../../services/api';
import { AnEvent, EventsHistories } from 'state-data';
import INICIAL_STATE from '../../utils/inicialState';
import separator from '../../utils/separator';

const Photos: React.FC = () => {
  const { data, setData } = useContext(DataContext);
  const { eventsHistories } = data;
  const temporalStoreEventsHistories = useRef<EventsHistories>(INICIAL_STATE.data.eventsHistories);
  
  useEffect(() => {
    api.get('/event/histories/13')
    .then(response => {
      response.data.forEach((even: AnEvent) => {
        separator(temporalStoreEventsHistories, even);
      })
      setData({...data, eventsHistories: temporalStoreEventsHistories.current })
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  console.log('Rendered');
  console.log(eventsHistories);
  

  return (
    <>
      <Header />
      <Container>
        {
          (eventsHistories.casamentos.length > 1) && (
            <PhotosCarousel
              images={eventsHistories.casamentos}
              animationDelay={5000}
              title={`Nossos Casamentos`}
            />
          )
        }
        {
          (eventsHistories.bodas.length > 1) && (
            <PhotosCarousel
              images={eventsHistories.bodas}
              animationDelay={5000}
              title={`Nossas de Bodas`}
            />
          )
        }
        {
          (eventsHistories.aniversário.length > 1) && (
            <PhotosCarousel
              images={eventsHistories.aniversário}
              animationDelay={5000}
              title={`Nossos Aniversários`}
            />
          )
        }
        {
          (eventsHistories.eventosEmpresariais.length > 1) && (
            <PhotosCarousel
              images={eventsHistories.eventosEmpresariais}
              animationDelay={5000}
              title={`Nossos Eventos Empresariais`}
            />
          )
        }
        {
          (eventsHistories.eventosCorporativos.length > 1) && (
            <PhotosCarousel
              images={eventsHistories.eventosCorporativos}
              animationDelay={5000}
              title={`Nossos Eventos Corporativos`}
            />
          )
        }
        {
          (eventsHistories.graduação.length > 1) && (
            <PhotosCarousel
              images={eventsHistories.graduação}
              animationDelay={5000}
              title={`Nossas Graduações`}
            />
          )
        }
        {
          (eventsHistories.festásReligiosas.length > 1) && (
            <PhotosCarousel
              images={eventsHistories.festásReligiosas}
              animationDelay={5000}
              title={`Nossas Festás Religiosas`}
            />
          )
        }
        {
          (eventsHistories.eventosCulturais.length > 1) && (
            <PhotosCarousel
              images={eventsHistories.eventosCulturais}
              animationDelay={5000}
              title={`Nossos Eventos Culturais`}
            />
          )
        }
      </Container>
      <Footer 
        homePage={false}
      />
    </>
  )
}

export default Photos;