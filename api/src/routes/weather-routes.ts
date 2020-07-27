import { Router } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import Weather from '../entities/Weather';
import WeatherController from '../controllers/WeatherController';

const weatherRoutes = Router({ mergeParams: true });

weatherRoutes.get<ParamsDictionary, Weather | string>('/:city', [], WeatherController.getCurrentWeather);

export default weatherRoutes;