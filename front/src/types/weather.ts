export interface Weather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

export interface Forecast extends Weather {
  day: string;
}
