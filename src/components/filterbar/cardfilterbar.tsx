import {
  Box,
  Input,
  VStack,
  Text,
  Card,
  CardBody,
  Image,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";

export interface CardItem {
  pictureDir?: string;
  name: string;
  details?: string;
  isNew?: boolean;
}

interface FilterBarProps {
  cards: CardItem[];
  onSelectCard: (card: CardItem) => void;
}

export const CardFilterBar: React.FC<FilterBarProps> = ({ cards, onSelectCard }) => {
  const [filterText, setFilterText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <Box p={4}>
      <Input
        placeholder="Type to filter..."
        value={filterText}
        onChange={handleInputChange}
        mb={2}
      />
      <Divider orientation='horizontal' mb={2}/>
      <VStack spacing={0}>
        {filteredCards.map((card) => (
          <Card
            key={card.name}
            w="100%"
            borderRadius={0}
            _hover={{ bg: "blackAlpha.100", transition: "all 0.3s" }}
            onClick={() => onSelectCard(card)}
          >
            <CardBody>
              <HStack spacing={6}>
                  <Image boxSize='3em' src="./images/worldmap.png" alt="Dan Abramov" />
                <Text>{card.name}</Text>
              </HStack>
            </CardBody>
          </Card>
        ))}
      </VStack>
    </Box>
  );
};
