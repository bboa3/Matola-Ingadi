import express from 'express';
import cors from 'cors';
import path from 'path';
import 'express-async-errors';
import routes from './routes';
import errorHandler from './errors/handler';
import { config } from 'dotenv';
import dotenvExpand from 'dotenv-expand';

dotenvExpand(config());

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads/images', express.static(path.join(__dirname, '..', 'uploads', 'images')));
app.use(errorHandler);

app.listen(process.env.HTTP_PORT || 3002);