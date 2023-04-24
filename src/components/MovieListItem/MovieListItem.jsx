import PropTypes from 'prop-types';

const MovieListItem = ({ title }) => {
  return (
    <>
      <li>{title}</li>
    </>
  );
};

export default MovieListItem;

MovieListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
