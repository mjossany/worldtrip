import { useBreakpointValue } from "@chakra-ui/react";
import { Banner } from "../components/Banner";

export default function Home() {
  const isMobile = useBreakpointValue({
    base: true,
    xl: false,
  })
  return (
    <Banner mobile={isMobile} />
  )
}
