import { Box, Image } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Box marginX="auto">
      <Image src='../../images/Logo.svg' alt='worldtrip logo' boxSize={{ base: '43%', sm: '100%' }} marginX="auto" />
    </Box>
  );
};