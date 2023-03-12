import React from "react";
import Sidebar from "./Sidebar";
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react';
import { Grid, GridItem ,Button ,Heading ,Divider ,Stack ,Image , ButtonGroup} from '@chakra-ui/react'

const ExplorePeople = () => {
  return (
    <>
      <div className="flex font-poppins">
        <Sidebar />
        <div className="bg-purple/80 w-full h-screen items-center justify-center flex">
          <div className="flex flex-col text-center w-4/5 shadow-2xl">
            <div className="m-auto">
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            <Card maxW='sm'>
  <CardBody>
    <Image borderRadius='full'
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      boxSize='150px'

    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Sahil Shetty</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Connect
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Message
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    
    </Grid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplorePeople;
