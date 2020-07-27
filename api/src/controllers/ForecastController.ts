import { Request, Response } from "express";
import { Forecast } from "../entities";
import InvalidCity from "../exceptions/InvalidCity";

class ForecastController {
  static getForecast = (req: Request, res: Response<Forecast[] | string>) => {
    if (req.params.city) {
      try {
        // Here we should get the forecast.
        res.status(200).json([]);
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

export default ForecastController;