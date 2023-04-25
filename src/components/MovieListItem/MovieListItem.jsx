import PropTypes from 'prop-types';
import css from '../../pages/Home/Home.module.css';

const MovieListItem = ({ title }) => {
  return (
    <>
      <li className={css.filmLink}>{title}</li>
    </>
  );
};

export default MovieListItem;

MovieListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
