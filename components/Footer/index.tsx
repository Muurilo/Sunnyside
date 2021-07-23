import React from "react";
import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { ImFacebook2, ImTwitter, ImPinterest } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";

import Gallery from "../Gallery";

const Footer: React.FC = () => {
  return (
    <Flex
      position="relative"
      flexDir="column"
      w="100%"
      justifyContent="space-around"
      alignItems="center"
      textAlign="center"
    >
      <Gallery />
      <Flex
        flexDir="column"
        backgroundColor="#90d4c5"
        w="100%"
        h="auto"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          w={{base: "50%", md: "25%"}}
          h="auto"
          src={"/images/logo.svg"}
          mt={10}
          alt=""
        />
        <HStack my={24} spacing={5}>
          <Text fontSize="xl" color="#4f9384">
            About
          </Text>
          <Text fontSize="xl" color="#4f9384">
            Services
          </Text>
          <Text fontSize="xl" color="#4f9384">
            Projects
          </Text>
        </HStack>
        <HStack mb={10} spacing={5}>
          <ImFacebook2 color="#2d7466" size={32} />
          <FiInstagram color="#2d7466" size={32} />
          <ImTwitter color="#2d7466" size={32} />
          <ImPinterest color="#2d7466" size={32} />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Footer;
