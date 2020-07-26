import React, { ReactNode } from 'react';
import { CssBaseline, makeStyles, createStyles, Theme } from '@material-ui/core';
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
        {children}
      </main>
    </div>
  );
};

export default AppShell;
