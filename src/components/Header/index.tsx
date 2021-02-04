import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useMedia  } from 'react-media';
import { Link } from 'react-router-dom';
import { jumper } from '../../utils';
import images from '../../assets/images';
import { KingIcon } from '../../assets/icons';

import { 
  Container, 
  MenuToggleBar,
  Logo,
  Options,
  Option,
  ContainerKing
} from './styles';

interface Props {
  homePage: boolean
}

const variants = {
  open: {
    x: 0,
    transition: {
      x: {duration: 1, stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    x: "-100vw",
    transition: {
      x: {duration: 1, stiffness: 1000}
    }
  }
};

const Header: React.FC<Props> = ({homePage}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const isSmallScreen = useMedia({ query: "(max-width: 738px)" });
  const smallScreenVariants = isSmallScreen ? variants : {};

  return (
    <Container>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <Logo>
          <a
            href="/#AISupremo-container" 
            onClick={(_e) => {
              if(!homePage)
              return ''
              jumper('#AISupremo-container')
              toggleOpen()
            }}
          >
            <img src={images.logo} alt="Matola Ingadi logo"/>
          </a>
        </Logo>

        <MenuToggleBar onClick={() => {toggleOpen()}}>
          Menu
        </MenuToggleBar>

        <motion.nav
          variants={smallScreenVariants}
        >
          <Options>
            <Option><Link to="/">Eventos</Link></Option>
            <Option><Link to="/acessórios-de-eventos">Acessórios</Link></Option>
            <Option><Link to="">Sobre nós</Link></Option>
            <ContainerKing>
              <KingIcon /> 
            </ContainerKing>
          </Options>
        </motion.nav>
      </motion.div>
    </Container>
  )
}

export default Header;