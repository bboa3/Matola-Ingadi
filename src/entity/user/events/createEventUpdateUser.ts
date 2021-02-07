import { PrismaClient } from '@prisma/client';
import { UserData } from "../saveUser";


const prisma = new PrismaClient();


const createEventUpdateUser = async (id: string, data: UserData) => {
  try {
    await prisma.users.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email,
        phone_number: data.phoneNumber
      }
    });

    const newEvent = await prisma.user_events.create({
      data: {
        date_of_event: data.date,
        user: {
          connect: { id }
        },
        event: {
          connectOrCreate: {
            where: {type: data.customerEvent},
            create: {type: data.customerEvent}
          }
        }
      }
    })

    return newEvent;

  } catch(error) {
    console.log(error);
  }
}

export default createEventUpdateUser;