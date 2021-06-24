import { UserData } from '../../entity/user/saveUser';
 
import createEvent from '../../entity/user/saveUser';
import sendMail from '../../services/sendMail';
import { resolve } from 'path'
import handlebars from 'handlebars';
import fs from 'fs';
import {dateFormatar} from '../../utils/calendar/days';
import validator from '../../formValidators/EventScheduleForm';


const emailPath = resolve(__dirname, "..", "..","..", "..", "emails", "eventScheduleMail.hbs");
const templateFileContent = fs.readFileSync(emailPath).toString('utf-8');
  
const mailTemplateParse = handlebars.compile(templateFileContent);


export default async (request, response) => {

  const { 
    name,
    email,
    phoneNumber,
    customerEvent,
    date 
  } = request.body
  
  const formattedDate = dateFormatar(new Date(date))
  
  const html = mailTemplateParse({
    name,
    email,
    customerEvent,
    phoneNumber,
    date: formattedDate
  })
  
  const sendEmailData = { 
    to: 'hello.ogolfim@gmail.com',
    from: 'Matola Ingadi <sales.ogolfim@gmail.com>',
    subject: `Novo Evento, Matola Ingadi ${customerEvent}`,
    text: `
    Agendar Evento ${customerEvent}
    Nome do cliente: ${name}
    Email: ${email ? email : 'Sem endereço de email'} 
    Telefone: ${phoneNumber} 
    Data que pretende realizar o evento: ${formattedDate}
    `, 
    html: html
  }

  try {
    await sendMail(sendEmailData);

    response.status(200).json({message: `Obrigado ${name}! Entraremos em contacto.`});
  } catch(err) {
    response.status(400).json(err)
  }
  
  if(email) {
    const data: UserData = {
      name,
      email,
      phoneNumber,
      customerEvent,
      date: new Date(date)
    }

    await validator.validate({
      name,
      email,
      phoneNumber,
      customerEvent
    })
    
    await createEvent(data);
  }
}
