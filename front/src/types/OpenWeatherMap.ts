interface WeatherDetails {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface DayForecast {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
  };
  weather: WeatherDetails[];
}

export interface CompleteWeatherResponse {
  current: {
    dt: number;
    temp: number;
    feels_like: number;
    wind_speed: number;
    weather: WeatherDetails[];
  };
  daily: DayForecast[];
}
