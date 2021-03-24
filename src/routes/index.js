import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Alerts from "../Pages/Alerts";

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={Alerts} exact />
      <Redirect to="/" />
    </Router>
  );
};

export default Routes;
