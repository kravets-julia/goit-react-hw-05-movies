import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
// import Movie from 'pages/Movies/Movies';
// import Home from 'pages/Home/Home';
// import MoviesDetails from 'pages/MovieDetails/MovieDetails';
// import NotFound from 'pages/NotFoundPage/NodFound';
import Layout from './Layout/Layout';

const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Movie = lazy(() => import('../pages/Movies/Movies'));
const Home = lazy(() => import('../pages/Home/Home'));
const MoviesDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('../pages/NotFoundPage/NodFound'));

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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
