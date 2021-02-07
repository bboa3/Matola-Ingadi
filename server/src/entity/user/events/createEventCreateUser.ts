import { PrismaClient } from '@prisma/client';
import { UserData } from "../saveUser";


const prisma = new PrismaClient();

const createEventCreateUser = async (data: UserData) => {
  try {
    const newEvent = await prisma.user_events.create({
      data: {
        date_of_event: data.date,
        user: {
          create: {
            name: data.name,
            email: data.email,
            phone_number: data.phoneNumber
          }
        },
        event: {
          connectOrCreate: {
            where: {type: data.customerEvent},
            create: {type: data.customerEvent}
          }
        }
      }
    })
    return newEvent

  } catch(error) {
    console.log(error);
  }
}

export default createEventCreateUser;