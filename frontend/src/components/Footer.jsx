import React from "react";

const Footer = () => {
  return (
    <footer class="text-white text-lg  body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap md:text-left text-center order-first">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-2xl text-light mb-3">
              HOME
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-white text-lg  hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-white text-lg  hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-white text-lg  hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-white text-lg  hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-2xl text-light mb-3">
              ABOUT US
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-white text-lg  hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-white text-lg  hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-white text-lg  hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-white text-lg  hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-2xl text-light mb-3">
              CONTACT US
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-white text-lg  hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-white text-lg  hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-white text-lg  hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-white text-lg  hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-2xl text-light mb-3">
              SUBSCRIBE
            </h2>
            <div class="flex w-[20rem] xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  for="footer-field"
                  class="leading-7 text-white text-lg "
                >
                  Email
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                />
              </div>
              <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Subscribe
              </button>
            </div>
            
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
