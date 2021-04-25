import { useState, useEffect } from "react";
import SportItem from "../components/sports/SportItem";

const AllSports = (props) => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedSports, setLoadedSports] = useState([]);

  // useEffect(() => {
  //   setIsLoading(true);

  //   fetch(`${props.backendUrl}/sports`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setIsLoading(false);
  //       setLoadedSports(data);
  //     });
  // }, [props]);

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>LOADING...</p>
  //     </section>
  //   );
  // }

  const loadedSports = [{ id: 1, desc: "Description Sport 1" }];

  return (
    <section>
      <h1>All sports</h1>
        {loadedSports.map((sport) => {
          return <SportItem key={sport.id} desc={sport.desc} sportId={sport.id} />;
        })}
    </section>
  );
};

export default AllSports;
