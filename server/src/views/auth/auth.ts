import { sign } from "jsonwebtoken";
import { super_users } from "@prisma/client";

export const createAccessToken = (user: super_users) => {
  return sign({id: user.id}, process.env.ACCESS_TOKEN_SECRET!, {expiresIn: '20m'})
}

export const createRefreshToken = (user: super_users) => {
  return sign(
    {id: user.id, tokenVersion: user.token_version}, 
    process.env.REFRESH_TOKEN_SECRET!, 
    {expiresIn: '7d'}
  )
}