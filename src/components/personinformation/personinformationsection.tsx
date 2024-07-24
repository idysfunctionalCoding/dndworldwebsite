import {
  Flex,
  Heading,
  Image,
  VStack,
  Text,
  Box,
  Card,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { PeopleInfo } from "../../config/peopleInfoConfig";

const OnPagePersonSection: React.FC<PeopleInfo> = (props: PeopleInfo) => {
  return (
    <Box>
      <Flex width={"100%"} p={5} align={"center"}>
        <Image
          src={props.imageOfPerson}
          borderRadius={"full"}
          p={5}
          boxSize={"3xs"}
          objectFit={"cover"}
        />
        <VStack p={5}>
          <Heading as="h2" size="lg" w={"100%"}>
            {props.nameOfPerson}
          </Heading>
          <Text fontSize="md">{props.descriptionOfPerson}</Text>
        </VStack>
      </Flex>
      <Divider />
    </Box>
  );
};

export default OnPagePersonSection;
