import logo from "./logo.svg";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import { HomeTemplate } from "./template.js/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
