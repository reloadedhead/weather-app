/**
 * Absolutely for demo purposes.
 */

import cities from "./Weather"
import InvalidCity from "../exceptions/InvalidCity";

const getWeatherResponse = (forCity: string) => {
  if (cities[forCity] !== undefined) {
    return cities[forCity];
  } else throw new InvalidCity('City not found');
}

export default getWeatherResponse;