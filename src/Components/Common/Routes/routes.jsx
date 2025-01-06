import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/home";
import UserLogin from "../UserLogin/userlogin";
const RootRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<UserLogin />} />
      </Routes>
    </Router>
  );
};

export default RootRoutes;
