import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useMedia  } from 'react-media';
import { Link } from 'react-router-dom';
import { jumper } from '../../utils';
import images from '../../assets/images';
import icons from '../../assets/icons';

import { 
  Container, 
  MenuToggleBar,
  Logo,
  Options,
  Option,
  KingIcon
} from './styles';

interface Props {
  homePage: boolean
}

const variants = {
  open: {
    y: 0,
    transition: {
      y: {duration: 1, stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: "-53vh",
    transition: {
      y: {duration: 1, stiffness: 1000}
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
            <Option><Link to="">Eventos</Link></Option>
            <Option><Link to="">Motivos</Link></Option>
            <Option><Link to="">Contactos</Link></Option>
            <KingIcon>
              <img src={icons.king} alt="Rei Maputo Eventos"/>
            </KingIcon>
          </Options>
        </motion.nav>
      </motion.div>
    </Container>
  )
}

export default Header;