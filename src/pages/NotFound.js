import classes from "./AllData.module.css";

const NotFound = () => {
  return <p data-testid="not-found-item-test-1" className={classes.error}>Page not found!</p>
};

export default NotFound;