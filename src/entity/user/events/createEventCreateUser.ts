import { PrismaClient } from '@prisma/client';
import uuidV4 from '../../utils/uuid';
import { UserData } from "../saveUser";


const prisma = new PrismaClient();

const createEventCreateUser = async (data: UserData) => {
  const userId = uuidV4();
  const eventId = uuidV4();
  const userEventId = uuidV4();

  try {
    const newEvent = await prisma.user_events.create({
      data: {
        id: userEventId,
        date_of_event: data.date,
        updated_at: new Date,
        users: {
          create: {
            id: userId,
            name: data.name,
            email: data.email,
            phone_number: data.phoneNumber,
            updated_at: new Date
          }
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
    return newEvent

  } catch(error) {
    console.log(error);
  }
}

export default createEventCreateUser;