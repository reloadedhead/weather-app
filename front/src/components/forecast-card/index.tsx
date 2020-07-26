import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import {
  List,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { useWeather } from '../../context/weather';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
  },
}));

interface DayForecast {
  dayName: string;
  dayNumber: string;
  forecast: string;
  maxTemperature: number;
  minTemperature: number;
}

const DayForecast = ({ dayName, dayNumber, forecast, maxTemperature, minTemperature }: DayForecast) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{dayNumber}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={dayName} secondary={forecast} />
      <ListItemSecondaryAction>{`${minTemperature} / ${maxTemperature}`}</ListItemSecondaryAction>
    </ListItem>
  );
};

const ForecastCard = () => {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const { forecast } = useWeather();
  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <CardContent>
        <List>
          {forecast &&
            forecast.map(forecastingDay => (
              <DayForecast
                key={`day-${format(forecastingDay.day, 'dd')}`}
                dayName={
                  format(forecastingDay.day, 'eeee', { locale: es })[0].toUpperCase() +
                  format(forecastingDay.day, 'eeee', { locale: es }).slice(1)
                }
                dayNumber={format(forecastingDay.day, 'dd')}
                forecast={forecastingDay.description || ''}
                maxTemperature={forecastingDay.maxTemperature || 0}
                minTemperature={forecastingDay.minTemperature || 0}
              />
            ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ForecastCard;
