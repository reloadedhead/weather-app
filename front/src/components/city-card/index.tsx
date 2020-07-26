import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import { useWeather } from '../../context/weather';
import { useTranslation } from 'react-i18next';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
}));

export const CityCard = () => {
  const styles = useStyles();
  const { t, i18n } = useTranslation();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });
  const { currentWeather, city, loading } = useWeather();
  const showIcon = Boolean(currentWeather && !loading);
  return (
    <Card className={cx(styles.card, shadowStyles.root)}>
      <CardContent>
        <Avatar
          className={styles.avatar}
          src={showIcon ? `http://openweathermap.org/img/wn/${currentWeather!.icon}@2x.png` : undefined}
        >
          <CircularProgress />
        </Avatar>
        <h3 className={styles.heading}>
          {(currentWeather && `${currentWeather.currentTemperature.toFixed(1)}°C`) || ''}
        </h3>
        <span className={styles.subheader}>
          {city &&
            (city !== 'current'
              ? t('weather.cityDetails.subheader', { city: t(`weather.cities.${city}`) })
              : t('weather.cityDetails.subheaderCurrentPosition'))}
        </span>
      </CardContent>
      <Divider light />
      <Box display={'flex'}>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>{t('weather.cityDetails.wind')}</p>
          <p className={styles.statValue}>
            {(currentWeather && `${currentWeather.wind.toLocaleString(i18n.language)} KM/h`) || ''}
          </p>
        </Box>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>{t('weather.cityDetails.feelsLike')}</p>
          <p className={styles.statValue}>
            {(currentWeather && `${currentWeather.feelsLike.toLocaleString(i18n.language)}°C`) || ''}
          </p>
        </Box>
      </Box>
    </Card>
  );
};

export default CityCard;
