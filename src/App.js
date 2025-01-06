import "./App.css";
import {BrowserRouter as Route, Router, Routes } from "react-router-dom";
// import RootRoutes from "./Components/Common/RouteRoutes/routes";
import UserLogin from "./Components/Common/UserLogin/userlogin";
import Home from "./Components/Pages/Home/home";

function App() {
  return (
    <>
      <div className="background-img">
        {/* <RootRoutes /> */}
        <UserLogin/>
        <Home/>
      </div>
    </>
  );
}

export default App;
