import React from 'react';
import CityCard from '../city-card';
import { Grid } from '@material-ui/core';
import ForecastCard from '../forecast-card';

const Weather = () => (
  <Grid container item xs={12} spacing={3}>
    <Grid item xs={12}>
      <CityCard />
    </Grid>
    <Grid item xs={12}>
      <ForecastCard />
    </Grid>
  </Grid>
);

export default Weather;
