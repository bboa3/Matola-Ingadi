import { PrismaClient } from "@prisma/client";
import validator from '../../errors/validator';
import uuidV4 from "../utils/uuid";

export interface SuperuserData {
  name: string
  email: string
  hashedPassword: string
  phoneNumber: string
}

const prisma = new PrismaClient();

const id = uuidV4();

const createSuperuser = async (data: SuperuserData) => {
  await validator.superuser(data);
  
  const { name, email, phoneNumber, hashedPassword } = data;

  const superuser = await prisma.super_users.findUnique({where: { email }});

  if(superuser)
  return 'AlreadySaved';

  const newSuperuser = await prisma.super_users.create({
    data: {
      id,
      name,
      email,
      password: hashedPassword,
      phone_number: phoneNumber,
      updated_at: new Date
    }
  })

  return newSuperuser
}

export default createSuperuser;