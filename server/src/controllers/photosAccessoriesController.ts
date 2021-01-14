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
    const accessories = await prisma.photos.findMany();

    if(!accessories) 
    return response.status(400).json({error: 'Não foi encontrado nenhum acessório'});

    response.status(200).json(accessoryViews.renderMany(accessories));
  },

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    const accessoryFound = await prisma.photos.findUnique({
      where: { id }
    });

    if(!accessoryFound)
    return response.status(400).json({error: 'Categoria não encontrada'});

    response.status(200).json(accessoryViews.render(accessoryFound))
  },

  async update(request: Request, response: Response) {
    const { id, category } = request.body;
    const requestImages = request.files as Express.Multer.File[];

    const accessoryFound = await prisma.photos.findUnique({
      where: { id },
      select: {
        Accessories: true
      }
    });

    if(!accessoryFound)
    return response.status(400).json({error: 'Categoria não encontrada'});

    const accessory = accessoryFound.Accessories as unknown;

    const images = accessory as Accessory

    requestImages.forEach(image => {
      images.paths.unshift(image.filename);
    })

    const updatedAccessory = await prisma.photos.update({
      where: { id },
      data: {
        Accessories: images as any
      }
    })

    response.status(200).json(accessoryViews.render(updatedAccessory));
  },

  async delete(request: Request, response: Response) {
    const { id, imageIndex } = request.body;

    const accessoryFound = await prisma.photos.findUnique({
      where: { id },
      select: {
        Accessories: true
      }
    });

    if(!accessoryFound)
    return response.status(400).json({error: 'A imagem não foi encontrada'});

    const accessory = accessoryFound.Accessories as unknown;

    const images = accessory as Accessory;

    const updatedImages = images.paths.filter((image, index) => {
      if(index !== imageIndex)
      return image;
    });
    
    const updatedAccessory = await prisma.photos.update({
      where: { id },
      data: {
        Accessories: {
          category: images.category as any,
          paths: updatedImages as any
        }
      }
    })

    response.status(200).json(accessoryViews.render(updatedAccessory));
  },

  async create(request: Request, response: Response) {
    const { category } = request.body;

    const requestImages = request.files as Express.Multer.File[];

    const photos = await prisma.photos.findMany({
     
    })

    const accessory = photos.filter(photo => {
      const accessory = photo.Accessories as unknown;
      const images = accessory as Accessory;
      
      if(images.category === category)
      return images.category
    })

    if(accessory.length >= 1)
    return response.status(400).json({error: 'Esta categoria já existe, crie outra.'})

    const images = requestImages.map(image => {
      return image.filename
    })

    const newAccessory = await prisma.photos.create({
      data: {
        Accessories: {
          category,
          paths: images
        }
      }
    })

    response.status(201).json(accessoryViews.render(newAccessory));
  }
}