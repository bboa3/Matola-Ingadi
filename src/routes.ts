import { Router } from 'express';
import multer from 'multer';

import usersController from './controllers/usersController';
import photosAccessories from './controllers/photosAccessoriesController';

import photosUploadConfig from './config/photos';

const routes = Router();  
const photosUpload = multer(photosUploadConfig);

routes.post('/user/login', usersController.index);
routes.post('/user/create', usersController.create);

routes.get('/images/accessory', photosAccessories.index);
routes.get('/images/accessory/:id', photosAccessories.findById);
routes.put('/images/add/images', photosUpload.array('images', 10), photosAccessories.update);
routes.delete('/images/delete/images', photosAccessories.delete);
routes.post('/images/create/accessory', photosUpload.array('images', 10), photosAccessories.create);

export default routes;