import { PrismaClient } from '@prisma/client';
import validator from '../../errors/validator';

import createEventCreateUser from './events/createEventCreateUser';
import createEventUpdateUser from './events/createEventUpdateUser';

export interface UserData {
  name: string,
  email: string,
  phoneNumber: string,
  customerEvent: string,
  date: Date
}

const prisma = new PrismaClient();


const createEvent = async (data: UserData) => {
  await validator.user(data);

  const user = await prisma.users.findUnique({ where: {
    email: data.email
  }});
  
  if(user) {
    const updatedUser = await createEventUpdateUser(user.id, data);
    return updatedUser
  } 

  if(!user) {
    const newUser = await createEventCreateUser(data);
    return newUser
  }
}

export default createEvent;