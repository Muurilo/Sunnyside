import React, { useState } from "react";
import {
  Flex,
  Image,
  Box,
  Spacer,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <Flex flexDir="row" w="100%">
        <Image
          w={{ base: "50%", md: "sm" }}
          h="auto"
          pt="10"
          pl={{ base: "4", md: "8" }}
          src={"/images/logo.svg"}
          alt=""
        />
        <Spacer />
        <Box display={{ md: "none" }} pt="10" mr="4" onClick={toggleMenu}>
          <FiMenu size="30" color="#fff" />
        </Box>
        <HStack
          display={{ base: "none", md: "flex" }}
          spacing={8}
          color="white"
          fontSize="xl"
          pt={10}
          pr={{ base: "4", md: "8" }}
        >
          <Text>About</Text>
          <Text>Services</Text>
          <Text>Projects</Text>
          <Text
            backgroundColor="#fff"
            textTransform="uppercase"
            fontWeight="bold"
            color="gray.700"
            py="5"
            px="8"
            borderRadius="full"
          >
            Contact
          </Text>
        </HStack>
      </Flex>
      <Flex
        display={isMenuOpen === true ? "flex" : "none"}
        w="100%"
        justifyContent="center"
        alignItems="center"
        mt="8"
      >
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          w="90%"
          h="70vh"
          backgroundColor="#fff"
          position="relative"
          zIndex="10"
        >
          <Box
            position="absolute"
            right="0px"
            top="-15px"
            borderLeft="8px solid transparent"
            borderRight="8px solid #fff"
            borderTop="8px solid transparent"
            borderBottom="8px solid #fff"
          />
          <VStack spacing={5} color="gray.700" fontSize="2xl">
            <Text>About</Text>
            <Text>Services</Text>
            <Text>Projects</Text>
            <Text
              backgroundColor={{ base: "hsl(51, 90%, 49%)" }}
              textTransform="uppercase"
              fontWeight="bold"
              color="gray.700"
              py="5"
              px="8"
              borderRadius="full"
            >
              Contact
            </Text>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
