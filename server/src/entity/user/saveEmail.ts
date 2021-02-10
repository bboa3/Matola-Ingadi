import { PrismaClient } from '@prisma/client';
import validator from '../../errors/validator';
import uuidV4 from '../utils/uuid';

const prisma = new PrismaClient();

class RegistrationError extends Error {
  constructor(message: string) {
    super(message); 
    this.name = "RegistrationError";
  }
}

const saveUserEmail = async (email: string) => {
  await validator.email(email);
  const user = await prisma.users.findUnique({ where: {email} })
  
  if(user)
  return new RegistrationError("Email already in use!");
  
  const userId = uuidV4();

  try {
    const emailSaved = await prisma.users.create({
      data: { 
        id: userId,
        email,
        updated_at: new Date
       },
      select: {
        name: true,
        email: true,
        phone_number: true,
        user_events: true,
        created_at: true
      }
    })

    return emailSaved;

  } catch(error) {
    console.log(error);
  }
}

export default saveUserEmail;