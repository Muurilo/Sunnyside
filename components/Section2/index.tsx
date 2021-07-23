import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Section2: React.FC = () => {
  return (
    <Flex flexDir="column" w="100vw" minH="100vh">
      {/* Item 1 */}
      <Flex flexDir="column" w="100vw" minH="100vh">
        <Box
          w="100vw"
          h="70vh"
          backgroundImage="url('/images/mobile/image-transform.jpg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        />
        <Flex
          flexDir="column"
          w="100vw"
          minH="50vh"
          alignItems="center"
          justifyContent="center"
          p={5}
        >
          <Heading
            as="h1"
            fontSize="4xl"
            m={10}
            w="90vw"
            fontFamily="Fraunces"
            color="hsl(212, 27%, 19%)"
          >
            Transform your brand
          </Heading>
          <Text fontSize="xl" w="80vw" color="gray.600">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </Text>
          <Flex
            position="relative"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            m={10}
          >
            <Text fontFamily="Fraunces" zIndex="5" textTransform="uppercase">
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
      <Flex flexDir="column" w="100vw" minH="100vh">
        <Box
          w="100vw"
          h="70vh"
          backgroundImage="url('/images/mobile/image-stand-out.jpg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        />
        <Flex
          flexDir="column"
          w="100vw"
          minH="50vh"
          alignItems="center"
          justifyContent="center"
          p={5}
        >
          <Heading
            as="h1"
            fontSize="4xl"
            m={10}
            w="90vw"
            fontFamily="Fraunces"
            color="hsl(212, 27%, 19%)"
          >
            Stand out to the right audience
          </Heading>
          <Text fontSize="xl" w="80vw" color="gray.600">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we´ll build and
            extend your brand in digital places.
          </Text>
          <Flex
            position="relative"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            m={10}
          >
            <Text fontFamily="Fraunces" zIndex="5" textTransform="uppercase">
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
      <Flex flexDir="column" w="100vw" minH="100vh">
        <Flex
          flexDir="column"
          w="100vw"
          h="115vh"
          alignItems="center"
          justifyContent="flex-end"
          textAlign="center"
          backgroundImage="url('/images/mobile/image-graphic-design.jpg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Heading
            as="h1"
            fontSize="4xl"
            m={10}
            w="90vw"
            fontFamily="Fraunces"
            color="hsl(212, 27%, 19%)"
          >
            Graphic Design
          </Heading>
          <Text fontSize="xl" w="80vw" pb={10} color="gray.600">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients
            attention.
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          w="100vw"
          h="115vh"
          alignItems="center"
          justifyContent="flex-end"
          textAlign="center"
          backgroundImage="url('/images/mobile/image-photography.jpg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Heading
            as="h1"
            fontSize="4xl"
            m={10}
            w="90vw"
            fontFamily="Fraunces"
            color="hsl(212, 27%, 19%)"
          >
            Photography
          </Heading>
          <Text fontSize="xl" w="80vw" pb={10} color="gray.600">
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
