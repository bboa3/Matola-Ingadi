import { Request, Response } from 'express';
import { UserData } from '../entity/user/saveUser';
 
import mailer from '../modules/mailer';
import createEvent from '../entity/user/saveUser';

export default {
  async create(request: Request, response: Response) {
    const { 
      name,
      email,
      phoneNumber,
      customerEvent,
      date
    } = request.body;

    async function main() {
      await mailer.sendMail({ 
        from: '"Matola Ingadi" <codytech.4@gmail.com>', 
        to: "codytech.4@gmail.com",
        subject: `Novo Evento, ${customerEvent}`,
        text: `
          NOME: ${name} 
          EMAIL: ${email ? email : 'Sem endereço de email'} 
          TELEFONE: ${phoneNumber} 
          EVENTO: ${customerEvent}
          DATA DO EVENTO: ${date}
        `, 
        html: `
          <b> NOME:   ${name} 
          <br/><br/> EMAIL:   ${email ? email : 'Sem endereço de email'} 
          <br/><br/> TELEFONE:   ${phoneNumber} 
          <br/><br/> EVENTO:   ${customerEvent}</b>
          <br/><br/> DATA DO EVENTO: ${date}</b>
        `, 
      });
      response.status(200).json({message: `Obrigado ${name}! Entraremos em contacto`})
    }

    main().catch(err => {
      response.status(400).json({
        error: 'Não foi possível enviar os dados. Por favor, tente novamente.'
      });
    });

    const data: UserData = {
      name,
      email,
      phoneNumber,
      customerEvent,
      date
    }

    if(email) {
      await createEvent(data);
    }
  }
}