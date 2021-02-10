import { PrismaClient } from '@prisma/client';
import uuidV4 from '../../utils/uuid';
import { UserData } from "../saveUser";


const prisma = new PrismaClient();

const createEventUpdateUser = async (id: string, data: UserData) => {
  const userEventId = uuidV4();
  const eventId = uuidV4();

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
        id: userEventId,
        date_of_event: data.date,
        updated_at: new Date,
        users: {
          connect: { id }
        },
        events: {
          connectOrCreate: {
            where: {type: data.customerEvent},
            create: {
              id: eventId,
              type: data.customerEvent,
              updated_at: new Date
            }
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