import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { AdminLayout } from "./template/admin/AdminLayout";
import { HomeTemplate } from "./template/HomeTemplate/HomeTemplate";
import Admin from "./pages/Admin/Admin";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history = {history}>
      <Switch>


        <Route path="/login" exact component={Login} />
        <AdminLayout path="/admin" exact Component={Admin} />
        <HomeTemplate path="/student" exact component={Home} />
        <HomeTemplate path="/" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
