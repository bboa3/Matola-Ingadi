/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Main } from './styles';
import images from '../../assets/images';

import api from '../../services/api';
import Input from '../Input/styles';
import { PhoneIcon } from '../../assets/icons';

interface Props {
  homePage: boolean
}

const Footer: React.FC<Props> = ({ homePage }) => {
  const [ email, setEmail ] = useState('');

  const [ ApiResponse, setApiResponse ] = useState('');
  const [ styles, setStyles ] = useState({
    color: 'var(--color-success)'
  })

  const handlerForm = (e: FormEvent) => {
    e.preventDefault();

    api.post('/ingadi/create', {
      email
    })
    .then(response => {
      setEmail('')
      setApiResponse(response.data.message);
    })
    .catch(err => {
      setStyles({
        color: 'var(--color-error)'
      })
      setApiResponse(err.response.data.message);
    })
  }

  return (
    <Container>
      <span>
          <PhoneIcon />
         +258 873970401
      </span>
      <Main>
        <section>
          <span>
            Deixe seu email e mantenha-se em contacto
          </span>

          <form onSubmit={handlerForm}>
            <span style={styles}> {ApiResponse} </span>
            <div>
              <Input 
                id="footer-email-info"
                type="email" 
                placeholder="E-mail"
                value={email} 
                required
                onChange={e => {setEmail(e.target.value)}}
              />
              <button type="submit">Ok</button>
            </div>
          </form>

          <img src={images.logo} alt="Matola Ingadi logo"/>
        </section>

        <section>
          <Link to="/nossas-lembranças/images">
            Eventos Realizados
          </Link>
          <Link to="/acessórios-de-eventos">
            Acessórios de Eventos
          </Link>
        </section>

        <section>
          <div>
            <a>Termos e privacidade</a>
            <Link to="/visitar-matola-ingadi">Visite-nos</Link>
            <Link to="/">sobre nós</Link>
          </div>
          <div>
            <a rel="noreferrer" target="_blank" href="https://web.facebook.com/matola.ingadi.1">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48 24.146C48 10.8073 37.2581 0 24 0C10.7419 0 0 10.8073 0 24.146C0 36.1976 8.77645 46.1871 20.25 48V31.126H14.1532V24.146H20.25V18.8261C20.25 12.775 23.8306 9.43254 29.3148 9.43254C31.9413 9.43254 34.6877 9.90377 34.6877 9.90377V15.8429H31.6606C28.68 15.8429 27.75 17.7045 27.75 19.6138V24.146H34.4061L33.3416 31.126H27.75V48C39.2235 46.1871 48 36.1976 48 24.146Z" fill="white"/>
              </svg>
            </a >
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/matolaingadi/">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.0054 11.6934C17.1949 11.6934 11.7015 17.188 11.7015 24C11.7015 30.812 17.1949 36.3066 24.0054 36.3066C30.8158 36.3066 36.3092 30.812 36.3092 24C36.3092 17.188 30.8158 11.6934 24.0054 11.6934ZM24.0054 32.0009C19.6042 32.0009 16.0062 28.4128 16.0062 24C16.0062 19.5872 19.5935 15.9991 24.0054 15.9991C28.4172 15.9991 32.0045 19.5872 32.0045 24C32.0045 28.4128 28.4065 32.0009 24.0054 32.0009ZM39.6823 11.19C39.6823 12.7859 38.3973 14.0605 36.8125 14.0605C35.217 14.0605 33.9427 12.7752 33.9427 11.19C33.9427 9.60482 35.2277 8.31954 36.8125 8.31954C38.3973 8.31954 39.6823 9.60482 39.6823 11.19ZM47.8313 14.1033C47.6493 10.2582 46.7712 6.85217 43.9549 4.04597C41.1494 1.23976 37.7441 0.361486 33.8998 0.168694C29.9378 -0.0562312 18.0622 -0.0562312 14.1002 0.168694C10.2666 0.350775 6.86135 1.22905 4.04506 4.03526C1.22878 6.84146 0.361405 10.2475 0.168656 14.0926C-0.0562186 18.0556 -0.0562186 29.9337 0.168656 33.8967C0.350697 37.7418 1.22878 41.1478 4.04506 43.954C6.86135 46.7602 10.2559 47.6385 14.1002 47.8313C18.0622 48.0562 29.9378 48.0562 33.8998 47.8313C37.7441 47.6492 41.1494 46.7709 43.9549 43.954C46.7605 41.1478 47.6386 37.7418 47.8313 33.8967C48.0562 29.9337 48.0562 18.0663 47.8313 14.1033ZM42.7128 38.1488C41.8775 40.2481 40.2606 41.8655 38.151 42.7116C34.9921 43.9647 27.4963 43.6756 24.0054 43.6756C20.5144 43.6756 13.0079 43.954 9.85968 42.7116C7.76085 41.8762 6.14389 40.2588 5.29794 38.1488C4.04506 34.9892 4.33419 27.4917 4.33419 24C4.33419 20.5083 4.05577 13.0001 5.29794 9.85117C6.13318 7.75187 7.75014 6.13455 9.85968 5.28841C13.0186 4.03526 20.5144 4.32444 24.0054 4.32444C27.4963 4.32444 35.0028 4.04597 38.151 5.28841C40.2499 6.12384 41.8668 7.74116 42.7128 9.85117C43.9656 13.0108 43.6765 20.5083 43.6765 24C43.6765 27.4917 43.9656 34.9999 42.7128 38.1488Z" fill="white"/>
              </svg>
            </a>
          </div>
        </section>
      </Main>
      <span>
        &copy; {new Date().getFullYear()} Matola Ingadi - todos direitos reservados
      </span>
    </Container>
  )
}

export default Footer;