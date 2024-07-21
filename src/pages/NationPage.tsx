import {
  Heading,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { nationsInfo } from "../config/nationConfig";
import { CardItem } from "../components/filterbar/cardfilterbar";
import { CardDetailsExpansionWithFilter } from "../components/expansionsection/expansionsection";
import { useState, useRef } from "react";

const NationInfoPage = () => {
  const location = useLocation();
  const { nation } = location.state;
  const [selectedCard, setSelectedCard] = useState<CardItem | null>(null);
  const handleSelectCard = (card: CardItem) => {
    if (card !== null && card.name === selectedCard?.name) {
      setSelectedCard(null);
    } else {
      setSelectedCard(card);
    }
  };
  const testingCards: CardItem[] = [
    {
      name: "Alfred",
      details: "I am alfred",
      pictureDir: "./images/worldmap.png",
    },
    {
      name: "Bob",
      details: "I am bob",
      isNew: true,
      pictureDir: "./images/worldmap.png",
    },
    {
      name: "Fred",
      details: "I am fred",
      pictureDir: "./images/worldmap.png",
    },
    {
      name: "Terry",
      details: "I am terry",
      isNew: true,
      pictureDir: "./images/worldmap.png",
    },
  ];

  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Flex w={"90%"} margin={"auto"}>
        <Box p={5} margin="auto" borderRadius="md" boxShadow="md" ref={topRef} w={'100%'}>
          <Heading as="h1" size="xl" mb={5} textAlign="center">
            {nationsInfo[nation as keyof typeof nationsInfo].name}
          </Heading>
          <Tabs variant="soft-rounded" colorScheme="teal">
            <TabList mb={5} justifyContent='center'>
              <Tab>Overview</Tab>
              <Tab>History</Tab>
              <Tab>Culture</Tab>
              <Tab>Geography</Tab>
              <Tab>Politics</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Heading as="h2" size="lg" mb={3}>
                  Overview
                </Heading>
                <Text>
                  Brief description of the nation. Include general information
                  that gives an idea of what the nation is about.
                </Text>
              </TabPanel>
              <TabPanel>
                <Heading as="h2" size="lg" mb={3}>
                  History
                </Heading>
                <Text>
                  Detailed history of the nation, including important events,
                  dates, and figures that shaped its development.
                </Text>
              </TabPanel>
              <TabPanel>
                <Heading as="h2" size="lg" mb={3}>
                  Culture
                </Heading>
                <Text>
                  Description of the nation's culture, including customs,
                  traditions, and notable aspects of daily life.
                </Text>
              </TabPanel>
              <TabPanel>
                <Heading as="h2" size="lg" mb={3}>
                  Geography
                </Heading>
                <Text>
                  Overview of the nation's geography, including important
                  landmarks, climate, and natural resources.
                </Text>
              </TabPanel>
              <TabPanel>
                <Heading as="h2" size="lg" mb={3}>
                  Politics
                </Heading>
                <Text>
                  Information about the nation's political system, key figures
                  in the government, and current political climate.
                </Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
      <Box textAlign="center" mt={5}>
        <Button colorScheme="teal" onClick={scrollToTop}>
          Back to Top
        </Button>
      </Box>
    </>
  );

  return (
    <>
      <Heading
        as="h1"
        size="3xl"
        width="100%"
        justifyContent="center"
        display={"flex"}
        paddingTop={"2%"}
      >
        {nationsInfo[nation as keyof typeof nationsInfo].name}
      </Heading>
      <CardDetailsExpansionWithFilter
        card={selectedCard}
        filterCards={testingCards}
        onSelectCard={handleSelectCard}
      />
    </>
  );
};

export default NationInfoPage;
