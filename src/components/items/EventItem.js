import { Link } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./Item.module.css";

const EventItem = (props) => {
  return (
    <Card>
      <div data-testid="event-item-test-1" className={classes.content}>
        <h3>{props.desc}</h3>
        <h4>{props.compDesc}</h4>
      </div>
      <div data-testid="event-item-test-2" className={classes.actions}>
        <Link
          className={classes["btn--flat"]}
          to={{
            pathname: `/sports/${props.sportId}/events/${props.id}`,
            data: {eventDesc: props.desc, sportDataDesc: props.sportDataDesc},
          }}
        >
          See outcomes
        </Link>
      </div>
    </Card>
  );
};

export default EventItem;
