import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import eventsViews from '../views/eventsViews';

type Photos = string[]

const prisma = new PrismaClient();

export default {
  async index(request: Request, response: Response) {
  
  },

  async update(request: Request, response: Response) {
    
  },

  async delete(request: Request, response: Response) {
    
  },

  async create(request: Request, response: Response) {
    
  }
}