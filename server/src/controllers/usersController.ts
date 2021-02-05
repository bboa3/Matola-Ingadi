import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import userViews from '../views/userViews';

import validator from '../errors/userValidator';
import mailer from '../modules/mailer';

const prisma = new PrismaClient();

export default {
  async index(request: Request, response: Response) {
    const { email } = request.body;

    const user = await prisma.users.findUnique({where: { email }});
    if(!user)
    return response.status(404).json({error: 'usuário não encontrado'});

    response.json(userViews.render(user));
  },

  async update(request: Request, response: Response) {
    const { username, password, payload } = request.body;
    
    const user = await prisma.users.findUnique({where: { id: payload.id }});
    if(!user)
    return response.status(404).json({error: 'usuário não encontrado'});

    response.json(userViews.render(user));
  },

  async create(request: Request, response: Response) {
    const { 
      name,
      email,
      phone_number,
      customerEvent
    } = request.body;

    async function main() {
      await mailer.sendMail({ 
        from: '"Matola Ingadi" <codytech.4@gmail.com>', 
        to: "codytech.4@gmail.com",
        subject: `Novo Evento, ${customerEvent}`,
        text: `
          NOME: ${name} 
          EMAIL: ${email ? email : 'Sem endereço de email'} 
          TELEFONE: ${phone_number} 
          EVENTO: ${customerEvent}
        `, 
        html: `
          <b> NOME:   ${name} 
          <br/><br/> EMAIL:   ${email ? email : 'Sem endereço de email'} 
          <br/><br/> TELEFONE:   ${phone_number} 
          <br/><br/> EVENTO:   ${customerEvent}</b>
        `, 
      });
      response.status(200).json({message: `Obrigado ${name}! Entraremos em contacto`})
    }

    main().catch(err => {
      response.status(400).json({
        error: 'Não foi possível enviar. Por favor, tente novamente.'
      });
    });

    if(email) {
      const user = await prisma.users.findUnique({ where: {email} })

      if(!user) {
        await validator.user(name, email, phone_number );

        await prisma.users.create({
          data: {
            name,
            email,
            phone_number,
          }
        })
      }
    }
  }
}