import React, { ReactNode, useState, createContext, useContext } from 'react';
import { Weather, Forecast } from '../types';

interface WeatherContext {
  city: string;
  currentWeather?: Weather;
  forecast?: Forecast[];
  loading: boolean;
  getCurrentWeather: () => Promise<void>;
  getForecast: () => Promise<void>;
  selectCity: (selectedCity: string) => void;
}

const initialState: WeatherContext = {
  city: '',
  currentWeather: undefined,
  forecast: undefined,
  loading: false,
  getCurrentWeather: () => new Promise<void>(() => {}),
  getForecast: () => new Promise<void>(() => {}),
  selectCity: (_selectedCity: string) => {},
};

const WeatherContext = createContext(initialState);

interface WeatherProvider {
  children: ReactNode;
}

export const WeatherProvider = ({ children }: WeatherProvider) => {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState<Weather>();
  const [forecast, setForecast] = useState<Forecast[]>();
  const [loading, setLoading] = useState(false);

  const getCurrentWeather = async () => {};

  const getForecast = async () => {};

  const selectCity = (selectedCity: string) => {
    setCity(selectedCity);
  };

  return (
    <WeatherContext.Provider
      value={{ city, selectCity, loading, currentWeather, forecast, getCurrentWeather, getForecast }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
