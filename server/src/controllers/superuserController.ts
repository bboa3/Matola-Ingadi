import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import createSuperuser, { SuperuserData } from '../entity/Superuser/create';

import sendRefreshToken from '../auth/sendRefreshToken';
import { createRefreshToken } from '../views/auth/auth';

import superuserView from '../views/superuser';
import { findByEmail } from '../entity/Superuser/find';

const prisma = new PrismaClient();

export default {
  async index(request: Request, response: Response) {
    const { password, email } = request.body;

    const superuser = await findByEmail(email);

    if(!superuser)
    return response.status(404).json({ error: 'Não foi encontrado nenhum registo com seu email.'})
    

    if(!bcrypt.compareSync(password, superuser.password))
    return response.status(400).json({error: 'palavra-chave invalida'});

    sendRefreshToken(response, createRefreshToken(superuser));
    response.status(200).json(superuserView.render(superuser));
  },

  async create(request: Request, response: Response) {
    const { name, email, password, phoneNumber } = request.body;

    const salt = bcrypt.genSaltSync(13);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const data: SuperuserData = {
      name,
      email,
      hashedPassword,
      phoneNumber
    }

    const newSuperuser = await createSuperuser(data);

    if(newSuperuser === 'AlreadySaved')
    return response.status(400).json({error: 'Email já em uso, use outro.'})

    response.status(200).json(superuserView.render(newSuperuser));
  }
}