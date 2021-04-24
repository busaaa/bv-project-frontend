import Card from "./../ui/Card";
import classes from "./SportItem.module.css";
import sportsImage from "../../sports_image.jpg";

const SportItem = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={sportsImage} alt="sports" />
        </div>
        <div className={classes.content}>
          <h3>{props.desc}</h3>
        </div>
        <div className={classes.actions}>
          <button>Visit events ({props.desc})</button>
        </div>
      </Card>
    </li>
  );
};

export default SportItem;
