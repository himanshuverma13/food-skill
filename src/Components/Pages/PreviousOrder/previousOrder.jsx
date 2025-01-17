import React, { useState } from "react";
import LeftSideNavbar from "../../Common/SideNavbar/leftSideNavbar.jsx";
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";

// import img
import Toggle from "../../Assets/Images/sidebarImg/toggle.png";
import PreviousOrderCards from "../../Common/PreviousOrderCards/previousOrderCards.jsx";

// import FoodCard from "../../Common/Test/menuItems.jsx";
// Import ICONS
import { IoCallOutline, IoHomeOutline } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineMailOutline } from "react-icons/md";

const PreviousOrder = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };
  const CustomerDetailsCard = [
    {
      icon: "RV",
      color: "rounded-md bg-white p-2 text-center border",
      title: "Customer's Name",
      name: "Rahul Vijay",
    },
    {
      icon: <IoCallOutline className="text-light-green text-lg" />,
      color: "bg-gray-50 rounded-full flex items-center justify-center py-3",
      title: "Contact Number",
      name: 1234737577,
    },
    {
      icon: <MdOutlineMailOutline className="text-blue-500 text-lg" />,
      color: "bg-gray-50 rounded-full flex items-center justify-center py-3",
      title: "E-mail Address",
      name: "Avshd@gmail.com",
    },
    {
      icon: <IoHomeOutline className="" />,
      color: "bg-gray-50 rounded-full flex items-center justify-center py-3",
      title: "Delivery Address",
      name: "132 main street Appartment 4B, Indore Madhya Pradesh, 85558",
    },
  ]
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <LeftSideNavbar />

      {/* Main Content Area */}

      <div className={`flex-grow p-4 transition-all duration-300`}>
        <div>
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            <span className="mr-2">Book Table</span> &gt;{" "}
            <span className="ml-2">Generate Order</span>
          </div>

          {/* Order Header */}
          {/* <div className="flex justify-between items-center mb-4">
            <span className="text-gray-800 font-medium text-lg">
              Order Number - #123
            </span>
            <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-gray-500">🔔</span>
            </button>
          </div> */}

        </div>

        <div className="bg-white border rounded-md p-4 mb-2">
          <div className="grid grid-cols-4 gap-4">
            {CustomerDetailsCard.map((items, index) => (
              <div className="grid grid-cols-5 grid-rows-1 gap-4 border-r">
                <div>
                  <div className={`uppercase  ${items.color}`}>
                    {items.icon}
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="text-xs text-gray-400 font-semibold">{items.title}</div>
                  <div className="font-semibold text-sm">
                    {items.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Order Cards */}
        <div className={`grid h-full overflow-auto ${isRightSidebarOpen == true ? "grid-cols-2" : "grid-cols-3"} gap-1`}>
          <PreviousOrderCards />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className={`bg-gray-200 transition-all duration-300 ease-in-out relative rounded-l-3xl ${isRightSidebarOpen ? "w-80" : "w-9"}`}
      >
        <span className="bg-blue-700 hover:bg-blue-700 font-bold p-1 rounded-full absolute top-1/2 -left-5" onClick={toggleRightSidebar}>
          {/* <img src={Toggle} alt="Loading" /> */}
          <MdOutlineKeyboardDoubleArrowLeft className='text-3xl text-white font-semibold' />
        </span>
        <RightSidebar />
        {/* <FoodCard/> */}
      </div>
    </div>
  );
};
export default PreviousOrder;
