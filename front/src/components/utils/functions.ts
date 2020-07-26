export const getCoordinatesForCity = (city: string) => {
  const Coordinates: { [key: string]: { latitude: number; longitude: number } } = {
    buenosaires: {
      latitude: -34.61,
      longitude: -58.46,
    },
    newyork: {
      latitude: 40.69,
      longitude: -74.11,
    },
    barcelona: {
      latitude: 41.39,
      longitude: -2.11,
    },
    hongkong: {
      latitude: 22.35,
      longitude: 113.98,
    },
    sidney: {
      latitude: -33.84,
      longitude: 150.65,
    },
  };
  return Coordinates[city];
};
