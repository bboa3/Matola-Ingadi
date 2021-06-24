import { PrismaClient } from '@prisma/client';

export interface EventHistory {
  eventType: string
  title: string
  description: string
  events_photos: Photos
}

export type Photos = {
  path: string
}[]

const prisma = new PrismaClient();

const createEventHistory = async (data: EventHistory) => {
  
  try {
    const newEventHistory = await prisma.event_histories.create({
      data: {
        title: data.title,
        description: data.description,
        events: {
          connectOrCreate: {
            where: { type: data.eventType },
            create: { 
              type: data.eventType
            }
          }
        },
        events_photos: {
          create: data.events_photos
        }
      },
      select: {
        id: true,
        title: true,
        description: true,
        events: true,
        events_photos: true,
        created_at: true
      }
    })

    return newEventHistory;
  } catch(error) {
    console.log(error);
  }
}

export default createEventHistory;