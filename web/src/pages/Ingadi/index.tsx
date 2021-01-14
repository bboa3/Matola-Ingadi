import React from 'react';
import Guest from '../../components/Guest';
import Events from '../../components/Events';
import Motivation from '../../components/Motivation';
import Footer from '../../components/Footer';
import { Container } from './styles';

const Ingadi: React.FC = () => {
  return (
    <Container>
      <Guest />
      <Events />
      <Motivation />
      <Footer />
    </Container>
  )
}

export default Ingadi;