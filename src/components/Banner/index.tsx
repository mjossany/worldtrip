import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

interface BannerProps {
  mobile: boolean,
}

export const Banner = ({ mobile }: BannerProps) => {
  if (mobile) {
    return (
      <Flex w="100%" h="164px" align="flex-start">
      <Box w="100%" h="164px" backgroundImage="../../images/Background.svg" backgroundRepeat="no-repeat">
        <Flex flexDirection="row">
          <Box>
            <Heading fontWeight="500" fontSize={[20, 36]} color="gray.50"  lineHeight={["30px", "54px"]} ml={[4, 141]} mt={["28px", "80px"]}>
              5 Continentes,<br />
              infinitas possibilidades.
            </Heading>
            <Text fontWeight="400" fontSize={[14, 20]} lineHeight={["21px", "30px"]} color="gray.200" ml={[4, 141]} mt="2">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
    )
  }
  return (
    <Flex w="100%" h="368px" align="flex-start">
      <Box w="100%" h="335px" backgroundImage="../../images/Background.svg" backgroundRepeat="no-repeat">
        <Flex flexDirection="row">
          <Box>
            <Heading fontWeight="500" fontSize={[20, 36]} color="gray.50"  lineHeight="54px" ml={141} mt="80px">
              5 Continentes,<br />
              infinitas possibilidades.
            </Heading>
            <Text fontWeight="400" fontSize={[14, 20]} color="gray.200" ml={141} mt="5">
              Chegou a hora de tirar do papel a viagem que você<br /> sempre sonhou.
            </Text>
          </Box>
          <Image src="../../images/Airplane.svg" alt="airplane illustration" ml={304} mt="76px" />
        </Flex>
      </Box>
    </Flex>
  )
};