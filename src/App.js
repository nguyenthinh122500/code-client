import { Route, Routes, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import { HomeTemplate } from "./template.js/HomeTemplate/HomeTemplate";

import Login from './pages/Login/Login';
import Home from "./pages/Home/Home";
import AdminLayout from './template.js/admin/AdminLayout';
import StudentLayout from './template.js/HomeTemplate/HomeTemplate';

export const history = createBrowserHistory();
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/admin' element={<AdminLayout/>}></Route>
        <Route path='/student' element={<StudentLayout/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
