import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const revokeRefreshTokenForUser = async (id: string) => {
  const user = await prisma.users.findUnique(
    { where: { id }, 
    select: {
      token_version: true
    } 
  });

}

export default revokeRefreshTokenForUser;