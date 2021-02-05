import React, { FormEvent, useState } from 'react';
import Header from '../../components/Header';
import Map from '../../components/Map';
import PhotosCarousel from '../../components/PhotosCarousel';
import History from '../../components/History';
import images from '../../assets/images';
import Footer from '../../components/Footer';
import { 
  Container,
  Video,
  IngadiKing,
  ButtonContainer,
  CarouselAndMapContainer,
  Benefits,
  FormContainer,
  Form
} from './styles';

import { Play as PlayButton } from '../../assets/icons';
import Input from '../../components/Input/styles';
import Button from '../../components/SubmitButton/styles';
import NavButton from '../../components/NavButton';
import api from '../../services/api';

const Ingadi: React.FC = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [ formMessage, setFormMessage ] = useState('');
  const [ customerEvent, setCustomerEvent ] = useState('');

  const FormHandler = (e: FormEvent) => {
    e.preventDefault();

    api.post('', {
      name,
      email,
      phoneNumber,
      customerEvent
    })
  }

  return (
    <>
      <Header />
      <Container id="matola-ingadi-main">
        <Video>
          <img src={images.ingadiWedding} alt="Casamento Ingadi"/>
          <span>
            <PlayButton />
          </span>
        </Video>
        <section>
          <IngadiKing>
            <h1>VocÊ é O Rei Dos Nossos Eventos</h1>
            <p>
              O nosso objetivo é tornar o seu evento único e autentico. Abrimos as portas da nossa casa para que venha ser rei . O momento especial também deve ser cheio de Glamour, por isso nunca poupamos esforço no nosso oficio de serventia e preparação para as suas celebrações.
            </p>

            <ButtonContainer>
              <NavButton
                color="var(--color-white)"
                backgroundColor="var(--color-primary)"
                text="Agendar evento"
                url="#agendar-evento"
                isToOutsideOfWebsite={false}
                useJump={true}
              />
            </ButtonContainer>
          </IngadiKing>

          <CarouselAndMapContainer>
            <PhotosCarousel 
              images={[images.weddingPiscina, images.weddingLightNight]}
              animationDelay={5000}
            />
            <Map
              title="venha viver a experiência"
              descriptions={[
                'Estamos logo depois do Externato Cantinho do Céu e Salesianos vindo pela Shoprite da Matola'
              ]}
              buttonText="Visite Matola Ingadi"
              isButtonToOutsideOfWebsite={false}
              buttonUrl="/visitar-matola-ingadi"
            />
          </CarouselAndMapContainer>

          <History
            title="Celebramos O Amor Em Todas As Suas Formas e Cores"
            popUpTitle="Desde 2015"
            description="
              Alimentamos cumplicidade, autenticidade, espontaneidade. 
              Organizamos casamentos que surpreendem, provocam reações, surpreendem e
              perturbam.
            "
            image1={images.AiVemONoivo}
            image2={images.weddings}
            image1Alt='Salão de casamentos'
            image2Alt="Ai vem o noivo"
          />

          <Benefits>
            <h2>Escolha Matola Ingadi</h2>
            <p>
              Fazemos  Decoração Personalizada para cada tipo de evento.  Total de 14 000 m² de Área.  
              Salão para 350 Convidados. Estacionamento para mais de 200 carros. Espaço para cerimonia civil.
              Cozinha pronta para o uso nos seus eventos. Suíte para os Noivos. Iluminação Decorativa nas suas 
              festas. Gerador disponível em todo o evento. Banheiros Feminino, Masculino e para Pessoas com 
              Necessidades Especiais.
            </p>
          </Benefits>

          <FormContainer id="agendar-evento">
            <div>
              <h2>Agende o seu proximo evento no Matola Ingadi</h2>
            </div>

            <Form onSubmit={FormHandler}>
              <span>
                {formMessage}
              </span>
              <Input
                placeholder='Nome *'
                value={name}
                onChange={e => {setName(e.target.value)}}
                required
              />
              <Input
                placeholder='Evento *'
                id="evento" 
                list="eventos"
                value={customerEvent}
                onChange={e => {setCustomerEvent(e.target.value)}}
                required
              />
              <datalist id="eventos">
                <option value="Casamento" />
                <option value="Bodas" />
                <option value="Aniversários" />
                <option value="Graduação" />
                <option value="Evento Empresarial" />
                <option value="Evento Corporativo" />
                <option value="Outros" />
              </datalist>

              <Input
                type='email'
                placeholder='Endereço de email'
                value={email}
                onChange={e => {setEmail(e.target.value)}}
              />
              <Input
                placeholder='Telefone *'
                required
                value={phoneNumber}
                onChange={e => {setPhoneNumber(e.target.value)}}
              />
              <Button type='submit'>
                Submeter
              </Button>
            </Form>
          </FormContainer>
        </section>
      </Container>
      <Footer
        homePage={false}
      />
    </>
  )
}

export default Ingadi;