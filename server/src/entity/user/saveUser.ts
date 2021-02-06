import { PrismaClient } from '@prisma/client';
import validator from '../../errors/validator';

export interface UserData {
  name: string,
  email: string,
  phoneNumber: string,
  customerEvent: string,
  date: string
}

const prisma = new PrismaClient();


const update = (id: string, data: UserData) => {
  return prisma.users.update({
    where: { id },
    data: {
      email: data.email,
      phone_number: data.phoneNumber,
      name: data.name,
      user_events: {
        create: {
          event: data.customerEvent,
          date: data.date
        }
      }
    }
  })
}

const create = (data: UserData) => {
  return prisma.users.create({
    data: {
      email: data.email,
      phone_number: data.phoneNumber,
      name: data.name,
      user_events: {
        create: {
          event: data.customerEvent,
          date: data.date
        }
      }
    }
  })
}


const saveUser = async (data: UserData) => {
  await validator.user(data);

  const user = await prisma.users.findUnique({ where: {
    email: data.email
  }});
  
  if(user) {
    const updatedUser = await update(user.id, data);
    return {data: updatedUser}
  } 

  if(!user) {
    const newUser = await create(data);
    return {data: newUser}
  }
}

export default saveUser;