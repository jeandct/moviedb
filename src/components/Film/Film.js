import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Film.css';

const Film = (props) => {
  const params = props.match.params;
  const [filmData, setFilmData] = useState([]);
  const [filmCredits, setFilmCredits] = useState([]);

  useEffect(() => {
    const apiKey = `${process.env.REACT_APP_API_KEY}`;
    const filmDataURL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=fr&append_to_response=videos,images`;
    axios
      .get(filmDataURL)
      .then((res) => res.data)
      .then((res) => setFilmData(res));

    const filmCreditsURL = `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${apiKey}&language=fr`;
    axios.get(filmCreditsURL).then((res) => setFilmCredits(res.data));
  }, []);

  const backgroundImage = `https://image.tmdb.org/t/p/original/${filmData.backdrop_path}`;

  return (
    <div>
      <div
        className='film-intro-container'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='background'>
          <div className='film-intro'>
            <img
              src={`https://image.tmdb.org/t/p/w300/${filmData.poster_path}`}
            ></img>
            <section className='film-section'>
              <h2>{filmData.title}</h2>
              <h4>{`${filmData.vote_average}/10`}</h4>
              <h3>Synposys</h3>
              <p>{filmData.overview}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
