import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/home";
import UserLogin from "../../Common/UserLogin/userlogin";
import Menu from "../../Pages/Menu/menu";
import Table from "../../Pages/Table/table";
import PreviousOrder from "../../Pages/PreviousOrder/previousOrder";
const RouteRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<UserLogin />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/menu" element={<Menu />}></Route>
                    <Route path="/table" element={<Table />}></Route>
                    <Route path="/previousorder" element={<PreviousOrder />}></Route>




                </Routes>
            </Router>
        </>
    );
};
export default RouteRoutes;