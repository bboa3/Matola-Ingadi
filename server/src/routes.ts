import { Router } from 'express';
import multer from 'multer';

import userEmailController from './controllers/userEmailController';
import eventsController from './controllers/eventsController';
import photosAccessories from './controllers/photosAccessoriesController';
import photosEvents from './controllers/photosEventsController';

import photosUploadConfig from './config/photos';

const routes = Router();
const photosUpload = multer(photosUploadConfig);

routes.post('/user/email', userEmailController.create);
routes.post('/user/event', eventsController.create);

routes.get('/images/accessory', photosAccessories.index);
routes.get('/images/accessory/:id', photosAccessories.findById);
routes.put('/images/accessory/add/images', photosUpload.array('images', 10), photosAccessories.update);
routes.delete('/images/accessory/delete/images', photosAccessories.delete);
routes.post('/images/accessory/create', photosUpload.array('images', 10), photosAccessories.create);

routes.get('/images/event', photosEvents.index);
routes.get('/images/event/:id', photosEvents.findById);
routes.put('/images/event/add/images', photosUpload.array('images', 10), photosEvents.update);
routes.delete('/images/event/delete/images', photosEvents.delete);
routes.post('/images/event/create', photosUpload.array('images', 10), photosEvents.create);

export default routes;