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
    return response.status(404).json({error: 'Não foi encontrado o registo do evento.'});

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

    if(updatedEventHistory === 'EventHistoryNotFound')
    return response.status(404).json({error: 'Não foi encontrado o registo do evento'});

    response.status(200).json({message: 'Atualização feita com sucesso.'});
  },

  async delete(request: Request, response: Response) {
    const { ids } = request.body;
    deleteImages(ids);

    response.status(200).json({message: 'Dano!'});
  },

  async create(request: Request, response: Response) {
    const { eventType, title, description} = request.body;

    const requestImages = request.files as Express.Multer.File[];
    const events_photos = requestImages.map(image => {
      return { path: image.filename }
    })

    const data: EventHistory = {
      eventType,
      title,
      description,
      events_photos
    }
    
    const eventHistory = await createEventHistory(data);

    if(!eventHistory)
    return response.status(400).json({error: "Não foi possível registar a historia."});

    response.status(201).json(eventsHistoriesViews.render(eventHistory))
  }
}