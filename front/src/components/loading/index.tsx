import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  progressContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LoadingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.progressContainer}>
      <CircularProgress size={50} />
    </div>
  );
};

export default LoadingPage;
