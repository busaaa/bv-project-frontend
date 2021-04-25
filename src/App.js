import { Route, Switch, Redirect } from "react-router-dom";
import AllSports from "./pages/AllSports";
import AllEvents from "./pages/AllEvents";
import AllOutcomes from "./pages/AllOutcomes";
import Layout from "./components/layout/Layout";

const backendUrl = "localhost:4000";
const sportsUrl = `${backendUrl}/sports`
const eventsUrl = `${backendUrl}/sports/:sportId`
const outcomesUrl = `${backendUrl}/sports/:sportId/events/:eventId`

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/sports" />
        </Route>
        <Route path='/sports' exact>
          <AllSports url={sportsUrl} type="sports" />
        </Route>
        <Route path="/sports/:sportId" exact>
          <AllEvents backendUrl={backendUrl} />
        </Route>
        <Route path="/sports/:sportId/events/:eventId">
          <AllOutcomes backendUrl={backendUrl} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
