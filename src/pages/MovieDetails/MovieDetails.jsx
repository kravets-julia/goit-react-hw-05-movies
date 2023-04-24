import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import MovieDetailsInfo from 'components/MovieDetailsInfo/MovieDetailsInfo';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    const BASE_URL = 'https://api.themoviedb.org/3/movie/';
    const API_KEY = '1d813bdf96a00323bd29d62e55126d30';

    fetch(`${BASE_URL}${movieId}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(
        ({
          title,
          poster_path,
          genres,
          overview,
          release_date,
          vote_average,
        }) => {
          const movieData = {
            title,
            poster_path,
            genres,
            overview,
            release_date,
            vote_average,
          };
          setMovie(movieData);
        }
      )
      .catch(error => {
        alert('Something wrong...');
        throw error;
      });

    //   return(movie)
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <MovieDetailsInfo
            poster={movie.poster_path}
            title={movie.title}
            date={movie.release_date}
            average={movie.vote_average}
            overview={movie.overview}
            genresObj={movie.genres}
          />

          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>

          <Outlet />
        </>
      )}
    </>
  );
};

export default MoviesDetails;
