import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MenuIcon from '@material-ui/icons/Menu';
import { 
  Container,
  Nav, 
  Logo,
  Options,
  Option,  
  MenuToggleBar 
} from './styles';

import images from '../../assets/images';
import icons from '../../assets/icons';

const Header: React.FC = () => {
  const [ menuId, setMenuId ] = useState('closeMenu');
  const [ active, setActive  ] = useState({left: '6.8rem'});
  const HandleMenu = () => {
    menuId === 'openMenu' ? setMenuId('closeMenu') : setMenuId('openMenu');
  }

  return (
    <Container>
      <MenuToggleBar onClick={HandleMenu}>
        <MenuIcon />
      </MenuToggleBar>

      <Nav>
        <Logo>
          <img src={images.logo} alt=""/>
        </Logo>

        <Options id={menuId}>

          <motion.span
            animate={active}
          >
            <img src={icons.pointer} alt="active"/>
          </motion.span>
          <Option>
            <a 
              href="#guest"
              onClick={e => {setActive({left: '6.8rem'})}} 
            >
              Matola Ingadi
            </a>
          </Option>

          <Option>
            <a 
              onClick={e => {setActive({left: '19rem'})}} 
              href="#events"
            >
              Eventos
            </a>
          </Option>
          
          <Option>
            <a
              onClick={e => {setActive({left: '29rem'})}}
              href="#motivation"
            >
              Motivos
            </a>
          </Option>
          
          <Option>
            <a 
              onClick={e => {setActive({left: '40rem'})}}
              href="#contacts"
            >
              Contactos
            </a>
          </Option>
        </Options>
      </Nav>
    </Container>
  )
}

export default Header; 