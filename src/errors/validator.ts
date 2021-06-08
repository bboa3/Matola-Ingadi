import { UserData } from '../entity/user/saveUser';
import * as yup from 'yup';
import { SuperuserData } from '../entity/Superuser/create';

export default {
  async user(data: UserData) {
    const schema = yup.object().shape({
      name: yup.string()
        .required('Nome obrigatório')
        .min(3, 'Nome deve ter mínimo 3 máximo 35 caracteres')
        .max(35, 'Nome deve ter mínimo 3 máximo 35 caracteres'),
      email: yup.string()
        .required('Email obrigatório!')
        .email('Email invalido, verifica o seu email e volte a tentar.'),
      phoneNumber: yup.string()
        .required('Contacto obrigatório')
        .min(6, 'o seu contacto deve ter mínimo 9 máximo 13 caracteres'),
      event: yup.string()
      .required('Evento é obrigatório')
      .min(3, 'Nome deve ter mínimo 3 máximo 46 caracteres')
      .max(46, 'Nome deve ter mínimo 3 máximo 46 caracteres'),
      date: yup.date()
      .required('A data do evento está em falta')
      .min(new Date, 'Data invalida')
    })

    await schema.validate({
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      event: data.customerEvent,
      date: data.date
    }, {
      abortEarly: false
    })
  },

  async superuser(data: SuperuserData) {
    const schema = yup.object().shape({
      name: yup.string()
        .required('Nome obrigatório')
        .min(3, 'Nome deve ter mínimo 3 máximo 35 caracteres')
        .max(35, 'Nome deve ter mínimo 3 máximo 35 caracteres'),
      email: yup.string()
        .required('Email obrigatório!')
        .email('Email invalido, verifica o seu email e volte a tentar.'),
      phoneNumber: yup.string()
        .required('Contacto obrigatório')
        .min(6, 'o seu contacto deve ter mínimo 9 máximo 13 caracteres')
    })

    await schema.validate({
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
    }, {
      abortEarly: false
    })
  },

  async email(email: string) {
    const schema = yup.object().shape({
      email: yup.string()
        .required('Email obrigatório!')
        .email('Email invalido, verifica o seu email e volte a tentar.')
    })
    await schema.validate(
      { email}, 
      { abortEarly: false}
    )
  }
}