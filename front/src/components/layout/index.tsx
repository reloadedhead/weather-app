import React, { ReactNode } from 'react';
import { CssBaseline, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import Header from './Header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  })
);

interface AppShell {
  children: ReactNode;
}

const AppShell = ({ children }: AppShell) => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Header title="Weather App" />
      <main className={classes.main}>
        <div className={classes.toolbar} />
        <Grid container spacing={1} justify="center">
          {children}
        </Grid>
      </main>
    </div>
  );
};

export default AppShell;
