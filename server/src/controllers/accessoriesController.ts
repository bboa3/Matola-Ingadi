import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import accessoryViews from '../views/accessoryViews';

interface Accessory {
  paths: string[]
  category: string
}

const prisma = new PrismaClient();

export default {
  async index(request: Request, response: Response) {
   
  },

  async update(request: Request, response: Response) {
  
  },

  async delete(request: Request, response: Response) {
    
  },

  async create(request: Request, response: Response) {
    const { type, description } = request.body;

    const requestImages = request.files as Express.Multer.File[];

    


    const paths = requestImages.map(image => {
      return { url: image.filename }
    })

  }
}