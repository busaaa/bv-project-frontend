import { Link } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./Item.module.css";
import sportsImage from "../../sports_image.jpg";

const SportItem = (props) => {
  return (
    <Card>
      <div className={classes.image}>
        <img src={sportsImage} alt="sports" />
      </div>
      <div className={classes.content}>
        <h3>{props.desc}</h3>
      </div>
      <div className={classes.actions}>
        <Link className={classes['btn--flat']} to={`/sports/${props.sportId}`}>See events</Link>
      </div>
    </Card>
  );
};

export default SportItem;
