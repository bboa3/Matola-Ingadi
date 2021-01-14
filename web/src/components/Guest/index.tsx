import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import {
  Container,
  IngadiDescription
} from './styles';

const Guest: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const positionY = useTransform(scrollYProgress, 
    [0, 0.020],
    ['0', '10rem']
  )

  return (
    <Container>
      <div id="guest">
        <video width="100%" height="50%" autoPlay loop muted src="videos/salão.mp4"/>
      </div>
      <motion.div
        style={{
          y: positionY
        }}
      >
        <p>
          Fazer você viver uma experiência autêntica e distinta
        </p>
        <h1>
          Matola Ingadi
        </h1>
      </motion.div>

      <IngadiDescription>
        <h3>Imagine O Seu Momento</h3>
        <p>
          Se glamour e autenticidade é o que o seu evento precisa, Matola Ingadi é o espaço ideal para o seu evento. Você e seus convidados são as verdadeiras estrelas das nossas festas e eventos. São mais de 20344 eventos, realizado com profissionalismo e satisfação dos nossos clientes. Temos um espaço capaz de acolher até 350 pessoas e mais de 200 carros.
        </p>
        <p>
          Estamos a 2 minutos da estrada N4, Matola “D”, 
          Rua da paragem Aviário. Acolhemos festas de Casamento, Bodas, Aniversários, Graduação, Eventos Empresariais e Corporativos, feriados e finais de semana entre familíares e amigos.
        </p>
      </IngadiDescription>
    </Container>
  )
}

export default Guest;