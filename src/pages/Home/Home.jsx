import MovieListItem from 'components/MovieListItem/MovieListItem';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import { link } from 'react-router-dom';

const Home = () => {
  const [movie, setMovie] = useState([]);
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
      <h2>Trending today</h2>
      <ul>
        {movie.map(movie => (
          <Link key={movie.id} to={`movies/${movie.id}`}>
            <MovieListItem title={movie.title} />
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Home;
