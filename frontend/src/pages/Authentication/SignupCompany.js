import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router";
import image from "../../assets/j3.gif"
const SignupCompany = () => {

  const navigate=useNavigate();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ name, setName ] = useState("");
  const [ contactNo, setContactNo ] = useState("");
  const [ typeOfCompany, setTypeOfCompany ] = useState("");

  const url = 'http://192.168.220.132:5000';

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleContactChange = (e) => {
    setContactNo(e.target.value);
  }

  const handleCompanyChange = (e) => {
    setTypeOfCompany(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const data ={
        email: email,
        password: password,
        contactNo: contactNo,
        name: name,
        typeOfCompany: typeOfCompany

      };
      console.log(data);
      const response = await axios.post(`${url}/company`, data);
      console.log(response.data);
      localStorage.setItem("token", response.data.companyToken);
      localStorage.setItem("userType", "company");
      setEmail("");
      setPassword("");
      setName("");
      setContactNo("");
      // alert("Successfully Registered");
      navigate("/companyinformation");
    } catch(error) {
      setEmail("");
      setPassword("");
      setName("");
      setContactNo("");
      alert('Error occured while logging in');
    }
  }
  return (
    <div className="bg-dark w-full h-screen flex text-white justify-evenly items-center font-poppins ">
      <div className="w-1/2 text-center">
        <h1 className="text-4xl font-semibold inline">We find the </h1>
        <h1 className="text-light text-4xl font-semibold inline">Right</h1>
        <h1 className="text-4xl font-semibold inline"> People!</h1>
        <form className="bg-[#FEF9F9] w-2/3 py-16 gap-y-3 mx-auto flex flex-col justify-evenly mt-10 px-10 rounded-2xl">
          <div>
            <label className="text-left text-black">Official Email ID</label>
            <input
              className="w-full self-center rounded-lg p-1 text-black bg-white border border-dark px-6 py-2"
              type="email"
              placeholder="abc@xyz.com"
              name="email"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div>
            <label className="text-left text-black">Password</label>
            <input
              className="w-full self-center rounded-lg p-1 text-black bg-white border border-dark px-6 py-2"
              type="password"
              placeholder="********"
              name="password"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div className="w-full">
            <div className="self-start w-full flex">
              <div className="w-1/2">
                <label className="text-left text-black">Name</label>
                <input
                  className="w-[100%]  rounded-lg p-1 text-black bg-white border border-dark px-6 py-2"
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleNameChange}
                  value={name}
                />
              </div>
              <div className="w-1/2 ml-2">
                <label className="text-left text-black">Company Type</label>
                <select
                  className="w-[100%] rounded-lg p-1 text-black bg-white border border-dark px-6 py-2"
                  name="typeOfCompany" onChange={handleCompanyChange}
                >
                  <option>Select</option>
                  <option value="PbLc">Public Limited</option>
                  <option value="PrLc">Privated Limited</option>
                  <option value="JVC">Joint Venture</option>
                  <option value="PF">Partnership Firm</option>
                  <option value="OPC">One Person Company</option>
                  <option value="SP">Sole Proprietory</option>
                  <option value="BO">Branch Office</option>
                  <option value="NGO">NGO</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label className="text-left text-black">Mobile Number</label>
            <input
              className="w-full self-center rounded-lg p-1 text-black bg-white border border-dark px-6 py-2"
              type="text"
              placeholder="Enter your contact number"
              name="contactNo"
              onChange={handleContactChange}
              value={contactNo}
            />
          </div>
          <button className="bg-dark w-2/5 self-center py-2 my-5 rounded-xl font-semibold" onClick={handleSubmit}>
            Register Now
          </button>
          <div className="flex self-center font-medium text-black">
            <p>Already Registered?</p>&nbsp;
            <a className="text-secondary underline hover:text-purple" href="/login">
              Sign In
            </a>
          </div>
        </form>
      </div>
      <div className="">
        <img
          className="rounded-lg w-3/5"
          src={image}
          alt="signup"
        />
      </div>
    </div>
  );
};

export default SignupCompany;
