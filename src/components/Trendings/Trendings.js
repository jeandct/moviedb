import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Link } from 'react-router-dom';

import './Trendings.css';
//import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  img: {
    width: 200,
    height: 'auto',
    borderRadius: 10,
    boxShadow: '3px 3px 5px #000',
  },

  figcaption: {
    width: 200,
    textAlign: 'center',
  },
}));

export default function Trendings(props) {
  const classes = useStyles();

  const { trendingFilms } = props;

  //const tileData = trendingFilms;

  return (
    <>
      <div className={classes.root}>
        <GridList
          className={classes.gridList}
          cellHeight={400}
          spacing={10}
          cols={2}
        >
          {trendingFilms.map((film) => (
            <Link to={`/film/${film.id}`} key={film.id}>
              <GridListTile>
                <img
                  className={classes.img}
                  src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
                  alt={film.title}
                />
                <figcaption className={classes.figcaption}>
                  {film.title}
                </figcaption>
              </GridListTile>
            </Link>
          ))}
        </GridList>
      </div>
    </>
  );
}
