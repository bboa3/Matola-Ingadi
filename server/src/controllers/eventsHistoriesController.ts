import { Request, Response } from 'express';
import eventsHistoriesViews from '../views/eventsHistories';
import createEventHistory, { EventHistory } from '../entity/eventHistories/createEventHistory';
import getEventsHistories from '../entity/eventHistories/getEventsHistories';
import deleteImages from '../entity/eventHistories/deleteImages';
import updateEventHistory, { EventHistoryData } from '../entity/eventHistories/updateEventHistory';

import eventsViews from '../views/events';

const toNegativeNumber = (number: number) => {
  return number - (number * 2);
}

export default {
  async index(request: Request, response: Response) {
    const { historiesNumberToGet } = request.params;

    const historiesToGet = toNegativeNumber(Number(historiesNumberToGet))
  
    const eventsHistories = await getEventsHistories(historiesToGet);

    if(!eventsHistories) 
    return response.status(404).json({error: 'não foi encontrado new registo histórico'});

    response.status(200).json(eventsViews.renderMany(eventsHistories));
  },

  async update(request: Request, response: Response) {
    const { id, title, description } = request.body;

    const requestImages = request.files as Express.Multer.File[];
    const photos = requestImages.map(image => {
      return { path: image.filename }
    })

    const data: EventHistoryData = {
      id: Number(id), 
      title,
      description,
      photos
    }

    const updatedEventHistory = await updateEventHistory(data);

    if(typeof updatedEventHistory === 'string')
    return response.status(200).json({message: 'Update bem sucedido!'});

    response.status(400).json({error: 'Não foi possível fazer o update'});
  },

  async delete(request: Request, response: Response) {
    const { ids } = request.body;
    const deletedPhotos = deleteImages(ids);

    if(typeof deletedPhotos === 'string')
    return response.status(200).json({message: 'Fotografias delegadas com sucesso!'});

    response.status(400).json({error: 'Não foi possível deleitar as fotografias'});
  },

  async create(request: Request, response: Response) {
    const { eventType, title, description} = request.body;

    const requestImages = request.files as Express.Multer.File[];
    const photos = requestImages.map(image => {
      return { path: image.filename }
    })

    const data: EventHistory = {
      eventType,
      title,
      description,
      photos
    }
    
    const eventHistory = await createEventHistory(data);

    if(!eventHistory)
    return response.status(400).json({error: "Não foi possível registar a historia"});

    response.status(200).json(eventsHistoriesViews.render(eventHistory))
  }
}