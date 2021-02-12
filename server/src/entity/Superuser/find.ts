import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient();

export const findByEmail = async (email: string) => {
  const superuser = await prisma.super_users.findUnique({
    where: { email }
  })

  return superuser;
}

export const findById = async (id: string) => {
  const superuser = await prisma.super_users.findUnique({
    where: { id }
  })

  return superuser;
}