import { Route, Switch, Redirect } from "react-router-dom";
import AllData from "./pages/AllData";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

const backendUrl = "http://localhost:4000";
const sportsUrl = "/sports";
const eventsUrl = "/sports/:sportId";
const outcomesUrl = "/sports/:sportId/events/:eventId";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to={sportsUrl} />
        </Route>
        <Route path={sportsUrl} exact>
          <AllData backendUrl={backendUrl} type="sports" />
        </Route>
        <Route path={eventsUrl} exact>
          <AllData backendUrl={backendUrl} type="events" />
        </Route>
        <Route path={outcomesUrl}>
          <AllData backendUrl={backendUrl} type="outcomes" />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
