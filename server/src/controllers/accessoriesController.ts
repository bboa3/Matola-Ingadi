import { Request, Response } from 'express';
import createAccessory, { Accessory } from '../entity/Accessories/createAccessory';
import getAccessories from '../entity/Accessories/getAccessories';
import deleteImages from '../entity/Accessories/deleteImages';
import updateAccessories, { AccessoriesData } from '../entity/Accessories/updateAccessories';
import getAllAccessories from '../entity/Accessories/getAllAccessories';

import accessoriesViews from '../views/accessories';
import sendRefreshToken from '../auth/sendRefreshToken';
import { createRefreshToken } from '../views/auth/auth';

export default {
  async index(request: Request, response: Response) {
    const { accessoriesType } = request.params;
    const accessories = await getAccessories(accessoriesType);

    if(!accessories)
    return response.status(404).json({ error: `Não foi encontrado nenhum acessório do tipo ${accessoriesType}` })

    response.status(200).json(accessoriesViews.render(accessories))
  },

  async getAll(request: Request, response: Response) {
    const accessories = await getAllAccessories();

    if(!accessories)
    return response.status(404).json({ error: `Não foi encontrado nenhum acessório.` })

    response.status(200).json(accessoriesViews.renderMany(accessories))
  },

  async update(request: Request, response: Response) {
    const { accessoriesType, description } = request.body;

    const requestImages = request.files as Express.Multer.File[];
    const accessories_photos = requestImages.map(image => {
      return { path: image.filename }
    })
    
    const data: AccessoriesData = {
      accessoriesType,
      description,
      accessories_photos
    }

    const updatedAccessories = await updateAccessories(data);

    if(updatedAccessories === 'NotFound')
    return response.status(404).json({error: `Não foram encontrado os acessórios, ${accessoriesType}.`});

    response.status(200).json({error: 'Atualização feita com sucesso.'});
  },

  async delete(request: Request, response: Response) {
    const { ids } = request.body;
    deleteImages(ids);
    response.status(200).json({message: 'Dano!'});
  },

  async create(request: Request, response: Response) {
    const { type, description } = request.body;

    const requestImages = request.files as Express.Multer.File[];

    const photos = requestImages.map(image => {
      return { path: image.filename }
    })

    const data: Accessory = {
      type,
      description,
      photos
    }
    
    const newAccessory = await createAccessory(data);

    if(newAccessory === "AlreadySaved")
    return response.status(400).json({
      error: 'O tipo de acessórios já existe. Você pode atualizar com novas fotos.'
    });

    response.status(201).json(accessoriesViews.render(newAccessory))
  }
}