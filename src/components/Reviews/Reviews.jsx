import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      if (filmsReview.results.length === 0)
        return setReviews('We don`t have any reviews for this movie');
      setReviews(filmsReview.results);
    }

    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Reviews;
