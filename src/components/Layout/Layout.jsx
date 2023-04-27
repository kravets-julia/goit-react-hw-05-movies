import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header>
        <div className={css.layout}>
          <nav className={css.layoutNav}>
            <ul className={css.layoutList}>
              <li className={css.layoutItem}>
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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
