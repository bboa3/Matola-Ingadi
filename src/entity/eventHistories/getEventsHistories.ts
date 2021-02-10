import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getEventsHistories = async (historiesNumberToGet: number) => {
  try {
    const events = await prisma.events.findMany({
      select: {
        type: true,
        event_histories: {
          select: {
            id: true,
            title: true,
            description: true,
            events: true,
            events_photos: true,
            created_at: true
          },
          take: historiesNumberToGet,
        }
      }
    })
    
    return events

  } catch(error) {
    console.log(error);
  }
}

export default getEventsHistories;