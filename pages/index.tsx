import React from "react";
import { Flex } from "@chakra-ui/react";

import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Flex
      flexDir="column"
      w="100vw"
      minHeight="100vh"
      textAlign="center"
      alignItems="center"
    >
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </Flex>
  );
}
