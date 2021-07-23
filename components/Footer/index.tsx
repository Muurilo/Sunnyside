import React from "react";
import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import Gallery from "../Gallery";

const Footer: React.FC = () => {
  return (
    <Flex
      position="relative"
      flexDir="column"
      w="100vw"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Gallery />
      <Flex
        flexDir="column"
        backgroundColor="#90d4c5"
        w="100vw"
        h="auto"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          w="50%"
          pt="10"
          pl="4"
          h="auto"
          src={"/images/logo.svg"}
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
      </Flex>
    </Flex>
  );
};

export default Footer;
