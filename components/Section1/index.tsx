import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

import Header from "../Header";

const Section1: React.FC = () => {
  return (
    <Flex
      flexDir="column"
      w="100vw"
      h="100vh"
      backgroundImage="url('/images/mobile/image-header.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Header />
      <Heading
        as="h1"
        size="3xl"
        textTransform="uppercase"
        fontFamily="Fraunces"
        color="#fff"
        position="absolute"
        top="50vh"
        left="50vw"
        p={5}
        transform="translate(-50%,-70%)"
        letterSpacing="wider"
      >
        We are creatives
      </Heading>
      <Text
        position="absolute"
        top="50vh"
        left="50vw"
        transform="translate(-50%,-0%)"
        fontSize="9xl"
        color="#fff"
      >
        &darr;
      </Text>
    </Flex>
  );
};

export default Section1;
