import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

const verifyToken = (request: Request, response: Response, next: NextFunction) => {
  const bearerHeader = request.headers['authorization'];
  const apikey = request.get('X-API-KEY')

  if(typeof bearerHeader === 'undefined') 
  return response.status(401).json({message: 'Not authorized'})
  
  try {
    const bearerToken = bearerHeader.split(' ')[1];
    const payload = verify(bearerToken, process.env.ACCESS_TOKEN_SECRET!);
    request.body = {...request.body, payload};
  } catch(err) {
    console.log(err);
    return response.status(401).json({message: 'Not authorized'})
  }

  return next();
}

export default verifyToken;