import { CardItem } from "../filterbar/cardfilterbar";
import {
  Box,
  Text,
  Card,
  CardBody,
  Heading,
  Image,
  Badge,
  Flex,
} from "@chakra-ui/react";

export const ExpansionCard: React.FC<{ card: CardItem | null }> = ({
  card,
}) => {
  if (!card) {
    return <Box p={4}>Select a card to see details</Box>;
  }

  return (
    <Card w="100%" p={4} h="100%" variant={"filled"}>
      <CardBody>
        <Flex alignItems={"center"} mb={4}>
          <Image boxSize='4em' borderRadius="md" src={card.pictureDir} alt={card.name} />
          <Heading size="lg" ml={5}>
            {card.name}
          </Heading>
          {card.isNew && (
            <Badge ml="1" colorScheme="green">
              New
            </Badge>
          )}
        </Flex>
        <Text>{card.details}</Text>
      </CardBody>
    </Card>
  );
};
