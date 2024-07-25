import {
  Heading,
  Box,
  Text,
  Flex,
  Grid,
  Image,
  Card,
  CardBody,
  Stack,
  VStack,
} from "@chakra-ui/react";
import {
  EmblemCard,
  nationCards,
} from "../config/nationInfoConfigs/clickableCardInfoConfig";
import { NavBar, NavBarProps } from "../components/header/navbar";
import { Link } from "react-router-dom";
import React from "react";

export interface ClickableCardInfoPageProps {
  cards: EmblemCard[];
  pageTitle: string;
}

const ClickableCardInfoPage: React.FC<ClickableCardInfoPageProps> = (
  props: ClickableCardInfoPageProps
) => {
  const navBarProps: NavBarProps = {
    textColor: "rgb(159, 150, 170)",
  };

  return (
    <>
      <NavBar {...navBarProps} />
      <Flex w={"90%"} margin={"auto"}>
        <Box p={5} margin="auto" borderRadius="md" boxShadow="md" w={"100%"}>
          <Heading as="h1" size="xl" mb={5} textAlign="center">
            {props.pageTitle}
          </Heading>
          <Flex justify={"center"} align={"center"}>
            <Grid
              templateRows="repeat(5, 1fr)"
              templateColumns="repeat(3, 1fr)"
              columnGap={"5%"}
              rowGap={10}
              paddingTop={"3%"}
              w={"90%"}
              justifySelf={"center"}
              justifyContent={"center"}
            >
              {props.cards.map((card) => (
                <Link to={card.pagelink}>
                  <Card
                    size={"lg"}
                    borderRadius={"3xl"}
                    _hover={{
                      transform: "scale(1.1)",
                      transitionDuration: "500ms",
                      bg: "blue.700",
                    }}
                  >
                    <CardBody>
                      <VStack justifyContent={"center"} align={"center"}>
                        <Image
                          src={card.cardEmblem}
                          alt="Green double couch with wooden legs"
                          borderRadius="full"
                        />
                        <Stack mt="6" spacing="3">
                          <Heading size="md">{card.titleText}</Heading>
                          <Text>{card.subtext}</Text>
                        </Stack>
                      </VStack>
                    </CardBody>
                  </Card>
                </Link>
              ))}
            </Grid>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default ClickableCardInfoPage;
