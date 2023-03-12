/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";

function DashboardTableRow(props) {
  const {  position, name, status, budget, progression, lastItem } = props
  return (
    <Tr>
      <Td
        color={'#000b76'}
        minWidth={{ sm: "250px" }}
        ps='0px'
        borderBottomColor='#56577A'
        border={lastItem ? "none" : null}>
        <Flex alignItems='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
          <Text fontSize='sm' color='#000b76' minWidth='100%'>
            {name}
          </Text>
        </Flex>
      </Td>
      <Td borderBottomColor='#56577A' border={lastItem ? "none" : null}>
      <Text fontSize='sm' color='#000b76' fontWeight='bold' pb='.5rem'>
          {position}
        </Text>
      </Td>
      <Td borderBottomColor='#56577A' border={lastItem ? "none" : null}>
        <Text fontSize='sm' color='#000b76' fontWeight='bold' pb='.5rem'>
          {budget}
        </Text>
      </Td>
      <Td borderBottomColor='#56577A' border={lastItem ? "none" : null}>  
        <Text fontSize='sm' color='#000b76' fontWeight='bold' pb='.5rem'>
          {status}
        </Text>
      </Td>
      <Td borderBottomColor='#56577A' border={lastItem ? "none" : null}>
        <Flex direction='column'>
          <Text
            fontSize='sm'
            color='#000b76'
            fontWeight='bold'
            pb='.2rem'>{`${progression}`}</Text>
          <Progress
            colorScheme='brand'
            maxW='125px'
            h='3px'
            bg='#2D2E5F'
            value={progression}
            borderRadius='15px'
          />
        </Flex>
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
