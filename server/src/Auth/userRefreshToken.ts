import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { verify } from 'jsonwebtoken';
import { createAccessToken, createRefreshToken } from '../views/auth/auth';
import sendRefreshToken from './sendRefreshToken';

const prisma = new PrismaClient();

export default {

  async refresh(request: Request, response: Response) {
    const accessToken = request.cookies.grid;

    if(!accessToken)
    return response.status(401).send('');

    let payload: any = null;
    try {
      payload = verify(accessToken, process.env.REFRESH_TOKEN_SECRET!)
    } catch(err) {
      console.log(err);
      return response.status(401).send('');
    }

    const user = await prisma.users.findUnique({
      where: { id: payload.id }
    });

    if(!user)
    return response.status(403).send('');

    if(user.token_version !== payload.tokenVersion)
    return response.status(401).send('');

    sendRefreshToken(response, createRefreshToken(user));
    response.status(200).json({accessToken: createAccessToken(user)});
  },
}