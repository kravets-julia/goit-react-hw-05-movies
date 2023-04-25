import React from 'react';
import PropTypes from 'prop-types';
import css from './MovieDetailsInfo.module.css';

const MovieDetailsInfo = ({
  poster,
  title,
  date,
  average,
  overview,
  genresObj,
}) => {
  const year = new Date(date).getUTCFullYear();
  const averageInPercent = Math.round(average * 10);
  const genres = genresObj.map(gen => gen.name).join(', ');

  return (
    <div className={css.movieDetailsInfo}>
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" />
      <div>
        <h2 className={css.movieDetailsTitle}>
          {title} ({year})
        </h2>
        <p className={css.movieDetailsText}>User Score: {averageInPercent}%</p>
        <h3>Owerview</h3>
        <p className={css.movieDetailsText}>{overview}</p>
        <h3>Genres</h3>
        <p className={css.movieDetailsText}>{genres}</p>
      </div>
    </div>
  );
};

export default MovieDetailsInfo;

MovieDetailsInfo.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genresObj: PropTypes.array,
};
