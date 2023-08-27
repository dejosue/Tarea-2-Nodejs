import { Router } from 'express';
import * as backend from './crud_Estudiante.js';

const routes = new Router();

routes.get('/', backend.informacionEstudiantes);
routes.get('/add', backend.formularioAddEstudiante);
routes.post('/add', backend.endpointEstudiante);

export default routes;