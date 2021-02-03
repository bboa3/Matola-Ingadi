import { Users } from "@prisma/client";
import { Response } from "express";
import { createRefreshToken } from "../views/auth/auth";

const sendRefreshToken = (response: Response, token: string) => {
  return response.cookie('grid', token, {httpOnly: true});
}

export default sendRefreshToken;