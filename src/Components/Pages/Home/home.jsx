import React, { useState } from "react";
import LeftSideNavbar from '../../Common/SideNavbar/leftSideNavbar.jsx'
import RightSidebar from "../../Common/SideNavbar/rightSideNavbar.jsx";
const Home =()=> {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <LeftSideNavbar />

      {/* Main Content Area */}
      <div className={`flex-grow p-4 transition-all duration-300`}>
        <div className={`grid ${isRightSidebarOpen == true ? "grid-cols-4" : "grid-cols-5" } gap-4`}>
          {/* Cards */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} onClick={toggleRightSidebar} className="bg-white rounded-lg shadow-md p-4 w-56">
              <h2>Card {i}</h2>
              <p>Some content for card {i}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`bg-gray-200 transition-all duration-300 ease-in-out relative ${
          isRightSidebarOpen ? "w-80" : "w-9"
        } overflow-hidden`}
      >
          <button
            onClick={toggleRightSidebar}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-1/2 "
          >
            {isRightSidebarOpen ? "Close" : "Open"}
          </button>
        {/* <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold">Right Sidebar</h2>
        </div>
        {isRightSidebarOpen && (
          <ul>
            <li>Right Sidebar Item 1</li>
            <li>Right Sidebar Item 2</li>
            <li>Right Sidebar Item 3</li>
          </ul>
        )} */}
        <RightSidebar/>
      </div>
    </div>
  );
}
export default Home;