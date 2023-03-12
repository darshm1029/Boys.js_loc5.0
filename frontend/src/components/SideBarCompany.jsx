import React from "react";
import { MdHeight, MdPostAdd } from "react-icons/md";
// import logo from '../assets/logo3.png'

import { AiFillHome, AiFillMessage, AiFillProfile } from "react-icons/ai";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideBarCompany = ({ selected }) => {
  const navs = {
    Dashboard: <AiFillHome size="20" style={{ color: "white" }} />,
    // Profile: <AiFillProfile size="20" style={{ color: "white" }} />,
    "Post Vacancy": <MdPostAdd size="20" style={{ color: "white" }} />,
    Applications: (
      <IoExtensionPuzzleSharp size="20" style={{ color: "white" }} />
    ),
    Message: <AiFillMessage size="20" style={{ color: "white" }} />,
  };
  const links = {
    // Profile: "/companydashboard",
    Dashboard: "/companydashboard",
    "Post Vacancy": "/companypostvacancy",
    Applications: "/applicationcompany",
    Message: "",
  };
  return (
    <div className="h-screen w-[30%] bg-dark">
      <div className="flex flex-col h-2/3 justify-evenly ml-2">
        {/* <img src={logo} alt="HireIt" className="w-2/3"/> */}
        <h2 className="text-6xl font-bold text-white text-center items-center mx-auto my-2">
                <Link to="/">HireHub</Link>
              </h2>
        {Object.keys(navs).map((key, index) => {
          if (key === selected) {
            return (
              <div key={index} className="flex justify-start items-center px-4">
                {navs[key]}
                <a
                  href={links[key]}
                  className="bg-[#F2F2F2] h-[100%] w-28 rounded-2xl ml-3 p-2 text-base font-bold text-center flex"
                >
                  {key}
                </a>
              </div>
            );
          } else {
            return (
              
              <div key={index} className="flex items-center ml-2 px-2 ">
                {navs[key]}
                <a
                  href={links[key]}
                  className=" text-white text-base font-bold ml-6 "
                >
                  {key}
                </a>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SideBarCompany;
