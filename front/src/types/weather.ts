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

/**
 * Al tener un número límitado de ciudades (y ser únicamente una prueba de concepto),
 * está bueno tener definido un tipo para evitar errores en mappings. Para nada recomendable
 * en un caso de uso real.
 */
export type City = 'current' | 'buenosaires' | 'hongkong' | 'barcelona' | 'newyork' | 'sidney';
