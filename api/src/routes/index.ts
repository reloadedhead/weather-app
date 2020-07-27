import { Router } from 'express';
import weatherRoutes from './weather-routes';
import forecastRoutes from './forecast-routes';
import healthCheckRoutes from './health-check';

const routes = Router();

routes.use('/', healthCheckRoutes);
routes.use('/weather', weatherRoutes);
routes.use('/forecast', forecastRoutes);

export default routes;