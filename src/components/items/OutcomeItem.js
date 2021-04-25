import Card from "../ui/Card";
import classes from "./Item.module.css";

const OutcomeItem = (props) => {
  return (
    <Card>
      <div className={classes['content-left']}>
        <span>{props.d}</span>
        <span className={classes.badge}>{props.fdp}</span>
      </div>
    </Card>
  );
};

export default OutcomeItem;