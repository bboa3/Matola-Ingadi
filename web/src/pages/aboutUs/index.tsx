import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container } from './styles';

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Brevemente...</h1>
      </Container>
      <Footer
       homePage={false}
      />
    </>
  )
}

export default AboutUs;