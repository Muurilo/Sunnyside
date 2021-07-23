import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Customer from "../Customer";

const Section3: React.FC = () => {
  return (
    <Flex
      flexDir="column"
      w="100%"
      justifyContent={{base: "flex-start", md: "center"}}
      alignItems="center"
      textAlign="center"
    >
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        fontFamily="Fraunces"
        color="gray.600"
        my={{ base: 14, md: 24 }}
        letterSpacing="widest"
        textTransform="uppercase"
      >
        Client Testimonials
      </Text>
      <Flex flexDir={{ base: "column", md: "row" }} justifyContent={{base: "flex-start", md: "center"}} w="100%" maxW="100%">
        <Customer
          image="image-emily"
          text="We put our trust in Sunnyside and they delivered, making sure our needs
        were met and deadlines were always hit."
          name="Emily R."
          occupation="Marketing Director"
        />
        <Customer
          image="image-thomas"
          text="Sunnyside's enthusiasm coupled with their keen interest in out brand's success made it a satisfying and enjoyable experience."
          name="Thomas S."
          occupation="Chief Operating Officer"
        />
        <Customer
          image="image-jennie"
          text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
          occupation="Business Owner"
        />
      </Flex>
    </Flex>
  );
};

export default Section3;
