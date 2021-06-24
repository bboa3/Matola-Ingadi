import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class RegistrationError extends Error {
  constructor(message: string) {
    super(message); 
    this.name = "RegistrationError";
  }
}

const saveUserEmail = async (email: string) => {
  const user = await prisma.users.findUnique({ where: {email} })
  
  if(user)
  return new RegistrationError("Email already in use!");
  

  try {
    const emailSaved = await prisma.users.create({
      data: { 
        email,
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