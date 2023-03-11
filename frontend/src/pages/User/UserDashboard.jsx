import React from "react";
import Calendar from "../../components/Calendar";
import Sidebar from "./Sidebar";
import DashboardTableRow from "../../components/TablesProjectRow";

import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

const UserDashboard = () => {
  return (
    <>
      <div className="flex font-poppins ">
        <Sidebar />
        <div className="bg-purple/80 w-full pl-[20%] mx-auto items-center justify-center flex">
          <div className="flex flex-col text-center w-4/5 shadow-2xl p-12">
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
            <div className=" text-poppins">
              <Table variant="simple" color="#3A1078">
                <Thead>
                  <Tr my="1rem" ps="0px">
                    <Th
                      ps="0px"
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      Companies
                    </Th>
                    <Th
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      Members
                    </Th>
                    <Th
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      Budget
                    </Th>
                    <Th
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      Completion
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {/* {dashboardTableData.map((row, index, arr) => {
								return (
									<DashboardTableRow
										name={row.name}
										logo={row.logo}
										members={row.members}
										budget={row.budget}
										progression={row.progression}
										lastItem={index === arr.length - 1 ? true : false}
									/>
								);
							})} */}
                  <DashboardTableRow
                    name="test"
                    logo="test"
                    members="test"
                    budget="test"
                    progression="test"
                    lastItem={true}
                  />
                  <DashboardTableRow
                    name="test"
                    logo="test"
                    members="test"
                    budget="test"
                    progression="test"
                    lastItem={true}
                  />
                  <DashboardTableRow
                    name="test"
                    logo="test"
                    members="test"
                    budget="test"
                    progression="test"
                    lastItem={true}
                  />
                  <DashboardTableRow
                    name="test"
                    logo="test"
                    members="test"
                    budget="test"
                    progression="test"
                    lastItem={true}
                  />
                  <DashboardTableRow
                    name="test"
                    logo="test"
                    members="test"
                    budget="test"
                    progression="test"
                    lastItem={true}
                  />
                  <DashboardTableRow
                    name="test"
                    logo="test"
                    members="test"
                    budget="test"
                    progression="test"
                    lastItem={true}
                  />
                  <DashboardTableRow
                    name="test"
                    logo="test"
                    members="test"
                    budget="test"
                    progression="test"
                    lastItem={true}
                  />
                  <DashboardTableRow
                    name="test"
                    logo="test"
                    members="test"
                    budget="test"
                    progression="test"
                    lastItem={true}
                  />
                </Tbody>
              </Table>
            </div>
            {/* <div className="flex flex-col py-7">
              <p className="text-5xl font-bold text-darkPurple">
                Scheduled Meetings
              </p>
              <Calendar />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
