import React from "react";
import Sidebar from "./Sidebar";

const UserDashboard = () => {
  return (
    <>
      <div className="flex font-poppins">
        <Sidebar />
        <div className="bg-gray-400 w-full h-screen items-center justify-center flex">
          <div className="flex flex-col text-center w-4/5 border">
            <div className="m-auto">
              <form className="max-w-sm px-4">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                  />
                </div>
              </form>
            </div>
            <div>

            </div>
            <div>scheduled</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
