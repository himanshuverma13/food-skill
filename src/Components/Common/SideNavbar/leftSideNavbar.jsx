import React, { useState } from "react"; 
// Images
import logo from "../../Assets/Images/logo/logo.png";
import userImg from "../../Assets/Images/logo/userImg.png";
import Home from "../../Assets/Images/leftsidebar-img/House.svg";
import Menu from "../../Assets/Images/leftsidebar-img/menu-board.svg";
import Order from "../../Assets/Images/leftsidebar-img/task-square.svg";
import Schedule from "../../Assets/Images/leftsidebar-img/calendar-tick.svg";
import Staff from "../../Assets/Images/leftsidebar-img/staff.svg";
import Setting from "../../Assets/Images/leftsidebar-img/setting.svg";
import Logout from "../../Assets/Images/leftsidebar-img/logout.svg";
import CircleIcons from "../CircleIcons/circleIcons";
import WhiteHome from "../../Assets/Images/leftsidebar-img/whiteHouse.svg";
import WhiteMenu from "../../Assets/Images/leftsidebar-img/whitemenu-board.svg";
import WhiteOrder from "../../Assets/Images/leftsidebar-img/whitetask-square .svg";
import WhiteSchedule from "../../Assets/Images/leftsidebar-img/whitecalendar-tick .svg";
import WhiteStaff from "../../Assets/Images/leftsidebar-img/whitestaff.svg";
import WhiteSetting from "../../Assets/Images/leftsidebar-img/whitesetting.svg";
import WhiteLogout from "../../Assets/Images/leftsidebar-img/whitelogout .svg";

import { GoHomeFill } from "react-icons/go";
import { TbCalendarCheck } from "react-icons/tb";
import { PiUsersThreeBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";


import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/home", icon: Home, hoverIcon:WhiteHome, name: "Home" },
  { path: "/table", icon: Menu, hoverIcon:WhiteMenu, name: "Table" },
  { path: "/menu", icon: Menu, hoverIcon:WhiteMenu, name: "Menu" },
  { path: "/order", icon: Order, hoverIcon:WhiteOrder, name: "Orders" },
  { path: null, icon: Schedule, hoverIcon:WhiteSchedule, name: "Schedule" },
  { path: "/staffdata", icon: Staff, hoverIcon:WhiteStaff, name: "Staff Data" },
  { path: null, icon: Setting, hoverIcon:WhiteSetting, name: "Settings" },
  { path: null, icon: Logout, hoverIcon:WhiteLogout, name: "Logout" },
];

const LeftSideNavbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div>
      <div className="lg:w-64 md:w-40 bg-white flex-none h-screen rounded-r-3xl shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px]">
        <div className="flex pt-10 justify-center">
          <img src={logo} className="h-8 w-8" alt="Logo" />
          <h1 className="lg:text-2xl md:text-base mx-2 drop-shadow-md font-bold text-gray-800">FOOD SKILL</h1>
        </div>
        <div className="grid my-5 text-center justify-center">
          <div className="text-center flex justify-center">
            <img src={userImg} className="rounded-full" alt="User" />
          </div>
          <h5 className="font-semibold">Admin Panel</h5>
          <h6>Cashier</h6>
        </div>
        <ul className="my-3">
          {navItems.map((item, index) => (
              <NavLink key={index} to={item.path}>
                <li className="flex cursor-pointer lg:text-base md:text-xs font-medium items-center hover:bg-[--cashier-main-color] hover:text-white hover:rounded-full lg:mx-10 md:mx-6 text-center my-3"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <CircleIcons icon={hoveredIndex === index ? item.hoverIcon : item.icon} />
                  {item.name}
                </li>
              </NavLink>
              
            ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSideNavbar;
