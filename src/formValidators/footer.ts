 import * as Yup from 'yup';

const validator = Yup.object({
  email: Yup.string()
    .email('Email invalido')
    .required('Precisamos do seu email'),
  })


export default validator;