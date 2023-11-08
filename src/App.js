import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { AdminLayout } from "./template/admin/AdminLayout";
import { StudentLayout } from "./template/student/StudentLayout";
import Admin from "./pages/Admin/Admin";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history = {history}>
      <Switch>

    
        <Route path="/login" exact component={Login} />
        <AdminLayout path="/admin" exact Component={Admin} />
        <StudentLayout path="/student" exact component={Home} />
        <StudentLayout path="/" exact component={Login} />

      </Switch>
    </Router>
  );
}

export default App;
