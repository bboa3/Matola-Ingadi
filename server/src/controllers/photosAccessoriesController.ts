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
    const photos = await prisma.accessories.findMany();

    if(!photos) 
    return response.status(404).json({error: 'Não foi encontrado nenhum acessório'});

    response.status(200).json(accessoryViews.renderMany(photos));
  },

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    const accessory = await prisma.accessories.findUnique({
      where: { id }
    });

    if(!accessory)
    return response.status(404).json({error: 'Categoria não encontrada'});

    response.status(200).json(accessoryViews.render(accessory))
  },

  async update(request: Request, response: Response) {
    const { id, category } = request.body;
    const requestImages = request.files as Express.Multer.File[];

    const accessory = await prisma.accessories.findUnique({
      where: { id },
      select: {
        photos: true
      }
    });

    if(!accessory)
    return response.status(404).json({error: 'Categoria não encontrada'});

    const unknownPhotos = accessory.photos as unknown;

    const photos = unknownPhotos as Accessory

    requestImages.forEach(image => {
      photos.paths.unshift(image.filename);
    })

    const updatedAccessory = await prisma.accessories.update({
      where: { id },
      data: {
        photos: photos as any
      }
    })

    response.status(200).json(accessoryViews.render(updatedAccessory));
  },

  async delete(request: Request, response: Response) {
    const { id, imageIndex } = request.body;

    const accessories = await prisma.accessories.findUnique({
      where: { id },
      select: {
        photos: true
      }
    });

    if(!accessories)
    return response.status(404).json({error: 'A imagem não foi encontrada'});

    const unknownAccessory = accessories.photos as unknown;

    const accessory = unknownAccessory as Accessory;

    const updatedPaths = accessory.paths.filter((path, index) => {
      if(index !== imageIndex)
      return path;
    });
    
    const updatedAccessory = await prisma.accessories.update({
      where: { id },
      data: {
        photos: {
          category: accessory.category as any,
          paths: updatedPaths as any
        }
      }
    })

    response.status(200).json(accessoryViews.render(updatedAccessory));
  },

  async create(request: Request, response: Response) {
    const { category } = request.body;

    const requestImages = request.files as Express.Multer.File[];

    const accessories = await prisma.accessories.findMany({
     
    })

    const accessoryCategory = accessories.map(accessory => {
      const unknownPhotos = accessory.photos as unknown;
      const photos = unknownPhotos as Accessory;
      
      if(photos.category === category)
      return photos.category
    })

    if(accessoryCategory.length >= 1)
    return response.status(400).json({error: 'Esta categoria já existe, crie outra.'})

    const paths = requestImages.map(image => {
      return image.filename
    })

    const newAccessory = await prisma.accessories.create({
      data: {
        photos: {
          category,
          paths: paths
        }
      }
    })

    response.status(201).json(accessoryViews.render(newAccessory));
  }
}