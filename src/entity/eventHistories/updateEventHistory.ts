import { PrismaClient } from "@prisma/client";
import { Photos } from "./createEventHistory";

export interface EventHistoryData {
  id: number
  title: string
  description: string
  photos: Photos
}

class UpdateError extends Error {
  constructor(message: string) {
    super(message); 
    this.name = "UpdateEventHistoryError";
  }
}


const prisma = new PrismaClient();

const updateEventHistory = async (data: EventHistoryData) => {
  const { id, title, description, photos } = data;
  try {
    await prisma.event_histories.update({
      where: { id },
      data: {
        title,
        description,
        photos: {
          create: photos
        }
      }
    })
    return 'Event history updated successfully';
  } catch(error) {
    console.log(error);
    return new UpdateError('Was not able to update history.');
  }
}

export default updateEventHistory;