import axios, { AxiosPromise } from 'axios';
import { CompleteWeatherResponse } from '../types';

export default class Api {
  public static getCompleteWeatherByCoordinates = (coordinates: {
    latitude: number;
    longitude: number;
  }): AxiosPromise<CompleteWeatherResponse> => {
    return axios.get('/onecall', {
      params: { lat: coordinates.latitude, lon: coordinates.longitude },
    });
  };

  public static getCompleteWeather = (cityId: string): AxiosPromise<CompleteWeatherResponse> => {
    return axios.get('/onecall', { params: { id: cityId } });
  };
}
