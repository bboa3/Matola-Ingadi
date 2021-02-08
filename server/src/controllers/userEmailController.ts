import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import saveUserEmail from '../entity/user/saveEmail';

const prisma = new PrismaClient();

export default {
  async index(request: Request, response: Response) {
    const emails = await prisma.users.findMany({select: {email: true}});

    if(!emails)
    return response.status(404).json({error: 'não foi encontrado nenhum email'});
    response.status(200).json(emails);
  },

  async create(request: Request, response: Response) {
    const { email } = request.body;
    const user = await saveUserEmail(email);

    if(!user)
    return response.status(400).json({error: 'Não foi possível salvar o email'})

    if(user.name ===  'RegistrationError')
    return response.status(422).json({error: 'Email já em uso'});

    response.status(200).json(user);
  }
}