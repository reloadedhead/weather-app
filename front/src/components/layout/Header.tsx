import React from 'react';
import { makeStyles, createStyles, AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
  })
);

interface Header {
  title: string;
}

const Header = ({ title }: Header) => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
