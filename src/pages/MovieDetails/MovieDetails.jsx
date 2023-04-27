import { Suspense } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieDetailsInfo from 'components/MovieDetailsInfo/MovieDetailsInfo';
import css from './MovieDetails.module.css';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

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
      <Link to={backLinkLocationRef.current}>Go back</Link>
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
          <div>
            <h3>Additional information</h3>
            <ul className={css.detailsContainer}>
              <li className={css.detailsItem}>
                <Link to="cast" className={css.detailsLink}>
                  Cast
                </Link>
              </li>
              <li className={css.detailsItem}>
                <Link to="reviews" className={css.detailsLink}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MoviesDetails;
