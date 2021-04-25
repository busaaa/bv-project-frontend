import { Link } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./Item.module.css";

const EventItem = (props) => {
  return (
    <Card>
      <div className={classes.content}>
        <h3>{props.desc}</h3>
        <h4>{props.compDesc}</h4>
      </div>
      <div className={classes.actions}>
        <Link className={classes['btn--flat']} to={`/sports/${props.sportId}/events/${props.id}`}>See outcomes</Link>
      </div>
    </Card>
  );
};

export default EventItem;