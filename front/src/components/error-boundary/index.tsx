import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';

const ErrorFallback = ({ error }: FallbackProps) => {
  const { t } = useTranslation();

  const handleClose = () => {
    window.location.reload();
  };

  return (
    <Dialog
      open
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onClose={() => {}}
      aria-labelledby="error-dialog-title"
      aria-describedby="error-dialog-description"
    >
      <DialogTitle id="error-dialog-title">{`${t('errorBoundary.dialog.title')} ${error?.name}`}</DialogTitle>
      <DialogContent>
        <DialogContentText id="error-dialog-description">
          {t('errorBoundary.dialog.description')}
          {error?.message}
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default ErrorFallback;
