import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

// interface BannerProps {
//   isMobile: boolean,
// }

export const Banner = () => {
  return (
    <Flex w="100%" h="368px" align="flex-start" flexDirection="row">
      <Box w="100%" h="335px" backgroundImage="../../images/Background.svg" backgroundRepeat="no-repeat">
        <Flex flexDirection="row">
          <Box>
            <Heading fontWeight="500" color="gray.50" fontSize="36px" lineHeight="54px" ml={141} mt="80px">
              5 Continentes,<br />
              infinitas possibilidades.
            </Heading>
            <Text fontWeight="400" color="gray.200" ml={141} mt="5">
              Chegou a hora de tirar do papel a viagem que você<br /> sempre sonhou.
            </Text>
          </Box>
          <Image src="../../images/Airplane.svg" alt="airplane illustration" ml={304} mt="76px" />
        </Flex>
      </Box>
    </Flex>
  )
};