import Header from "../../components/Header";
import React from "react";
// import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Edit(props) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    navigate("/dashboard");
  };

  const [edit, setEdit] = useState({});

  const url = "http://localhost:5000";

  useEffect(() => {
    const getEdit = async () => {
      try {
        const response = await axios.get(`${url}/students/self`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        return response.data;
      } catch (error) {
        return null;
      }
    };
    getEdit()
      .then((user) => {
        console.log(user);
        setEdit(user);
      })
      .catch(() => setEdit([]));
    console.log(edit);
  }, []);

  // console.log(edit.degree);
  return (
    <>
      {/* Sidebar */}
      <div className="bg-darkPurple w-full flex font-main">
        <Sidebar selected="Profile" />
        {/* Sidebar */}
        <div className="bg-purple/80 w-full ml-[14rem] shadow-lg h-screen">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <Header heading="Profile" user="Oda Dink" />
            <div className="text-darkPurple font-bold pb-3 pl-2 shadow-lg flex items-center">
            <div className="h-8 w-8 rounded-full bg-black mr-4 my-2"/>
              <span className="text-teal text-3xl">Mahek Jain</span>
            </div>
            <div className="flex">
              <div className="bg-white/90 rounded-2xl relative mr-10 h-auto w-4/5 font-main">
                <h3 className="text-darkPurple font-extrabold text-2xl flex justify-between p-3 font-main">
                  Edit Profile
                  <button
                    className="rounded-[34px] bg-teal  text-white text-base px-4 py-2 hover:bg-darkPurple/20 hover:text-darkPurple"
                    onClick={handleSubmit}
                  >
                    Save Changes
                  </button>
                </h3>

                <h4 className="text-black font-semibold text-xl mx-3 my-4">
                  Education
                </h4>
                <hr />
                <div className="flex justify-between m-3">
                  <p className="">
                    {edit && `${edit.degree} in ${edit.stream}`
                      ? `${edit.degree} in ${edit.stream}`
                      : "Degree "}
                    <br />
                    {edit && edit.graduation
                      ? edit.graduation.college
                      : "College"}
                    <br />
                    {edit &&
                    edit.graduation &&
                    `${edit.graduation.startYear} - ${edit.graduation.endYear}`
                      ? `${edit.graduation.startYear} - ${edit.graduation.endYear}`
                      : "Start or End year not entered!"}
                  </p>
                  <p className="font-bold">
                    CGPA:  {" "}
                    {edit && edit.graduation
                      ? edit.graduation.score
                      : " Marks not entered!"}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between mx-3 my-4">
                  <p>
                    Higher Secondary School Certificate
                    <br />
                    {edit && edit.hsc
                      ? edit.hsc.college
                      : "College not entered!"}
                    <br />
                  </p>
                  <p className="font-bold">
                    Percentage:{" "}
                    {edit && edit.hsc ? edit.hsc.score : "Marks not entered!"}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between mx-3 my-5">
                  <p>
                    SSC
                    <br />
                    {edit && edit.ssc
                      ? edit.ssc.college
                      : "College not entered!"}
                    <br />
                  </p>
                  <p className="font-bold">
                    Percentage:{" "}
                    {edit && edit.ssc ? edit.ssc.score : "Marks not entered!"}
                  </p>
                </div>
                <hr className="colour=[#F2F2F2]" />
                <div className="flex justify-between mx-3 m">
                  <h4 className="text-black font-semibold text-xl m-2">
                    Skills
                  </h4>
                  <a href="#" className="text-white text-xl px-5 py-2 font-semibold  mr-12 bg-purple rounded-2xl hover:bg-darkPurple ">
                    + Add
                  </a>
                </div>
                

                <div className="grid grid-cols-2 mx-5">
                  {edit && edit.skillsStudent
                    ? edit.skillsStudent.map((element) => {
                        return (
                          <div className="m-3">
                            <label>
                              {element.name}: &nbsp; {element.level}/5
                            </label>
                          </div>
                        );
                      })
                    : "No skills entered!"}
                </div>
              </div>
              <div className="relative h-[0%] w-1/5">
                <div className="bg-white rounded-[34px] shadow-lg py-3">
                  <div className="flex justify-center  items-center ">
                    <div className="h-6 w-6 rounded-full bg-black mr-1 my-2"/>
                    <h4 className="font-semibold text-base items-center justify-center">
                      {edit && `${edit.firstName} ${edit.lastName}`
                        ? `${edit.firstName} ${edit.lastName}`
                        : "Mahek"}
                    </h4>
                  </div>
                  <div className="flex justify-center mb-2">
                    <p className="text-sm">{edit ? edit.title : "About Mee"}</p>
                  </div>

                  <hr />

                  <div className="flex justify-center">
                    <p className="text-sm ml-3 mt-2">
                      {edit ? edit.mobileNo : "9876541330"}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-sm ml-3 mt-2">
                      {edit ? edit.email : "test@gmail.com"}
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <p className="text-sm ml-3 mt-2">
                      {edit ? edit.currentCity : "Mumbai"}
                    </p>
                  </div>

                  <br />
                  <div className="bg-[#F2F2F2]"></div>
                </div>
                <div className="bg-white rounded-xl shadow-2xl mt-5 py-4">
                  <div className="flex justify-center m-3 px-4">
                    <h3 className="font-bold text-lg">Work Samples</h3>
                  </div>
                  <div className="flex justify m-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <rect width="30" height="30" rx="10" fill="#FE434E" />
                    </svg>
                    <a href="#">
                      {edit && edit.githubLink && edit.githubLink.link
                        ? edit.githubLink.link
                        : "GitHub link not not entered!"}
                    </a>
                  </div>
                  <div className="flex justify m-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <rect width="30" height="30" rx="10" fill="#8AC740" />
                    </svg>
                    <a href="#">
                      {edit && edit.blogLink && edit.blogLink.link
                        ? edit.blogLink.link
                        : "Blog link not entered!"}
                    </a>
                  </div>
                  <div className="flex justify m-2 mb-3">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <rect width="30" height="30" rx="10" fill="#FA8A24" />
                    </svg>
                    <a href="#">
                      {edit && edit.behanceLink && edit.behanceLink.link
                        ? edit.behanceLink.link
                        : "Behance link not entered!"}
                    </a>
                  </div>
                  <div className="flex justify m-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <rect width="30" height="30" rx="10" fill="#79AEF4" />
                    </svg>
                    <a href="#">
                      {edit &&
                      edit.otherPortfolioLink &&
                      edit.otherPortfolioLink.link
                        ? edit.otherPortfolioLink.link
                        : "Other portfolio links not entered!"}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* /End replace */}
          </div>
        </div>
      </div>
    </>
  );
}
