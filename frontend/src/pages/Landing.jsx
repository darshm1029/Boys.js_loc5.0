import React from "react";
import Carousel from "../components/Carousel";
import CarouselComp from "../components/CarouselComp";
import Navbar from "../components/Navbar";
import j4 from "../assets/j4.gif";
import HeroComponent from "../components/HeroComponent";
import Footer from "../components/Footer";

const Landing = () => {
  const compGuide = [
    {
      id: 1,
      title: "Google",
      content:
        "Google is a multinational technology company that specializes in internet-related services and products, including search engines, online advertising technologies, cloud computing, software, and hardware. It was founded in 1998 by Larry Page and Sergey Brin.",
    },
    {
      id: 2,
      title: "Microsoft",
      content:
        "Microsoft Corporation is an American multinational technology corporation headquartered in Redmond, Washington, United States. Microsoft's best-known software products are the Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers.",
    },
    {
      id: 3,
      title: "Meta",
      content:
        "Meta company is a type of company that operates as a platform or intermediary between different businesses or industries, often using advanced technology to analyze and optimize data flows. Meta companies can be involved in a wide range of sectors, from finance and healthcare to transportation and marketing.",
    },
    {
      id: 4,
      title: "Amazon",
      content:
        "Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence. It has been referred to as one of the most influential economic and cultural forces in the world, and ison of most valuable brands.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col font-poppins">
        <HeroComponent />
        <div className="w-3/5 mx-auto">
          {/* <CarouselComp /> */}
          <Carousel />
        </div>
        <p className="text-5xl font-bold text-purple w-4/5 my-10 text-center mx-auto ">
          Direct Hiring App for Founders, Team Leaders and Hiring Managers
        </p>
        <div className="flex py-10 bg-white w-full ">
          <ol class="relative border-l border-gray-200 mx-auto">
            <li class="mb-10 ml-4 ">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              {/* <time class="mb-1 text-lg font-normal leading-none text-purple">
                February 2022
              </time> */}
              <h3 class="text-xl font-semibold text-gray-900 hover:text-[#4E31AA]">
                EXPLORE
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 ">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
              {/* <a
                href="#"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-teal dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Learn more{" "}
                <svg
                  class="w-3 h-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a> */}
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 items-center"></div>
              {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                March 2022
              </time> */}
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white hover:text-[#4E31AA]">
                REGISTER
              </h3>
              <p class="text-base font-normal text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li class="ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April 2022
              </time> */}
              <h3 class="text-lg font-semibold text-dark hover:text-[#4E31AA]">
                GET YOUR DREAM JOB
              </h3>
              <p class="text-base font-normal text-gray-500 ">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
          <img />
        </div>
        <div className="flex flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#5000ca"
              fill-opacity="1"
              d="M0,96L21.8,122.7C43.6,149,87,203,131,192C174.5,181,218,107,262,96C305.5,85,349,139,393,160C436.4,181,480,171,524,186.7C567.3,203,611,245,655,240C698.2,235,742,181,785,181.3C829.1,181,873,235,916,261.3C960,288,1004,288,1047,282.7C1090.9,277,1135,267,1178,224C1221.8,181,1265,107,1309,106.7C1352.7,107,1396,181,1418,218.7L1440,256L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
            ></path>
          </svg>
          <div className="flex flex-col bg-purple items-center py-16">
            <div className="flex items-center justify-center mr-0">
              <p className="text-4xl font-extrabold text-white">
                Our Top Recuriters
              </p>
              {/* <button className="bg-teal rounded-md font-medium text-lg text-white px-3 py-2">
              For Companies
            </button> */}
            </div>
            <div className="grid grid-cols-4 gap-x-3 w-4/5 my-10">
              {compGuide.map((data) => {
                return (
                  <div class="max-w-sm p-6 flex flex-col justify-between border border-gray-200 rounded-lg shadow bg-[#99d6ff] dark:border-gray-700">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-dark">
                        {data.title}
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-black ">
                      {data.content}
                    </p>
                    <a
                      href="#"
                      class="inline-flex items-center text-teal hover:underline"
                    >
                      View Job Opportunities
                      <svg
                        class="w-5 h-5 ml-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                      </svg>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#5000ca"
              fill-opacity="1"
              d="M0,96L21.8,122.7C43.6,149,87,203,131,192C174.5,181,218,107,262,96C305.5,85,349,139,393,160C436.4,181,480,171,524,186.7C567.3,203,611,245,655,240C698.2,235,742,181,785,181.3C829.1,181,873,235,916,261.3C960,288,1004,288,1047,282.7C1090.9,277,1135,267,1178,224C1221.8,181,1265,107,1309,106.7C1352.7,107,1396,181,1418,218.7L1440,256L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="h-screen w-full flex justify-center items-center bg-white">
          <section class="">
            <div class="py-8 px-4 mx-auto max-w-screen-xl  lg:px-6">
              <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-purple">
                  Designed for business teams like yours
                </h2>
                {/* <p class="mb-5 font-light text-gray-500 sm:text-xl ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> */}
              </div>
              <div class="space-y-8 flex gap-2">
                {/* 
                <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 bg-purple dark:text-white">
                  <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
                  <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    Best option for personal use & for your next project.
                  </p>
                  <div class="flex justify-center items-baseline my-8">
                    <span class="mr-2 text-5xl font-extrabold">$29</span>
                    <span class="text-gray-500 dark:text-gray-400">/month</span>
                  </div>

                  <ul role="list" class="mb-8 space-y-4 text-left">
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Individual configuration</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>No setup, or hidden fees</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Team size:{" "}
                        <span class="font-semibold">1 developer</span>
                      </span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Premium support:{" "}
                        <span class="font-semibold">6 months</span>
                      </span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Free updates:{" "}
                        <span class="font-semibold">6 months</span>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                  >
                    Get started
                  </a>
                </div> */}

                {/* <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <h3 class="mb-4 text-2xl font-semibold">Company</h3>
                  <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    Relevant for multiple users, extended & premium support.
                  </p>
                  <div class="flex justify-center items-baseline my-8">
                    <span class="mr-2 text-5xl font-extrabold">$99</span>
                    <span class="text-gray-500 dark:text-gray-400">/month</span>
                  </div>

                  <ul role="list" class="mb-8 space-y-4 text-left">
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Individual configuration</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>No setup, or hidden fees</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Team size:{" "}
                        <span class="font-semibold">10 developers</span>
                      </span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Premium support:{" "}
                        <span class="font-semibold">24 months</span>
                      </span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Free updates:{" "}
                        <span class="font-semibold">24 months</span>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                  >
                    Get started
                  </a>
                </div> */}

                <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <h3 class="mb-4 text-2xl font-semibold">Enterprise</h3>
                  <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    Best for large scale uses and extended redistribution
                    rights.
                  </p>
                  <div class="flex justify-center items-baseline my-8">
                    <span class="mr-2 text-5xl font-extrabold">$499</span>
                    <span class="text-gray-500 dark:text-gray-400">/month</span>
                  </div>

                  <ul role="list" class="mb-8 space-y-4 text-left">
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Individual configuration</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>No setup, or hidden fees</span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Team size:{" "}
                        <span class="font-semibold">100+ developers</span>
                      </span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Premium support:{" "}
                        <span class="font-semibold">36 months</span>
                      </span>
                    </li>
                    <li class="flex items-center space-x-3">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Free updates:{" "}
                        <span class="font-semibold">36 months</span>
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                  >
                    Get started
                  </a>
                </div>
                <div class="container">
                  <div class="card">
                    <div class="slide slide1">
                      <div class="content">
                        <div class="icon">
                          <i class="fa fa-user-circle" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>

                    <div class="slide slide2">
                      <div class="content">
                        <h3>Hello there!</h3>

                        <p>Trust yourself and keep going.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex flex-col">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#5000ca"
              fill-opacity="1"
              d="M0,96L21.8,122.7C43.6,149,87,203,131,192C174.5,181,218,107,262,96C305.5,85,349,139,393,160C436.4,181,480,171,524,186.7C567.3,203,611,245,655,240C698.2,235,742,181,785,181.3C829.1,181,873,235,916,261.3C960,288,1004,288,1047,282.7C1090.9,277,1135,267,1178,224C1221.8,181,1265,107,1309,106.7C1352.7,107,1396,181,1418,218.7L1440,256L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
            ></path>
          </svg>
        <div className="flex flex-col bg-purple items-center py-16">
          <Footer/>
        </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
