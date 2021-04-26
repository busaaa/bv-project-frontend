import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import SportItem from "../components/items/SportItem";
import EventItem from "../components/items/EventItem";
import OutcomeItem from "../components/items/OutcomeItem";
import classes from "./AllData.module.css";

const AllData = (props) => {
  const params = useParams();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  const [httpError, setHttpError] = useState();
  const [marketDesc, setMarketDesc] = useState("");
  const [marketPtDesc, setMarketPtDesc] = useState("");

  useEffect(() => {
    setIsLoading(true);

    fetch(`${props.backendUrl}${window.location.pathname}`)
      .then((response) => {
        if (response.status === 404) {
          throw new Error("Requested data not found!");
        }
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedData(data);
        if (props.type === "outcomes" && data.length > 0) {
          setMarketDesc(data[0].market.desc);
          setMarketPtDesc(data[0].market.pt_desc);
        }
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

  if (loadedData.length === 0) {
    return (
      <section className={classes.error}>
        <p>NO DATA FOUND</p>
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
        <h1>
          All {props.type} ({location.sportData.desc})
        </h1>
        {loadedData.map((data) => {
          return (
            <EventItem
              key={data.id}
              sportId={params.sportId}
              id={data.id}
              desc={data.desc}
              compDesc={data.comp_desc}
              sportDataDesc={location.sportData.desc}
            />
          );
        })}
        <Link className={classes["btn--flat"]} to="/sports">
          Back
        </Link>
      </section>
    );
  } else if (props.type === "outcomes") {
    return (
      <section>
        <h1>
          All {props.type} ({location.data.eventDesc})
        </h1>
        <h3>
          All {marketDesc} - {marketPtDesc}
        </h3>
        {loadedData.map((data) => {
          return (
            <OutcomeItem key={data.id} id={data.id} d={data.d} fdp={data.fdp} />
          );
        })}
        <Link
          className={classes["btn--flat"]}
          to={{
            pathname: `/sports/${params.sportId}`,
            sportData: { desc: location.data.sportDataDesc },
          }}
        >
          Back
        </Link>
      </section>
    );
  }
};

export default AllData;
