import React from "react";
import { Text, Image, Flex } from "@chakra-ui/react";

interface ICustomer {
  image: string;
  text: string;
  name: string;
  occupation: string;
}

const Customer: React.FC<ICustomer> = (props: ICustomer) => {
  return (
    <Flex
      flexDir="column"
      w={{ md: "30%" }}
      justifyContent="center"
      alignItems="center"
    >
      <Image
        w={{ base: "50%", md: "10vw" }}
        borderRadius="full"
        h="auto"
        src={`/images/${props.image}.jpg`}
        alt=""
      />
      <Text
        fontSize="xl"
        w={{ base: "80%", md: "60%" }}
        h={{ md: "40%" }}
        my={8}
        color="gray.700"
      >
        {props.text}
      </Text>
      <Text
        fontFamily="Fraunces"
        fontSize={{ base: "xl", md: "xl" }}
        fontWeight="bold"
        w="80%"
        my={4}
        color="hsl(212, 27%, 19%)"
      >
        {props.name}
      </Text>
      <Text
        fontFamily="Fraunces"
        fontSize={{ base: "xl", md: "md" }}
        fontWeight="bold"
        w="80%"
        mb={14}
        color="gray.600"
        opacity="0.5"
      >
        {props.occupation}
      </Text>
    </Flex>
  );
};

export default Customer;
