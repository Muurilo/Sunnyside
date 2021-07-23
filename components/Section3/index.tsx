import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Customer from "../Customer";

const Section3: React.FC = () => {
  return (
    <Flex
      flexDir="column"
      w="100vw"
      minH="100vh"
      justifyContent="flex-start"
      alignItems="center"
      textAlign="center"
    >
      <Text
        fontSize="xl"
        fontFamily="Fraunces"
        color="gray.600"
        my={14}
        letterSpacing="widest"
        textTransform="uppercase"
      >
        Client Testimonials
      </Text>
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
  );
};

export default Section3;
