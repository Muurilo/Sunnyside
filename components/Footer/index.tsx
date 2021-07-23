import { Flex } from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Flex
      flexDir="column"
      w="100vw"
      minH="100vh"
      justifyContent="flex-start"
      alignItems="center"
      textAlign="center"
    ></Flex>
  );
};

export default Footer;
