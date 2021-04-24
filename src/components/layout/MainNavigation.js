import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>BV project</div>
      <nav>
        <ul>
          <li>
            <NavLink to='/sports'>All sports</NavLink>
          </li>
          <li>
            <NavLink to='/sports/:sport_id'>All events</NavLink>
          </li>
          <li>
            <NavLink to="/sports/:sport_id/events/:event_id">All outcomes</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default MainNavigation;