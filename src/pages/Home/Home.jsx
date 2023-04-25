import MovieListItem from 'components/MovieListItem/MovieListItem';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

// import { link } from 'react-router-dom';

const Home = () => {
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
    const API_KEY = '1d813bdf96a00323bd29d62e55126d30';

    fetch(`${BASE_URL}?api_key=${API_KEY}&page=1`)
      .then(res => res.json())
      .then(({ results }) => {
        const arr = results.map(({ id, title }) => ({
          id,
          title,
        }));

        setMovie(arr);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <h1 className={css.filmsComtainerTitle}>Trending today</h1>
      <ul className={css.filmsComtainer}>
        {movie.map(movie => (
          <Link
            key={movie.id}
            to={`movies/${movie.id}`}
            state={{ from: location }}
          >
            <MovieListItem title={movie.title} />
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Home;
