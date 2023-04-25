import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchName, setSearchName] = useState('');
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
    const API_KEY = '1d813bdf96a00323bd29d62e55126d30';

    async function findFilm() {
      const films = await fetch(
        `${BASE_URL}?api_key=${API_KEY}&query=${searchQuery}&page=1`
      ).then(res => res.json());
      setSearchName(films.results);
    }

    if (!searchQuery) return;
    findFilm();
  }, [searchQuery]);

  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.input.value.trim() === '') {
      alert('Enter correct query');
    } else setSearchParams({ query: form.input.value });
    form.reset();
  }

  return (
    <div>
      <form onSubmit={onSubmit} className={css.searchForm}>
        <input
          type="text"
          //   value={searchQuery}
          name="input"
          //   onChange={handleChange}
          className={css.formInput}
        />
        <button type="submit" className={css.formButton}>
          Search
        </button>
      </form>
      {searchName && (
        <ul className={css.filmsComtainer}>
          {searchName.map(film => (
            <li key={film.id}>
              <Link
                to={`${film.id}`}
                state={{ from: location }}
                className={css.filmLink}
              >
                {/* <BiCameraMovie size="12px" /> */}
                {film.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Movie;
