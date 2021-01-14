import * as yup from 'yup';

export default {
  async user(
    name: any, 
    email: any, 
    phone: any, 
    ) {
    const schema = yup.object().shape({
      name: yup.string()
        .required('Nome obrigatório')
        .min(3, 'Nome deve ter mínimo 3 máximo 35 caracteres')
        .max(35, 'Nome deve ter mínimo 3 máximo 35 caracteres'),
      email: yup.string()
        .email('inclua "@" no endereço de email'),
      phone: yup.string()
        .required('Contacto obrigatório')
        .min(6, 'o seu contacto deve ter mínimo 9 máximo 13 caracteres')
    })

    await schema.validate({
      name,
      email,
      phone
    }, {
      abortEarly: false
    })
  }
}