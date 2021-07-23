import React from "react";
import { Flex, Box } from "@chakra-ui/react";

const Gallery: React.FC = () => {
  return (
    <Flex
      flexDir="row"
      w="100%"
      flexWrap={{ base: "wrap", md: "nowrap" }}
      flexFlow="wrap"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Box
        w={{ base: "50%", md: "25%" }}
        h={{ base: "30vh", md: "70vh" }}
        backgroundImage={{
          base: "url('/images/mobile/image-gallery-milkbottles.jpg')",
          md: "url('/images/desktop/image-gallery-milkbottles.jpg')",
        }}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />
      <Box
        w={{ base: "50%", md: "25%" }}
        h={{ base: "30vh", md: "70vh" }}
        backgroundImage={{
          base: "url('/images/mobile/image-gallery-orange.jpg')",
          md: "url('/images/desktop/image-gallery-orange.jpg')",
        }}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />
      <Box
        w={{ base: "50%", md: "25%" }}
        h={{ base: "30vh", md: "70vh" }}
        backgroundImage={{
          base: "url('/images/mobile/image-gallery-cone.jpg')",
          md: "url('/images/desktop/image-gallery-cone.jpg')",
        }}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />
      <Box
        w={{ base: "50%", md: "25%" }}
        h={{ base: "30vh", md: "70vh" }}
        backgroundImage={{
          base: "url('/images/mobile/image-gallery-sugar-cubes.jpg')",
          md: "url('/images/desktop/image-gallery-sugarcubes.jpg')",
        }}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />
    </Flex>
  );
};

export default Gallery;
