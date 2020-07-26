import React, { useState } from 'react';
import CityCard from '../city-card';
import { Grid, Fab, makeStyles, Theme, createStyles } from '@material-ui/core';
import ForecastCard from '../forecast-card';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useWeather } from '../../context/weather';
import SelectCityDialog from '../dialogs/select-city';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);

const Weather = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const { city } = useWeather();
  return (
    <div>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={12}>
          <CityCard />
        </Grid>
        <Grid item xs={12}>
          <ForecastCard />
        </Grid>
      </Grid>
      <Fab className={classes.fab} color="secondary" variant="extended" onClick={() => setOpenDialog(true)}>
        <LocationOnIcon />
        {city || 'Posición Actual'}
      </Fab>
      <SelectCityDialog open={openDialog} setOpen={setOpenDialog} />
    </div>
  );
};

export default Weather;
