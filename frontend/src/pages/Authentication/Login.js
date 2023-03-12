import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import image from "../../assets/j3.gif"
const Login = () => {
  const navigate = useNavigate();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const url = 'http://192.168.220.132:5000';

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/login`, { email, password });
      if(response.data.studentUser) {
        console.log(response.data.studentToken);
        localStorage.setItem("token", response.data.studentToken);
        localStorage.setItem("userType", "student");
      } else if(response.data.companyUser) {
        localStorage.setItem("token", response.data.companyToken);
        localStorage.setItem("userType", "company");
      } else {
        localStorage.setItem("token", null);
        localStorage.setItem("userType", null);
      }
      console.log(localStorage.getItem("userType"));
      console.log(localStorage.getItem("token"));
      setEmail("");
      setPassword("");
      // alert("Successfully Logged in.");
      if(response.data.studentUser)
      {
        navigate('/userdashboard');
      }
      else{
        navigate('/companydashboard')

      }
    } catch(error) {
      setEmail("");
      setPassword("");
      alert('Error occured while logging in');
    }
  }
  return (
    <div className="bg-dark w-full h-screen flex text-white justify- items-center  font-poppins">
      <form className="w-1/2 h-11/12 text-center">
        <h1 className="text-4xl font-semibold inline font-poppins">Find the job of </h1>
        <br />
        <h1 className="text-4xl font-semibold inline">
          your <span className="text-light">Dreams</span>
        </h1>
        <div className="bg-[#FEF9F9] w-2/3 gap-y-6 py-32 mx-auto flex flex-col justify-evenly mt-10 px-10 rounded-2xl">
          
          <div className="flex flex-col ">
            <label className="text-left ml-10 mb-1 font-semibold text-[#201835]" htmlFor="email">
              Email ID
            </label>
            <input
              className="w-5/6 self-center rounded-lg px-6 py-2 text-black bg-white border-purple border"
              type="email"
              placeholder="abc@xyz.com"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-left  ml-10  font-semibold text-[#201835] mb-1" htmlFor="password">Password</label>
            <input
              className="w-5/6 self-center rounded-lg px-6 py-2 items-center text-black bg-white border-purple border-2"
              type="password"
              placeholder="********"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button className="bg-dark hover:bg-dark/50 hover:text-black w-2/5 self-center py-2 rounded-xl font-semibold text-lg " onClick={handleSubmit}>
            Login
          </button>
          <div className="flex self-center font-medium text-dark">
            <p>New User?</p>&nbsp;
            <p>Register</p>&nbsp; (
            <a className="text-secondary underline hover:text-purple" href="/studentsignup">
              Student
            </a>
            /
            <a className="text-secondary underline hover:text-purple" href="/signupcompany">
              Company
            </a>
            )
          </div>
        </div>
      </form>
      <div className="items-center justify-center">
        <img
          className="rounded-lg w-10/12 items-center"
          src={image}
          alt="login"
        />
      </div>
    </div>
  );
};

export default Login;
