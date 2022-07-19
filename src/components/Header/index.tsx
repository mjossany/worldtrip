import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <Flex as='header' maxWidth={1440} h={{ base: '50px', sm: '100px' }} marginX="auto" align="center">
      <Logo />
    </Flex>
  );
};