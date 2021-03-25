import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Alerts from "../Pages/Alerts";

const Routes = () => {
  return (
    <Router>
      <Route path="/home" component={Alerts} exact />
      <Redirect to="/home" />
    </Router>
  );
};

export default Routes;
