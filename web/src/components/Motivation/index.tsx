import React from 'react';
import {
  Container
} from './styles';

const Motivation: React.FC = () => {
  return (
    <Container id="motivation">
      <h2>Escolha Matola Ingadi</h2>
      <h3>Motivos:</h3>
      <ul>
        <li>Decoração Personalizada para cada tipo de evento</li>
        <li>Total de 14 000 m² de Área</li>
        <li>Salão para 350 Convidados</li>
        <li>Estacionamento para mais de 200 carros</li>
        <li>Espaço para cerimonia civil</li>
        <li>Cozinha pronta para o uso no seu evento</li>
        <li>Suíte para os Noivos</li>
        <li>Iluminação Decorativa na fachada</li>
        <li>Gerador disponível em todo o evento</li>
        <li id="contacts">Banheiros Femininos, Masculinos e para Pessoas com Necessidades Especiais</li>
      </ul>
    </Container>
  )
}

export default Motivation;