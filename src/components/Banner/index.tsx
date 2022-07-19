import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export const Banner = () => {
  return (
    <Flex h={368} align="flex-start">
      <Image src="../../images/Background.svg" alt="darkblue sky with stars image background" />
      <Heading position="absolute" fontWeight="500" color="gray.50" ml={141} mt="20" lineHeight="54px">
        5 Continentes,<br /> infinitas possibilidades
      </Heading>
      <Text position="absolute" fontWeight="400" color="gray.200" ml={141} mt="52">
        Chegou a hora de tirar do papel a viagem que você<br /> sempre sonhou.
      </Text>
      <Image src="../../images/Airplane.svg" alt="airplane illustration" position="absolute" ml={870} mt="76" />
    </Flex>
  );
};