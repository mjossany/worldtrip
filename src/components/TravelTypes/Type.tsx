import { Box, Image, Text } from "@chakra-ui/react";

interface TypeProps {
  imageUrl: string,
  travelType: string,
  mobile: boolean,
}

export const Type = ({ imageUrl, travelType, mobile }: TypeProps) => {
  return (
    <Box>
      <Image src={`../../images/${imageUrl}.svg`} alt={`${imageUrl} illustration`} />
      <Text>
        {travelType}
      </Text>
    </Box>
  );
};