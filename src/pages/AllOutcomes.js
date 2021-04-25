import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OutcomeItem from "./../components/sports/OutcomeItem";

const AllOutcomes = () => {
  const params = useParams();

  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedOutcomes, setLoadedOutcomes] = useState([]);

  // useEffect(() => {
  //   setIsLoading(true);

  //   fetch(`${props.backendUrl}/sports/${params.sportId}/events/${params.eventId}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setIsLoading(false);
  //       setLoadedOutcomes(data);
  //     });
  // }, [props]);

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>LOADING...</p>
  //     </section>
  //   );
  // }

  const loadedOutcomes = [
    { id: 111, d: "One opponent", fdp: "1.23" },
    { id: 112, d: "Other opponent", fdp: "1.99" },
  ];

  return (
    <section>
      <h1>All outcomes</h1>
      {loadedOutcomes.map((outcome) => {
        return (
          <OutcomeItem
            key={outcome.id}
            id={outcome.id}
            d={outcome.d}
            fdp={outcome.fdp}
          />
        );
      })}
    </section>
  );
};
export default AllOutcomes;
