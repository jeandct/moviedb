import React from 'react';
import './NavBar.css';

import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#233559',
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <header>
      <div className={classes.root}>
        <AppBar className={classes.root} position='static'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              <NavLink to='/'>MovieDB</NavLink>
            </Typography>

            <Button>
              <NavLink to='/films'>Films</NavLink>
            </Button>
            <Button>
              <NavLink to='series'>Séries</NavLink>
            </Button>
            <Button>
              <NavLink to='profil'>Profil</NavLink>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </header>
  );
};

export default NavBar;
