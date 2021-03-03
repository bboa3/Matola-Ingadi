import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useMedia  } from 'react-media';
import { Link } from 'react-router-dom';
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

const Header: React.FC = () => {
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
          <Link to="/">
            <img src={images.logo} alt="Matola Ingadi logo"/>
          </Link>
        </Logo>

        <MenuToggleBar onClick={() => {toggleOpen()}}>
          Menu
        </MenuToggleBar>

        <motion.nav
          variants={smallScreenVariants}
        >
          <Options>
            <Option><Link to="/nossas-lembranças/images">Galéria</Link></Option>
            <Option><Link to="/acessórios-de-eventos">Acessórios</Link></Option>
            <Option><Link to="/sobre-nos">Sobre nós</Link></Option>
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