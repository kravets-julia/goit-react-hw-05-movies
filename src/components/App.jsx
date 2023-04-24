import Home from 'pages/Home/Home';
import MoviesDetails from 'pages/MovieDetails/MovieDetails';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layuot/Layout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Movie from 'pages/Movies/Movies';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movie />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
