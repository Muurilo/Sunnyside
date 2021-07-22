import { Flex, Image, Box, Spacer, Heading, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

import Logo from "../public/images/logo.svg";

export default function Home() {
  return (
    <Flex
      flexDir="column"
      w="100vw"
      minHeight="100vh"
      textAlign="center"
      alignItems="center"
    >
      <Flex
        flexDir="column"
        w="100vw"
        h="100vh"
        backgroundImage="url('/images/mobile/image-header.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Flex flexDir="row" w="100vw">
          <Image
            w="50%"
            pt="10"
            pl="4"
            h="auto"
            src={"/images/logo.svg"}
            alt=""
          />
          <Spacer />
          <Box pt="10" mr="4">
            <FiMenu size="30" color="#fff" />
          </Box>
        </Flex>
        <Heading
          as="h1"
          size="3xl"
          textTransform="uppercase"
          fontFamily="Barlow"
          color="#fff"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%,-70%)"
          letterSpacing="wider"
        >
          We are creatives
        </Heading>
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%,-0%)"
          fontSize="9xl"
          color="#fff"
        >
          &darr;
        </Text>
      </Flex>
    </Flex>
  );
}
