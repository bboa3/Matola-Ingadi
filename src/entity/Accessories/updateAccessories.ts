import { PrismaClient } from "@prisma/client";
import { Photos } from "../eventHistories/createEventHistory";

export interface AccessoriesData {
  accessoriesType: string
  description: string
  accessories_photos:  Photos
}

const prisma = new PrismaClient();

const updateAccessories = async (data: AccessoriesData) => {
  const { accessoriesType, description, accessories_photos } = data;

  const accessories = await prisma.accessories.findUnique({
    where: { type: accessoriesType }
  })

  if(!accessories)
  return 'AccessoriesTypeNotFound'

  const updatedAccessories = await prisma.accessories.update({
    where: { type: accessoriesType },
    data: {
      type: accessoriesType,
      description: description,
      accessories_photos: {
        create: accessories_photos
      }
    }
  })

  return updatedAccessories
}

export default updateAccessories;