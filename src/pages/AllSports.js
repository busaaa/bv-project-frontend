import { useState, useEffect } from "react";
import SportItem from "../components/sports/SportItem";

const AllSports = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedSports, setLoadedSports] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${props.backendUrl}/sports`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedSports(data);
      });
  }, [props]);

  if (isLoading) {
    return (
      <section>
        <p>LOADING...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All sports</h1>
      <ul>
        {loadedSports.map((sport) => {
          return <SportItem key={sport.id} desc={sport.desc} id={sport.id} />;
        })}
      </ul>
    </section>
  );
};

export default AllSports;
