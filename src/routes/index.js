import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Alerts from "../Pages/Alerts";

const Routes = () => {
  return (
    <Router>
      <Route path="/alerts" component={Alerts} exact />
      <Redirect to="/alerts" />
    </Router>
  );
};

export default Routes;
