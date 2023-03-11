import React from "react";
import j4 from "../assets/j4.gif";

export default function HeroComponent() {
  return (
    <div className="flex flex-col">
      <div className="bg-purple py-8">
        <section className="container items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">
          <div className="mr-28 space-y-4 sm:text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#d4d9f7]">
              GET YOUR DREAM JOB TODAY
            </h1>
            <p className="max-w-xl leading-relaxed text-lg text-gray-300 sm:mx-auto lg:ml-0">
              Welcome to our job portal, where we connect talented individuals
              with top employers across various industries. As a job seeker, you
              can browse through our extensive database of job listings and
              apply for positions that match your skills and interests. Our
              user-friendly platform allows you to filter jobs by location,
              industry, job type, and salary range to help you find the perfect
              job.
            </p>
            <div className="items-center justify-center space-y-3 space-x-6  sm:flex lg:justify-start">
              <a
                href="javascript:void(0)"
                className="block px-6 py-2 text-center text-gray-500 bg-white rounded-md"
              >
                See More
              </a>
            </div>
          </div>
          <div>
            <img
              src={j4}
              alt="job"
              className="h-96 mr-[125px] rounded-xl shadow-x"
            />
          </div>
        </section>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5000ca"
          fill-opacity="1"
          d="M0,96L21.8,122.7C43.6,149,87,203,131,192C174.5,181,218,107,262,96C305.5,85,349,139,393,160C436.4,181,480,171,524,186.7C567.3,203,611,245,655,240C698.2,235,742,181,785,181.3C829.1,181,873,235,916,261.3C960,288,1004,288,1047,282.7C1090.9,277,1135,267,1178,224C1221.8,181,1265,107,1309,106.7C1352.7,107,1396,181,1418,218.7L1440,256L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
