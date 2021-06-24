import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const getAccessories = async (getAccessories: string) => {
  const accessories = await prisma.accessories.findUnique({
    where: { type: getAccessories },
    select: {
      type: true,
      description: true,
      accessories_photos: true
    }
  })

  return accessories
}

export default getAccessories;