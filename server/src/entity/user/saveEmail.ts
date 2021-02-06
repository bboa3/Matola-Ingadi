import { PrismaClient } from '@prisma/client';
import validator from '../../errors/validator';

const prisma = new PrismaClient();

const saveUserEmail = async (email: string) => {
  await validator.email(email);
  const user = await prisma.users.findUnique({ where: {email} })
  
  if(user)
  return {error: {error: 'Este email já esta salvo'}}
  
  const emailSaved = await prisma.users.create({
    data: { email }
  })
  
  return {data: emailSaved}
}

export default saveUserEmail;