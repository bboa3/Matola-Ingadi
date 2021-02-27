import { Request, Response } from 'express';
import { UserData } from '../entity/user/saveUser';
 
import createEvent from '../entity/user/saveUser';
import sendMail from '../services/sendMail';
import { resolve } from 'path'
import handlebars from 'handlebars';
import fs from 'fs';
import ptDate from '../utils/createPtDate';

export default {
  async create(request: Request, response: Response) {
    const { 
      name,
      email,
      phoneNumber,
      customerEvent,
      date
    } = request.body;

    const emailPath = resolve(__dirname, "..", "views", "emails", "eventScheduleMail.hbs");
    const templateFileContent = fs.readFileSync(emailPath).toString('utf-8');

    const mailTemplateParse = handlebars.compile(templateFileContent);
    
    const html = mailTemplateParse({
      name,
      email,
      customerEvent,
      phoneNumber,
      date: await ptDate(date)
    })

    const sendEmailData = { 
      from: '"Matola Ingadi" <aisupremo.suporte@gmail.com>', 
      to: "aisupremo.suporte@gmail.com",
      subject: `Novo Evento, ${customerEvent}`,
      text: `
        Agendar Evento ${customerEvent}
        Nome do cliente: ${name} 
        Email: ${email ? email : 'Sem endereço de email'} 
        Telefone: ${phoneNumber} 
        Data que pretende realizar o evento: ${date}
      `, 
      html: html
    }

    sendMail(sendEmailData)
    .then(() => {
      response.status(200).json({message: `Obrigado ${name}! Entraremos em contacto.`})
    })
    .catch(err => {
      response.status(400).json({
        error: 'Não foi possível enviar os dados. Por favor, tente novamente.'
      });
    })

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