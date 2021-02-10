import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const getAllAccessories = async () => {
  const accessories = await prisma.accessories.findMany({
    select: {
      type: true,
      description: true,
      accessories_photos: true
    }
  })
  
  return accessories
}

export default getAllAccessories;