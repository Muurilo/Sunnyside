import React from "react";
import { Text, Image } from "@chakra-ui/react";

interface ICustomer {
  image: string;
  text: string;
  name: string;
  occupation: string;
}

const Customer: React.FC<ICustomer> = (props: ICustomer) => {
  return (
    <>
      <Image
        w="50%"
        borderRadius="full"
        h="auto"
        src={`/images/${props.image}.jpg`}
        alt=""
      />
      <Text fontSize="xl" w="80vw" my={8} color="gray.700">
        {props.text}
      </Text>
      <Text
        fontFamily="Fraunces"
        fontSize="xl"
        fontWeight="bold"
        w="80vw"
        my={4}
        color="hsl(212, 27%, 19%)"
      >
        {props.name}
      </Text>
      <Text
        fontFamily="Fraunces"
        fontSize="xl"
        fontWeight="bold"
        w="80vw"
        mb={14}
        color="gray.600"
        opacity="0.5"
      >
        {props.occupation}
      </Text>
    </>
  );
};

export default Customer;
