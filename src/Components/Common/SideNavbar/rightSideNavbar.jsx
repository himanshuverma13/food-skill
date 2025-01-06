import React from "react";

const RightSidebar = () => {
  return (
    <div className=" h-screen bg-gray-100">
      {/* Sidebar */}
      <div className=" bg-orange-50 p-4 shadow-md">
        {/* Create New Order Button */}
        <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600">
          + Create New Order
        </button>

        {/* Search Input */}
        {/* <div className="mt-4">
          <input
            type="text"
            placeholder="Table or Order status"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div> */}

        {/* Status Cards */}

          <div className="" >
            <div className="" ><input type="" value="" /></div>
            <div className="mt-4"><span className="  w-10 h-10 pt-2 text-center inline-block  rounded-full bg-green-400 shadow-xl font-semibold">6</span> <span className="font-semibold ms-4">Active Tables</span></div>
            <hr className="h-[2px] bg-white my-4 border-white" />
            <div className="mt-4"><span className="  w-10 h-10 pt-2 text-center inline-block  rounded-full bg-yellow-400 shadow-xl font-semibold">3</span> <span className="font-semibold ms-4">Available Tables</span></div>
            <hr className="h-[2px] bg-white my-4 border-white" />
            <div className="mt-4"><span className="  w-10 h-10 pt-2 text-center inline-block  rounded-full bg-red-400 shadow-xl font-semibold">20</span> <span className="font-semibold ms-4">Reservations</span></div>
            <hr className="h-[2px] bg-white my-4 border-white" />          </div>

        {/* <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center bg-green-100 py-3 px-4 rounded-lg">
            <span className="text-green-600 font-semibold">6</span>
            <span className="text-gray-700">Active Tables</span>
          </div>
          <div className="flex justify-between items-center bg-yellow-100 py-3 px-4 rounded-lg">
            <span className="text-yellow-600 font-semibold">3</span>
            <span className="text-gray-700">Available Tables</span>
          </div>
          <div className="flex justify-between items-center bg-red-100 py-3 px-4 rounded-lg">
            <span className="text-red-600 font-semibold">20</span>
            <span className="text-gray-700">Reservations</span>
          </div>
        </div> */}

        {/* Schedule New Order Button */}
        <button className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg mt-6 hover:bg-gray-300">
          + Schedule New Order
        </button>

        {/* Scheduled Orders */}
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Scheduled Orders</h3>

          {/* Order Card */}
          <div className="space-y-4">
            {["Mr. Rahul Vijay", "Ms. Poornima", "Mrs. Anjali"].map((name, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm"
              >
                <p className="font-semibold">Name: {name}</p>
                <p>Booking ID: 123456789</p>
                <p>Date & Time: 10-12-2024; 5 PM</p>
                <p>Booking for: {index === 0 ? "4" : index === 1 ? "Family" : "2"}</p>

                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-3">
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button className="text-green-500 hover:underline">View</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">Main Content Here</div>
    </div>
  );
};

export default RightSidebar;