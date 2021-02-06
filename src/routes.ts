import { Router } from 'express';
import multer from 'multer';

import userEmailController from './controllers/userEmailController';
import eventsController from './controllers/eventsController';
import photosAccessories from './controllers/accessoriesController';
import photosEvents from './controllers/eventsHistoriesController';

import photosUploadConfig from './config/photos';

const routes = Router();
const photosUpload = multer(photosUploadConfig);

routes.post('/user/email', userEmailController.create);
routes.post('/user/event', eventsController.create);

routes.get('/accessory', photosAccessories.index);
routes.put('/accessory/add/images', photosUpload.array('images', 10), photosAccessories.update);
routes.delete('/accessory/delete/images', photosAccessories.delete);
routes.post('/accessory/create', photosUpload.array('images', 10), photosAccessories.create);

routes.get('/event', photosEvents.index);
routes.put('/event/add/images', photosUpload.array('images', 10), photosEvents.update);
routes.delete('/event/delete/images', photosEvents.delete);
routes.post('/event/create', photosUpload.array('images', 10), photosEvents.create);

export default routes;