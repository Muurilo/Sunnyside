import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Section2: React.FC = () => {
  return (
    <Flex flexDir="column" w="100%">
      {/* Item 1 */}
      <Flex
        textAlign={{ base: "center", md: "left" }}
        flexDir={{ base: "column", md: "row-reverse" }}
        w="100%"
      >
        <Box
          w={{ base: "100%", md: "50%" }}
          h={{ base: "50vh", md: "60vh" }}
          backgroundImage={{
            base: "url('/images/mobile/image-transform.jpg')",
            md: "url('/images/desktop/image-transform.jpg')",
          }}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        />
        <Flex
          flexDir="column"
          w={{ base: "100%", md: "50%" }}
          minH="60vh"
          h={{ md: "60vh" }}
          alignItems={{ base: "center", md: "flex-start" }}
          justifyContent="center"
        >
          <Heading
            as="h1"
            fontSize="4xl"
            w="100%"
            px={{ md: 14 }}
            m={{ base: 10, md: 0 }}
            fontFamily="Fraunces"
            color="hsl(212, 27%, 19%)"
          >
            Transform your brand
          </Heading>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            w={{ base: "80%", md: "100%" }}
            px={{ md: 14 }}
            py={5}
            color="gray.600"
          >
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </Text>
          <Flex
            position="relative"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            mx={14}
            my={10}
          >
            <Text
              fontFamily="Fraunces"
              zIndex="5"
              fontSize={{ md: "xl" }}
              textTransform="uppercase"
            >
              Learn more
            </Text>
            <Box
              position="absolute"
              w="100%"
              h="2"
              zIndex="0"
              bottom="0"
              backgroundColor="hsl(51, 100%, 49%)"
              opacity="0.3"
            />
          </Flex>
        </Flex>
      </Flex>
      {/* Item 1 */}

      {/* Item 2 */}
      <Flex
        textAlign={{ base: "center", md: "left" }}
        flexDir={{ base: "column", md: "row" }}
        w="100%"
        minH={{ base: "100vh", md: "0" }}
      >
        <Box
          w={{ base: "100%", md: "50%" }}
          h={{ base: "50vh", md: "60vh" }}
          backgroundImage={{
            base: "url('/images/mobile/image-stand-out.jpg')",
            md: "url('/images/desktop/image-stand-out.jpg')",
          }}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        />
        <Flex
          flexDir="column"
          w={{ base: "100%", md: "50%" }}
          minH="50vh"
          h={{ md: "50h" }}
          alignItems={{ base: "center", md: "flex-start" }}
          justifyContent="center"
          p={5}
        >
          <Heading
            as="h1"
            fontSize="4xl"
            w="100%"
            px={{ md: 14 }}
            m={{ base: 10, md: 0 }}
            fontFamily="Fraunces"
            color="hsl(212, 27%, 19%)"
          >
            Stand out to the right audience
          </Heading>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            w={{ base: "80%", md: "100%" }}
            px={{ md: 14 }}
            py={5}
            color="gray.600"
          >
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we´ll build and
            extend your brand in digital places.
          </Text>
          <Flex
            position="relative"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            mx={14}
            my={10}
          >
            <Text
              fontFamily="Fraunces"
              zIndex="5"
              fontSize={{ md: "xl" }}
              textTransform="uppercase"
            >
              Learn more
            </Text>
            <Box
              position="absolute"
              w="100%"
              h="2"
              zIndex="0"
              bottom="0"
              backgroundColor="hsl(51, 100%, 49%)"
              opacity="0.3"
            />
          </Flex>
        </Flex>
      </Flex>
      {/* Item 2 */}

      {/* Item 3 */}
      <Flex flexDir={{ base: "column", md: "row" }} w="100%">
        <Flex
          flexDir="column"
          w={{ base: "100%", md: "50%" }}
          h={{ base: "70vh", md: "60vh" }}
          alignItems="center"
          justifyContent="flex-end"
          textAlign="center"
          backgroundImage={{
            base: "url('/images/mobile/image-graphic-design.jpg')",
            md: "url('/images/desktop/image-graphic-design.jpg')",
          }}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Heading
            as="h1"
            fontSize="4xl"
            w="90%"
            mb={{ md: 10 }}
            fontFamily="Fraunces"
            color="hsl(212, 27%, 19%)"
          >
            Graphic Design
          </Heading>
          <Text
            fontSize={{ base: "xl", md: "xl" }}
            w={{ base: "80%", md: "70%" }}
            pb={{ base: 10, md: 24 }}
            color="gray.600"
          >
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients
            attention.
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          w={{ base: "100%", md: "50%" }}
          h={{ base: "70vh", md: "60vh" }}
          alignItems="center"
          justifyContent="flex-end"
          textAlign="center"
          backgroundImage={{
            base: "url('/images/mobile/image-photography.jpg')",
            md: "url('/images/desktop/image-photography.jpg')",
          }}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Heading
            as="h1"
            fontSize="4xl"
            w="90%"
            mb={{ md: 10 }}
            fontFamily="Fraunces"
            color="hsl(212, 27%, 19%)"
          >
            Photography
          </Heading>
          <Text
            fontSize={{ base: "xl", md: "xl" }}
            w={{ base: "80%", md: "70%" }}
            pb={{ base: 10, md: 24 }}
            color="gray.600"
          >
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </Text>
        </Flex>
      </Flex>
      {/* Item 3 */}
    </Flex>
  );
};

export default Section2;
