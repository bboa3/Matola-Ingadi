import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useCycle } from 'framer-motion';
import Link from 'next/link';
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

  return (
    <Container>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <Logo>
          <Link href="/">
            <a>
              <Image 
                width={1438}
                height={792}
                src={'/images/logo-1.png'} 
                alt="logo"
              />
            </a>
          </Link>
        </Logo>

        <MenuToggleBar onClick={() => {toggleOpen()}}>
          Menu
        </MenuToggleBar>

        <motion.nav
          variants={
            (process.browser) && (
              (window.innerWidth < 738 ? true : false) ? variants : {}
            )
          }
        >
          <Options>
            <Option><Link href="/galeria"><a>Galéria</a></Link></Option>
            <Option><Link href="/acessorios-de-eventos"><a>Acessórios</a></Link></Option>
            <Option><Link href="/quem-somos"><a>Sobre nós</a></Link></Option>
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