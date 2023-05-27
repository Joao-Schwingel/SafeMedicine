import { Router } from 'express';
import DiagnosticController from './controllers/DiagnosticController';

const routes = Router();

// User
routes.get('/diagnostic', DiagnosticController.index);

export default routes;
