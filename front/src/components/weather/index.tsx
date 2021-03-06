import React, { useState } from 'react';
import CityCard from '../city-card';
import { Grid, Fab, makeStyles, Theme, createStyles } from '@material-ui/core';
import ForecastCard from '../forecast-card';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useWeather } from '../../context/weather';
import SelectCityDialog from '../dialogs/select-city';
import { useTranslation } from 'react-i18next';
import { useIsOnline } from 'react-use-is-online';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    card: {
      marginBottom: theme.spacing(2),
    },
  })
);

const Weather = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const { city } = useWeather();
  const { t } = useTranslation();
  const { isOnline } = useIsOnline();
  return (
    <div>
      <Grid container item xs={12}>
        <Grid item xs={12} className={classes.card}>
          <CityCard />
        </Grid>
        <Grid item xs={12} className={classes.card}>
          <ForecastCard />
        </Grid>
      </Grid>
      <Fab
        disabled={!isOnline}
        className={classes.fab}
        color="secondary"
        variant="extended"
        onClick={() => setOpenDialog(true)}
      >
        <LocationOnIcon />
        {(city && t(`weather.cities.${city}`)) || t('weather.buttons.selectCity')}
      </Fab>
      <SelectCityDialog open={openDialog} setOpen={setOpenDialog} />
    </div>
  );
};

export default Weather;
