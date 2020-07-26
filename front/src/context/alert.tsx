import React, { ReactNode, useState, createContext, useContext } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';

interface Alert {
  title: string;
  description: string;
}

interface AlertContextInterface {
  alert: Alert | undefined;
  showAlert: (title: string, description: string) => void;
}

const initialState: AlertContextInterface = {
  alert: undefined,
  showAlert: () => {},
};

interface ProviderProps {
  children: ReactNode;
}

export const AlertContext = createContext(initialState);

export const AlertProvider = ({ children }: ProviderProps) => {
  const [alert, setAlert] = useState<Alert | undefined>();
  const [open, setOpen] = useState(false);

  const showAlert = (title: string, description: string) => {
    setAlert({ title, description });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert }}>
      {children}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{alert?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{alert?.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
