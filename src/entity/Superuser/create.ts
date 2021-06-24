import { PrismaClient } from "@prisma/client";

export interface SuperuserData {
  name: string
  email: string
  hashedPassword: string
  phoneNumber: string
}

const prisma = new PrismaClient();

const createSuperuser = async (data: SuperuserData) => {
  
  const { name, email, phoneNumber, hashedPassword } = data;

  const superuser = await prisma.super_users.findUnique({where: { email }});

  if(superuser)
  return 'AlreadySaved';

  const newSuperuser = await prisma.super_users.create({
    data: {
      name,
      email,
      password: hashedPassword,
      phone_number: phoneNumber
    }
  })

  return newSuperuser
}

export default createSuperuser;