import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteImages = (ids: number[]) => {
  ids.forEach( async id => {
    await prisma.events_photos.delete({ where: { id } })  
  })
}

export default deleteImages;