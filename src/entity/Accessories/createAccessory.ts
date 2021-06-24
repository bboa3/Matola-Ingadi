import { PrismaClient } from "@prisma/client";
import { Photos } from "../EventHistories/createEventHistory";

const prisma = new PrismaClient();

export interface Accessory {
  type: string
  description: string
  photos: Photos
}

const createAccessory = async (data: Accessory) => {
  const { type, description, photos } = data;

  const accessory = await prisma.accessories.findUnique({
    where: { type}
  })

  if(accessory) 
  return 'AlreadySaved';

  const newAccessory = await prisma.accessories.create({
    data: {
      type,
      description,
      accessories_photos: {
        create: photos
      }
    },
    select: {
      type: true,
      description: true,
      accessories_photos: true
    }
  })
  
  return newAccessory;
}

export default createAccessory;