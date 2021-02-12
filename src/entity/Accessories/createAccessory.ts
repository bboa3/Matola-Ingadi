import { PrismaClient } from "@prisma/client";
import { Photos } from "../EventHistories/createEventHistory";
import uuidV4 from "../utils/uuid";

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

  const id = uuidV4();

  const newAccessory = await prisma.accessories.create({
    data: {
      id,
      type,
      description,
      updated_at: new Date,
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