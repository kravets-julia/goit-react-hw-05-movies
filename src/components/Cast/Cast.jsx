import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');

  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = '1d813bdf96a00323bd29d62e55126d30';

  useEffect(() => {
    async function fetchInfo() {
      const info = await fetch(
        `${BASE_URL}${movieId}/credits?api_key=${API_KEY}`
      ).then(res => res.json());
      setCast(info.cast);
    }
    fetchInfo();
  }, [movieId]);

  if (!cast) {
    return;
  }
  if (cast.length === 0) {
    return <p>We don't have any information.</p>;
  }

  return (
    <>
      {cast && (
        <ul className={css.castList}>
          {cast.map(el => (
            <li key={el.cast_id}>
              <img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w200${el.profile_path}`
                    : 'https://via.placeholder.com/100x150.png?text=No+Image'
                }
                alt={el.name}
              />
              <p>{el.name}</p>
              <p>Character: {el.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Cast;
