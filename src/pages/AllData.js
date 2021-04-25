import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import SportItem from "../components/items/SportItem";
import EventItem from "../components/items/EventItem";
import OutcomeItem from "../components/items/OutcomeItem";
import classes from "./AllData.module.css";

const AllData = (props) => {
  const params = useParams();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    setIsLoading(true);

    fetch(`${props.backendUrl}${window.location.pathname}`)
      .then((response) => {
        console.log("bent");
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setLoadedData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, [props]);

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>LOADING...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.error}>
        <p>{httpError}</p>
      </section>
    );
  }

  if (props.type === "sports") {
    return (
      <section>
        <h1>All {props.type}</h1>
        {loadedData.map((data) => {
          return <SportItem key={data.id} desc={data.desc} sportId={data.id} />;
        })}
      </section>
    );
  } else if (props.type === "events") {
    return (
      <section>
        <h1>All {props.type}</h1>
        {loadedData.map((data) => {
          return (
            <EventItem
              key={data.id}
              sportId={params.sportId}
              id={data.id}
              desc={data.desc}
              compDesc={data.comp_desc}
            />
          );
        })}
        <button className={classes["btn--flat"]} onClick={history.goBack}>
          Back
        </button>
      </section>
    );
  } else if (props.type === "outcomes") {
    return (
      <section>
        <h1>All {props.type}</h1>
        {loadedData.map((data) => {
          return (
            <OutcomeItem key={data.id} id={data.id} d={data.d} fdp={data.fdp} />
          );
        })}
        <button className={classes["btn--flat"]} onClick={history.goBack}>
          Back
        </button>
      </section>
    );
  }
};

export default AllData;
