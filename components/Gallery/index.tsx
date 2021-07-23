import React from "react";
import { Flex, Box } from "@chakra-ui/react";

const Gallery: React.FC = () => {
  return (
    <Flex
      flexDir="row"
      w="100vw"
      flexWrap="wrap"
      flexFlow="wrap"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Box
        w="50vw"
        h="30vh"
        backgroundImage="url('/images/mobile/image-gallery-milkbottles.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />
      <Box
        w="50vw"
        h="30vh"
        backgroundImage="url('/images/mobile/image-gallery-orange.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />
      <Box
        w="50vw"
        h="30vh"
        backgroundImage="url('/images/mobile/image-gallery-cone.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />
      <Box
        w="50vw"
        h="30vh"
        backgroundImage="url('/images/mobile/image-gallery-sugar-cubes.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />
    </Flex>
  );
};

export default Gallery;
