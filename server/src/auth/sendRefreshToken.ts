import { Response } from "express";

const sendRefreshToken = (response: Response, token: string) => {
  return response.cookie('grid', token, {httpOnly: true});
}

export default sendRefreshToken;