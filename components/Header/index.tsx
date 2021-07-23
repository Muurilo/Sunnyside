import React, { useState } from "react";
import { Flex, Image, Box, Spacer, Text, VStack } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
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
        <Box pt="10" mr="4" onClick={toggleMenu}>
          <FiMenu size="30" color="#fff" />
        </Box>
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
          w="90vw"
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
              backgroundColor="hsl(51, 90%, 49%)"
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
