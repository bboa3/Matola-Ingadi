 import * as Yup from 'yup';

const validator = Yup.object({
  name: Yup.string()
  .min(2, 'Deve ter 2 caracteres ou mais')
    .max(40, 'Deve ter 40 caracteres ou menos')
    .required('Precisamos do seu nome'),
  email: Yup.string()
    .email('Email invalido')
    .required('Precisamos do seu email'),
  phoneNumber: Yup.string()
    .required('Precisamos do seu contacto')
    .min(9, 'Contacto deve ter mínimo 9 caracteres')
    .max(13, 'Contacto deve ter no máximo 13 caracteres'),
  customerEvent: Yup.string()
    .required('Selecione o evento')
    .oneOf([
      'Casamento',
      'Boda',
      'Aniversário',
      'Graduação',
      'Evento Empresarial',
      'Evento Corporativo',
      'Evento Cultural',
      'Festá Religiosa',
      'Outros'
    ])
  })


export default validator;