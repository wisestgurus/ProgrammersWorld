import * as express from 'express';
import { homepageController } from './homepage.controller';

export const homepageRouter = express.Router();

homepageRouter.get('/', homepageController.index);