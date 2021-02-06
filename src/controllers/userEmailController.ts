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
    const res = await saveUserEmail(email);

    if(res.error)
    return response.status(400).json(res.error)
    response.status(200).json(res.data);
  }
}