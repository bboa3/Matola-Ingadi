import { PrismaClient } from "@prisma/client";

class DeleteError extends Error {
  constructor(message: string) {
    super(message); 
    this.name = "DeleteImageError";
  }
}

const prisma = new PrismaClient();

const deleteImages = (ids: number[]) => {
  try {
    ids.forEach(async id => {
      await prisma.events_photos.delete({ where: { id } })
    })
    
    return 'image deleted'

  } catch(error) {
    return new DeleteError('We was not able to delete images.');
  }
}

export default deleteImages;