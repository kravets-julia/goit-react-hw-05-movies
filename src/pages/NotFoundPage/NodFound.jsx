import { Link } from 'react-router-dom';
import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={css.notFound}>
      <p className={css.notFoundText}>404</p>
      <p className={css.notFoundText}>Sorry, we couldn't find this page </p>
      <Link to={'/'}>To main page</Link>
    </div>
  );
};

export default NotFound;
