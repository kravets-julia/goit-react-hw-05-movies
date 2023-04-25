import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header>
        <div className={css.layout}>
          <nav className={css.layoutNav}>
            <ul className={css.layoutList}>
              <li>
                <NavLink to="/" className={css.layoutItem}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies" className={css.layoutItem}>
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
