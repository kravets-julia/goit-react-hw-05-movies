import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');

  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = '1d813bdf96a00323bd29d62e55126d30';

  useEffect(() => {
    async function fetchReviews() {
      const filmsReview = await fetch(
        `${BASE_URL}${movieId}/reviews?api_key=${API_KEY}`
      ).then(res => res.json());
      if (filmsReview.results.length === '')
        return <p>Sorry! We don`t have any reviews for this movie</p>;
      setReviews(filmsReview.results);
      // console.log(filmsReview.results.length);
    }

    fetchReviews();
  }, [movieId]);
  if (!reviews) {
    return;
  }
  if (reviews.length === 0) {
    return <p>We don't have any information.</p>;
  }

  return (
    <>
      {!reviews && <div>We don't have any information.</div>}
      {reviews && (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id} className={css.reviewsList}>
              <p className={css.reviewsText}>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Reviews;
