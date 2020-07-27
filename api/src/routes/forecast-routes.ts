import { Router } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { Forecast } from '../entities';
import { ForecastController } from '../controllers';

const forecastRoutes = Router({ mergeParams: true });

forecastRoutes.get<ParamsDictionary, Forecast[] | string>('/:city', ForecastController.getForecast);

export default forecastRoutes;