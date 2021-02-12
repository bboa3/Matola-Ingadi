import { Router } from 'express';
import multer from 'multer';

import superuserController from './controllers/superuserController';
import userEmailController from './controllers/userEmailController';
import eventsController from './controllers/eventsController';
import accessoriesController from './controllers/accessoriesController';
import eventsHistoriesController from './controllers/eventsHistoriesController';

import refreshTokenController from './auth/refreshTokenController';
import verifyToken from './Auth/isSuperuser';
import photosUploadConfig from './config/photos';

const routes = Router();
const photosUpload = multer(photosUploadConfig);

routes.post('/user/email', userEmailController.create);
routes.post('/user/event', eventsController.create);

routes.get('/event/histories/:historiesNumberToGet', eventsHistoriesController.index);
routes.post('/event/histories', verifyToken, photosUpload.array('images', 10), eventsHistoriesController.create);
routes.delete('/event/histories', verifyToken, eventsHistoriesController.delete);
routes.put('/event/histories', verifyToken, photosUpload.array('images', 10), eventsHistoriesController.update);

routes.get('/accessories/:accessoriesType', accessoriesController.index);
routes.get('/accessories/get/all', accessoriesController.getAll);
routes.put('/accessories', verifyToken, photosUpload.array('images', 10), accessoriesController.update);
routes.delete('/accessories', verifyToken, accessoriesController.delete);
routes.post('/accessories', verifyToken, photosUpload.array('images', 10), accessoriesController.create);


routes.post('/superuser/refresh_token', refreshTokenController.refresh);
routes.post('/superuser/login', superuserController.index);
routes.post('/superuser/auth', superuserController.create);

export default routes;