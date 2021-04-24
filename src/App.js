import { Route, Switch } from "react-router-dom";
import AllSports from "./pages/AllSports";
import AllEvents from "./pages/AllEvents";
import AllOutcomes from "./pages/AllOutcomes";
import Layout from "./components/layout/Layout";

const backendUrl = 'localhost:4000'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/sports" exact>
          <AllSports backendUrl={backendUrl} />
        </Route>
        <Route path="/sports/:sport_id" exact>
          <AllEvents backendUrl={backendUrl} />
        </Route>
        <Route path="/sports/:sport_id/events/:event_id">
          <AllOutcomes backendUrl={backendUrl} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
