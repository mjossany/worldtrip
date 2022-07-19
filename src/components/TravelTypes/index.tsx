import { Flex, HStack } from "@chakra-ui/react";
import { Type } from "./Type";

interface TravelTypesProps {
  mobile: boolean;
}

export const TravelTypes = ({ mobile }: TravelTypesProps) => {
  return (
    <Flex mt={81} marginX="auto">
      <HStack spacing={151}>
        <Type imageUrl={'cocktail'} travelType={'vida noturna'} mobile/>
        <Type imageUrl={'surf'} travelType={'praia'} mobile/>
        <Type imageUrl={'building'} travelType={'moderno'} mobile/>
        <Type imageUrl={'museum'} travelType={'clássico'} mobile/>
        <Type imageUrl={'earth'} travelType={'e mais...'} mobile/>
      </HStack>
    </Flex>
  );
};