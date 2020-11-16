import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import TrendingMovies from '../Trendings/TrendingMovies';
import TrendingTVShows from '../Trendings/TrendingTVShows';
import './Home.css';

const Home = () => {
  const [selectedFilm, setSelectedFilm] = useState('');
  const [inputValue, setInputValue] = useState('');

  const [trendingFilms, setTrendingFilms] = useState([]);
  const [trendingTVShows, setTrendingTVShows] = useState([]);

  const apiKey = `${process.env.REACT_APP_API_KEY}`;
  const trendingFilmsURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
  const trendingTVShowsURL = `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`;

  useEffect(() => {
    axios
      .get(trendingFilmsURL)
      .then((res) => setTrendingFilms(res.data.results));
  }, []);

  useEffect(() => {
    axios
      .get(trendingTVShowsURL)
      .then((res) => setTrendingTVShows(res.data.results));
  });

  return (
    <div className='home-container'>
      <div className='home'>
        <SearchBar
          selectedFilm={selectedFilm}
          setSelectedFilm={setSelectedFilm}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />

        <TrendingMovies data={trendingFilms} />
        <TrendingTVShows data={trendingTVShows} />
      </div>
    </div>
  );
};

export default Home;
