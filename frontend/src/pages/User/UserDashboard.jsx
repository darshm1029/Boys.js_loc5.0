import React from "react";
import Calendar from "../../components/Calendar";
import Sidebar from "./Sidebar";
import DashboardTableRow from "../../components/TablesProjectRow";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import { PieChart } from "react-minimal-pie-chart";

import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import {
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";

const UserDashboard = () => {
  return (
    <>
      <div className="flex font-poppins ">
        <Sidebar />

        <div className="bg-white w-full -m-14 pl-[20%] mx-auto items-center justify-center flex">
          <div className="flex flex-col text-center w-4/5  p-12">
            <div className="flex-col flex">
              <div className="flex justify-around space-x-7 mt-16">
                <div className="flex flex-col space-y-4 justify-center items-center">
                  <Card>
                    <CardBody>
                      <Flex
                        flexDirection="row"
                        align="center"
                        justify="center"
                        w="100%"
                        backgroundColor="#000b76"
                        padding={5}
                        rounded={2}
                      >
                        <Stat me="auto">
                          <StatLabel
                            fontSize="sm"
                            color="gray.400"
                            fontWeight="bold"
                            pb="2px"
                            
                          >
                            Today's Money
                          </StatLabel>
                          <Flex>
                            <StatNumber fontSize="lg" color="#fff">
                              $53,000
                            </StatNumber>
                            <StatHelpText
                              alignSelf="flex-end"
                              justifySelf="flex-end"
                              m="0px"
                              color="green.400"
                              fontWeight="bold"
                              ps="3px"
                              fontSize="md"
                            >
                              +55%
                            </StatHelpText>
                          </Flex>
                        </Stat>
                      </Flex>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <Flex
                        flexDirection="row"
                        align="center"
                        justify="center"
                        w="100%"
                        backgroundColor="#000b76"
                        padding={5}
                        rounded={2}
                      >
                        <Stat me="auto">
                          <StatLabel
                            fontSize="sm"
                            color="gray.400"
                            fontWeight="bold"
                            pb="2px"
                          >
                            Today's Money
                          </StatLabel>
                          <Flex>
                            <StatNumber fontSize="lg" color="#fff">
                              $53,000
                            </StatNumber>
                            <StatHelpText
                              alignSelf="flex-end"
                              justifySelf="flex-end"
                              m="0px"
                              color="green.400"
                              fontWeight="bold"
                              ps="3px"
                              fontSize="md"
                            >
                              +55%
                            </StatHelpText>
                          </Flex>
                        </Stat>
                      </Flex>
                    </CardBody>
                  </Card>
                </div>
                <div className="h-[20rem] w-[20rem]">
                  <PieChart
                    data={[
                      { title: "One", value: 10, color: "#E38627" },
                      { title: "Two", value: 15, color: "#C13C37" },
                      { title: "Three", value: 20, color: "#6A2135" },
                    ]}
                  />
                </div>
              </div>
              <Heading padding={8} fontFamily="poppins">
                Recommended Jobs
              </Heading>
              <div className="flex space-x-6 border-sm">
                <Card fontFamily="poppins">
                  <CardHeader>
                    <Heading
                      size="md"
                      padding={3}
                      fontFamily="poppins"
                      textColor="darkblue"
                    >
                      Front Developer
                    </Heading>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Heading
                          size="xs"
                          textTransform="uppercase"
                          padding={1}
                          fontFamily="poppins"
                        >
                          Overview
                        </Heading>
                        <Text pt="2" fontSize="sm" fontFamily="poppins">
                        We are seeking a skilled Frontend Developer to join our team. The ideal candidate should have experience in building dynamic and responsive user interfaces using modern web technologies. You will work closely with our UX/UI designers and backend developers.
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Stipend
                        </Heading>
                        <Text pt="2" fontSize="sm" fontFamily="poppins">
                          1500$ 
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Duration
                        </Heading>
                        <Text pt="2" fontSize="sm" fontFamily="poppins">
                          3 Months - 6 Months
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
                <Card fontFamily="poppins">
                  <CardHeader>
                    <Heading
                      size="md"
                      padding={3}
                      fontFamily="poppins"
                      textColor="darkblue"
                    >
                      Backend Developer
                    </Heading>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Heading
                          size="xs"
                          textTransform="uppercase"
                          padding={1}
                          fontFamily="poppins"
                        >
                          Overview
                        </Heading>
                        <Text pt="2" fontSize="sm" fontFamily="poppins">
                        As a backend developer, you will be responsible for developing and maintaining the server-side of our web applications. You will work closely with front-end developers, product managers, and other stakeholders to deliver high-quality and scalable solutions.
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Stipend
                        </Heading>
                        <Text pt="2" fontSize="sm" fontFamily="poppins">
                          2000$
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Duration
                        </Heading>
                        <Text pt="2" fontSize="sm" fontFamily="poppins">
                          6 Months 
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
                <Card fontFamily="poppins">
                  <CardHeader>
                    <Heading
                      size="md"
                      padding={3}
                      fontFamily="poppins"
                      textColor="darkblue"
                    >
                      AI-ML Developer
                    </Heading>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Heading
                          size="xs"
                          textTransform="uppercase"
                          padding={1}
                          fontFamily="poppins"
                        >
                          Overview
                        </Heading>
                        <Text pt="2" fontSize="sm" fontFamily="poppins">
                        As an AI/ML developer, your role would be to design and build artificial intelligence and machine learning models that can analyze and learn from large amounts of data. You would use programming languages such as Python, Java, or C++ to develop algorithms
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Stipend
                        </Heading>
                        <Text pt="2" fontSize="sm" fontFamily="poppins">
                          1000$
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Duration
                        </Heading>
                        <Text pt="2" fontSize="sm" fontFamily="poppins">
                          6 Months - 8 Months
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              </div>
              <div className="my-4 text-poppins">
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
                        Date
                      </Th>
                      <Th
                        color="gray.400"
                        fontFamily="Plus Jakarta Display"
                        borderBottomColor="#56577A"
                      >
                        Link
                      </Th>
                      <Th
                        color="gray.400"
                        fontFamily="Plus Jakarta Display"
                        borderBottomColor="#56577A"
                      >
                        Status
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
                      textColor="black"
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
