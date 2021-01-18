import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import eventsViews from '../views/eventsViews';

type Photos = string[]

const prisma = new PrismaClient();

export default {
  async index(request: Request, response: Response) {
    const events = await prisma.events.findMany();

    if(!events)
    return response.status(400).json({error: 'Não foi encontrada nenhum categoria'});

    response.status(200).json(eventsViews.renderMany(events));
  },

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    const event = await prisma.events.findUnique({
      where: { id }
    });

    if(!event)
    return response.status(400).json({error: 'Categoria não encontrada'});

    response.status(200).json(eventsViews.render(event))
  },

  async update(request: Request, response: Response) {
    const { id, title, description } = request.body;
    const requestImages = request.files as Express.Multer.File[];

    const event = await prisma.events.findUnique({
      where: { id }
    });

    if(!event)
    return response.status(404).json({error: 'Categoria não encontrada'});

    const unknownPhotos = event.photos as unknown;

    const photos = unknownPhotos as Photos

    if(requestImages) {
      requestImages.forEach(image => {
        photos.unshift(image.filename);
      })
    }

    const updatedEvent = await prisma.events.update({
      where: { id },
      data: {
        title: title,
        description: description,
        photos: photos
      }
    })

    response.status(200).json(eventsViews.render(updatedEvent));
  },

  async delete(request: Request, response: Response) {
    const { id, imageIndex } = request.body;

    const event = await prisma.events.findUnique({
      where: { id },
      select: { photos: true }
    });

    if(!event)
    return response.status(404).json({error: 'A imagem não foi encontrada'});

    const unknownPhotos = event.photos as unknown;

    const photos = unknownPhotos as Photos;

    const updatedPhotos = photos.filter((photo, index) => {
      if(index !== imageIndex)
      return photo;
    });
    
    const updatedEvent = await prisma.events.update({
      where: { id },
      data: { 
        photos: updatedPhotos
      }
    })

    response.status(200).json(eventsViews.render(updatedEvent));
  },

  async create(request: Request, response: Response) {
    const { id, title, description } = request.body;

    const requestImages = request.files as Express.Multer.File[];

    const events = await prisma.events.findUnique({
      where: { id }
    })

    if(events)
    return response.status(400).json({error: 'Esta categoria já existe, crie outra.'})

    const images = requestImages.map(image => {
      return image.filename
    })

    const newEvent = await prisma.events.create({
      data: {
        id,
        title,
        description,
        photos: images
      }
    })

    response.status(201).json(eventsViews.render(newEvent));
  }
}