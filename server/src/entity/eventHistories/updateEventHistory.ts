import { PrismaClient } from "@prisma/client";
import { Photos } from "./createEventHistory";

export interface EventHistoryData {
  id: number
  title: string
  description: string
  photos: Photos
}

const prisma = new PrismaClient();

const updateEventHistory = async (data: EventHistoryData) => {
  const { id, title, description, photos } = data;

  const eventHistory = await prisma.event_histories.findUnique({
    where: { id }
  })

  if(!eventHistory)
  return 'NotFound';

  const updatedEventHistory = await prisma.event_histories.update({
    where: { id },
      data: {
        title,
        description,
        events_photos: {
          create: photos
        }
      }
    })

    return updatedEventHistory;
  }

export default updateEventHistory;