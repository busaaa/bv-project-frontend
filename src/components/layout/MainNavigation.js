import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <span className={classes.logo}>BV project</span>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/sports">All sports</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
