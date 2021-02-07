import { Router } from 'express';
import multer from 'multer';

import userEmailController from './controllers/userEmailController';
import eventsController from './controllers/eventsController';
import photosAccessories from './controllers/accessoriesController';
import eventsHistories from './controllers/eventsHistoriesController';

import photosUploadConfig from './config/photos';

const routes = Router();
const photosUpload = multer(photosUploadConfig);

routes.post('/user/email', userEmailController.create);
routes.post('/user/event', eventsController.create);

routes.get('/event/histories/:historiesNumberToGet', eventsHistories.index);
routes.post('/event/histories', photosUpload.array('images', 10), eventsHistories.create);
routes.delete('/event/histories', eventsHistories.delete);
routes.put('/event/histories', photosUpload.array('images', 10), eventsHistories.update);

routes.get('/accessory', photosAccessories.index);
routes.put('/accessory/add/images', photosUpload.array('images', 10), photosAccessories.update);
routes.delete('/accessory/delete/images', photosAccessories.delete);
routes.post('/accessory/create', photosUpload.array('images', 10), photosAccessories.create);

export default routes;