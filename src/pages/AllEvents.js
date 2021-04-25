import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EventItem from "./../components/sports/EventItem";

const AllEvents = (props) => {
  const params = useParams();

  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedEvents, setLoadedEvents] = useState([]);

  // useEffect(() => {
  //   setIsLoading(true);

  //   fetch(`${props.backendUrl}/sports/${params.sport_id}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setIsLoading(false);
  //       setLoadedEvents(data);
  //     });
  // }, [props]);

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>LOADING...</p>
  //     </section>
  //   );
  // }

  const loadedEvents = [
    {
      id: 11,
      sport_id: 1,
      desc: "Event description",
      comp_desc: "Competition description",
    },
  ];

  return (
    <section>
      <h1>All events</h1>
      {loadedEvents.map((oneEvent) => {
        return (
          <EventItem
            key={oneEvent.id}
            sportId={params.sportId}
            id={oneEvent.id}
            desc={oneEvent.desc}
            compDesc={oneEvent.comp_desc}
          />
        );
      })}
    </section>
  );
};

export default AllEvents;
