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
  ListSubheader,
  Collapse,
} from '@material-ui/core';
import { useWeather } from '../../context/weather';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';

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
  icon?: string;
}

const DayForecast = ({ dayName, dayNumber, forecast, maxTemperature, minTemperature, icon }: DayForecast) => {
  const { i18n } = useTranslation();
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={icon && `http://openweathermap.org/img/wn/${icon}@2x.png`}>{dayNumber}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={dayName} secondary={forecast} />
      <ListItemSecondaryAction>{`${minTemperature.toLocaleString(
        i18n.language
      )}°C / ${maxTemperature.toLocaleString(i18n.language)}°C`}</ListItemSecondaryAction>
    </ListItem>
  );
};

const ForecastCard = () => {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const { forecast, loading } = useWeather();
  const { t } = useTranslation();
  return (
    <Collapse in={!loading} unmountOnExit>
      <Card className={cx(styles.card, shadowStyles.root)}>
        <CardContent>
          <List subheader={<ListSubheader>{t('weather.forecast.subheader')}</ListSubheader>}>
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
                  icon={forecastingDay.icon}
                />
              ))}
          </List>
        </CardContent>
      </Card>
    </Collapse>
  );
};

export default ForecastCard;
