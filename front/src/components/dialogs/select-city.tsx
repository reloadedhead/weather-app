import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { useWeather } from '../../context/weather';
import { City } from '../../types';
import { useTranslation } from 'react-i18next';
import { getCountryEmoji } from '../utils/functions';

interface SelectCityDialog {
  open: boolean;
  setOpen: Function;
}

const CityCodes: City[] = ['current', 'buenosaires', 'newyork', 'barcelona', 'hongkong', 'sidney'];

const SelectCityDialog = ({ open, setOpen }: SelectCityDialog) => {
  const { t } = useTranslation();
  const { selectCity } = useWeather();
  const handleSelectCity = (city: City) => {
    selectCity(city);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle id="alert-dialog-title">{'Seleccionar ciudad'}</DialogTitle>
      <DialogContent>
        <List disablePadding>
          {CityCodes.map(city => (
            <ListItem button key={city} onClick={() => handleSelectCity(city)}>
              <ListItemText primary={`${getCountryEmoji(city)} ${t(`weather.cities.${city}`)}`} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="primary" autoFocus>
          {t('shared.buttons.cancel')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectCityDialog;
