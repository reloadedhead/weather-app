import React, { ReactNode, useState, createContext, useContext, useEffect } from 'react';
import { Weather, Forecast, CompleteWeatherResponse, City } from '../types';
import Api from '../services/api';
import { fromUnixTime } from 'date-fns';
import { getCoordinatesForCity } from '../components/utils/functions';

interface WeatherContext {
  city?: City;
  currentWeather?: Weather;
  forecast?: Forecast[];
  loading: boolean;
  selectCity: (selectedCity: City) => void;
}

const initialState: WeatherContext = {
  city: undefined,
  currentWeather: undefined,
  forecast: undefined,
  loading: false,
  selectCity: () => {},
};

const WeatherContext = createContext(initialState);

interface WeatherProvider {
  children: ReactNode;
}

export const WeatherProvider = ({ children }: WeatherProvider) => {
  const [city, setCity] = useState<City>();
  const [coordinates, setCoordinates] = useState<{ latitude: number; longitude: number }>();
  const [currentWeather, setCurrentWeather] = useState<Weather>();
  const [forecast, setForecast] = useState<Forecast[]>();
  const [loading, setLoading] = useState(false);

  const setCoordinatesFromDevice = () => {
    const onSuccess = (currentPosition: Position) => {
      setCoordinates({
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude,
      });
      setCity('current');
    };
    const onError = (error: PositionError) => {
      console.log(error);
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  };

  useEffect(() => {
    setCoordinatesFromDevice();
  }, []);

  const setCompleteWeatherResponse = (response: CompleteWeatherResponse) => {
    const { current, daily } = response;
    setCurrentWeather({
      currentTemperature: current.temp,
      feelsLike: current.feels_like,
      wind: current.wind_speed,
      description: current.weather[0].description,
    });
    setForecast(
      daily.map(f => ({
        day: fromUnixTime(f.dt),
        minTemperature: f.temp.min,
        maxTemperature: f.temp.max,
        description: f.weather[0].description,
      }))
    );
  };

  useEffect(() => {
    const fetchByCoordinates = async () => {
      try {
        setLoading(true);
        const weatherResponse = (await Api.getCompleteWeatherByCoordinates(coordinates!)).data;
        setCompleteWeatherResponse(weatherResponse);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (coordinates) {
      fetchByCoordinates();
    }
  }, [coordinates]);

  const selectCity = (selectedCity: City) => {
    setCity(selectedCity);
    if (selectedCity === 'current') {
      setCoordinatesFromDevice();
    } else {
      setCoordinates(getCoordinatesForCity(selectedCity));
    }
  };

  return (
    <WeatherContext.Provider value={{ city, selectCity, loading, currentWeather, forecast }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
