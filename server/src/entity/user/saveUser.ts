import { PrismaClient } from '@prisma/client';
import validator from '../../errors/validator';

import createEventCreateUser from './events/createEventCreateUser';
import createEventUpdateUser from './events/createEventUpdateUser';

export interface UserData {
  name: string,
  email: string,
  phoneNumber: string,
  customerEvent: string,
  date: string
}

const prisma = new PrismaClient();


const createEvent = async (data: UserData) => {
  await validator.user(data);

  const user = await prisma.users.findUnique({ where: {
    email: data.email
  }});
  
  if(user) {
    const updatedUser = await createEventUpdateUser(user.id, data);
    return {data: updatedUser}
  } 

  if(!user) {
    const newUser = await createEventCreateUser(data);
    return {data: newUser}
  }
}

export default createEvent;