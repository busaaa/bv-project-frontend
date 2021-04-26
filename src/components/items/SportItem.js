import { Link } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./Item.module.css";
import sportsImage from "../../sports_image.jpg";

const SportItem = (props) => {
  return (
    <Card>
      <div data-testid="sport-item-test-1" className={classes.image}>
        <img src={sportsImage} alt="sports" />
      </div>
      <div data-testid="sport-item-test-2" className={classes.content}>
        <h3>{props.desc}</h3>
      </div>
      <div data-testid="sport-item-test-3" className={classes.actions}>
        <Link
          className={classes["btn--flat"]}
          to={{
            pathname: `/sports/${props.sportId}`,
            sportData: { desc: props.desc },
          }}
        >
          See events
        </Link>
      </div>
    </Card>
  );
};

export default SportItem;
