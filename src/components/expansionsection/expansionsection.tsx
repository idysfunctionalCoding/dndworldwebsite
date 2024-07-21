import { Grid, GridItem, Collapse, Card } from "@chakra-ui/react";

import { CardItem, CardFilterBar } from "../filterbar/cardfilterbar";
import { ExpansionCard } from "./cardexpansion";

export const CardDetailsExpansionWithFilter: React.FC<{
  card: CardItem | null;
  filterCards: CardItem[];
  onSelectCard: (card: CardItem) => void;
}> = ({ card, filterCards, onSelectCard }) => {
  return (
    <Grid templateColumns="1fr 2fr" gap={4} p={4}>
      <GridItem>
        <Card variant='outline'>
          <CardFilterBar cards={filterCards} onSelectCard={onSelectCard} />
        </Card>
      </GridItem>
      <Collapse in={!!card}>{card && (<ExpansionCard card={card}/>)}</Collapse>
    </Grid>
  );
};
