import classes from "./Card.module.css";

const Card = (props) => {
  return <div data-testid="card-test-1" className={classes.card}>{props.children}</div>;
};

export default Card;
