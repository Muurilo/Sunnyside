import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

import Header from "../Header";

const Section1: React.FC = () => {
  return (
    <Flex
      flexDir="column"
      w="100%"
      h="100vh"
      backgroundImage={{
        base: "url('/images/mobile/image-header.jpg')",
        md: "url('/images/desktop/image-header.jpg')",
      }}
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
        left="50%"
        p={5}
        transform={{
          base: "translate(-50%,-70%)",
          md: "translate(-50%,-150%)",
        }}
        letterSpacing="wider"
      >
        We are creatives
      </Heading>
      <Text
        position="absolute"
        top="50vh"
        left="50%"
        transform={{
          base: "translate(-50%,-0%)",
          md: "translate(-50%,-40%)",
        }}
        fontSize={{base: "9xl", md: "12rem"}}
        color="#fff"
      >
        &darr;
      </Text>
    </Flex>
  );
};

export default Section1;
