import React from 'react';

import FilmsGrid from '../../utils/FilmsGrid';

export default function Trendings(props) {
  const { data } = props;

  //const tileData = trendingFilms;

  return (
    <>
      <h2>Séries tendance</h2>
      <FilmsGrid data={data} media='tv' />
    </>
  );
}
