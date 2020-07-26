export interface Weather {
  currentTemperature: number;
  feelsLike: number;
  wind: number;
  description: string;
}

export interface Forecast extends Partial<Weather> {
  day: Date;
  minTemperature: number;
  maxTemperature: number;
}
