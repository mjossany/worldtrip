import { Flex, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  const isMobile = useBreakpointValue({
    base: true,
    xl: false,
  })
  return (
    <Flex flexDirection="column">
      <Banner mobile={isMobile} />
      <TravelTypes mobile={isMobile}/>
    </Flex>
  )
}
