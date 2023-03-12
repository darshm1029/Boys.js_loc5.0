import React from "react";
import Sidebar from "./Sidebar";
import { Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";
import {
  Grid,
  GridItem,
  Button,
  Heading,
  Divider,
  Stack,
  Image,
  ButtonGroup,
} from "@chakra-ui/react";

const ExplorePeople = () => {
  const users = [
    {
      name: "John Smith",
      description: "Software Engineer",
      personal_information: "Enjoys hiking and photography in his free time.",
    },
    {
      name: "Jane Doe",
      description: "Data Analyst",
      personal_information: "Passionate about volunteering and animal rescue.",
    },
    {
      name: "Bob Johnson",
      description: "Marketing Manager",
      personal_information:
        "Enjoys cooking and experimenting with new recipes on the weekends.",
    },
    {
      name: "Emily Wilson",
      description: "Graphic Designer",
      personal_information: "Loves traveling and exploring new cultures.",
    },
    {
      name: "David Lee",
      description: "Product Manager",
      personal_information: "Enjoys playing basketball and running marathons.",
    },
    {
      name: "Samantha Brown",
      description: "Sales Representative",
      personal_information: "Avid reader and lover of mystery novels.",
    },
    {
      name: "Mark Taylor",
      description: "Web Developer",
      personal_information: "Enjoys playing guitar and writing songs.",
    },
    {
      name: "Grace Kim",
      description: "Business Analyst",
      personal_information:
        "Passionate about sustainability and reducing waste.",
    },
    {
      name: "Daniel Chen",
      description: "Financial Analyst",
      personal_information: "Enjoys hiking and camping in the great outdoors.",
    },
    {
      name: "Linda Nguyen",
      description: "Human Resources Manager",
      personal_information:
        "Loves trying new foods and experimenting with cooking.",
    },
    {
      name: "Michael Rodriguez",
      description: "Data Scientist",
      personal_information: "Passionate about fitness and bodybuilding.",
    },
    {
      name: "Julia Patel",
      description: "Software Developer",
      personal_information:
        "Enjoys painting and creating art in her free time.",
    },
    {
      name: "Eric Wong",
      description: "Marketing Coordinator",
      personal_information:
        "Loves playing soccer and watching live sports events.",
    },
    {
      name: "Karen Kim",
      description: "UX Designer",
      personal_information:
        "Passionate about fashion and creating her own clothing designs.",
    },
  ];
  return (
    <>
      <div className="flex font-poppins">
        <Sidebar />
        {/* <div className="bg-purple/80 w-full h-screen items-center justify-center flex">
          <div className="flex flex-col text-center w-4/5 shadow-2xl">
            <div className="mx-auto"> */}
        <div className="ml-[30rem]">
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {users.map((user) => {
              setTimeout(() => {
                console.log("hi");
              }, 5000);

              return (
                <Card maxW="">
                  <CardBody>
                    {/* <Image
                  borderRadius="full"
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="hi"
                  boxSize="150px"
                /> */}
                    <div className="h-20 w-20 bg-black rounded-full" />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{user.name}</Heading>
                      <Text>{user.description}</Text>
                      <Text>{user.personal_information}</Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <a target="_blank" href="https://www.linkedin.com/company/echo3d/">
                      <Button variant="solid" colorScheme="blue">
                        Connect
                      </Button>
                      </a>
                      <Button variant="ghost" colorScheme="blue">
                        Message
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              );
            })}
          </Grid>
        </div>
      </div>
      {/* </div>
        </div>
        </div>
      </div> */}
    </>
  );
};

export default ExplorePeople;
