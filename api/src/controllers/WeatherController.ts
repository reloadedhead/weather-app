import { Request, Response } from "express";
import Weather from "../entities/Weather";
import weatherResponseMock from "../mocks/Weather";
import InvalidCity from "../exceptions/InvalidCity";
import getWeatherResponse from "../mocks/functions";

class WeatherController {
  static getCurrentWeather = (req: Request, res: Response<Weather | string>) => {
    if (req.params.city) {
      try {
        res.status(200).json(getWeatherResponse(req.params.city));
      } catch (error) {
        if (error instanceof InvalidCity) {
          res.status(400).json(error.name);
        } else {
          res.status(500);
        }
      }
    } else {
      res.status(400).send('invalid-parameters');
    }
  }
}

export default WeatherController;