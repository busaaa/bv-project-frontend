import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import SportItem from "../components/items/SportItem";
import EventItem from "../components/items/EventItem";
import OutcomeItem from "../components/items/OutcomeItem";
import classes from "./../components/items/Item.module.css"

const AllData = (props) => {
  const params = useParams();
  const history = useHistory();

  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedData, setLoadedData] = useState([]);

  // useEffect(() => {
  //   setIsLoading(true);

  //   fetch(`${props.backendUrl}/${window.location.pathname}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setIsLoading(false);
  //       setLoadedData(data);
  //     });
  // }, [props]);

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>LOADING...</p>
  //     </section>
  //   );
  // }

  const loadedData = [
    {
      id: 11,
      sport_id: 1,
      desc: "Event description",
      comp_desc: "Competition description",
      d: "Something",
      fdp: "1.25",
    },
  ];

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
        <button className={classes['btn--flat']}onClick={history.goBack}>Back</button>
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
        <button className={classes['btn--flat']} onClick={history.goBack}>Back</button>
      </section>
    );
  }
};

export default AllData;
