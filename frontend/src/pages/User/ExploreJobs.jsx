import React from "react";
import Modals from "../../components/Modals";
import Sidebar from "./Sidebar";

const ExploreJobs = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="flex font-poppins">
        <Sidebar />
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-52 py-24 mx-auto">
            <div class="-my-8 divide-y-2 divide-gray-100">
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700">
                    CATEGORY
                  </span>
                  <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                    Parkit- A Parking Management System
                  </h2>
                  <p class="leading-relaxed">
                  As an AI/ML developer, your role would be to design and build artificial intelligence and machine learning models that can analyze and learn from large amounts of data. You would use programming languages such as Python, Java, or C++ to develop algorithms.
                  </p>
                  <button
                    onClick={() => {
                      setShowModal(true);
                    }}
                    class="text-white inline-flex items-center mt-4 py-2 px-4 bg-purple rounded-2xl"
                  >
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700">
                    CATEGORY
                  </span>
                  <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                    Evolfit - A Fitness App
                  </h2>
                  <p class="leading-relaxed">
                  As a backend developer, you will be responsible for developing and maintaining the server-side of our web applications. You will work closely with front-end developers, product managers, and other stakeholders to deliver high-quality and scalable solutions.
                  </p>
                  <button
                    class="text-white inline-flex items-center mt-4 py-2 px-4 bg-purple rounded-2xl"
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700">
                    CATEGORY
                  </span>
                  <span class="text-sm text-gray-500">12 Jun 2019</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                    Artenal - A Social Media Platform
                  </h2>
                  <p class="leading-relaxed">
                  We are seeking a skilled Frontend Developer to join our team. The ideal candidate should have experience in building dynamic and responsive user interfaces using modern web technologies. You will work closely with our UX/UI designers and backend developers.
                  </p>
                  <button
                    onClick={() => {
                      setShowModal(true);
                    }}
                    class="text-white inline-flex items-center mt-4 py-2 px-4 bg-purple rounded-2xl"
                  >
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modals showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
};

export default ExploreJobs;
