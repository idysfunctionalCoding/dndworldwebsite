import {
  Box,
  Flex,
  Heading,
  Text,
  Tab,
  TabPanels,
  TabList,
  TabPanel,
  Tabs,
  Divider,
  Stack,
  Card,
  Grid,
} from "@chakra-ui/react";
import { NavBar, NavBarProps } from "../components/header/navbar";
import { NationPageConfig } from "../config/nationInfoConfigs/nationPageConfig";
import {
  HeroSectionProps,
  HeroSectionText,
} from "../components/herosection/herosectiontext";
import {
  HighlightCardSection,
  HighlightCardSectionProps,
} from "../components/landmarkcards/culturalCardSection";
import OnPagePersonSection from "../components/personinformation/personinformationsection";
import { individualNationConfigs } from "../config/nationInfoConfigs/nationPageConfig";
import { useParams } from "react-router-dom";

const IndividualNationPage = () => {
  const { nationName } = useParams();
  const nationConfig: NationPageConfig =
    individualNationConfigs[nationName as keyof typeof individualNationConfigs];
  const heroSectionProps: HeroSectionProps = {
    titleText: nationConfig.name,
    subtitleText: nationConfig.heroText,
    textColor: nationConfig.textColor,
  };

  const landmarkSectionProps: HighlightCardSectionProps = {
    textColor: nationConfig.textColor,
    landmarks: nationConfig.landmarks,
    columnAmount: Math.min(4, nationConfig.landmarks.length),
    rowAmount:
      nationConfig.landmarks.length % 4 === 0
        ? Math.floor(nationConfig.landmarks.length / 4)
        : Math.floor(nationConfig.landmarks.length / 4) + 1,
  };

  const navBarProps: NavBarProps = {
    textColor: nationConfig.textColor,
  };

  let politicalPeopleRowAmount = 0;
  if (nationConfig.people.political !== undefined) {
    politicalPeopleRowAmount =
      nationConfig.people.political.length % 2 === 0
        ? Math.floor(nationConfig.landmarks.length / 2)
        : Math.floor(nationConfig.landmarks.length / 2) + 1;
  }

  return (
    <>
      <Box
        backgroundImage={nationConfig.backgroundImage}
        backgroundPosition={"center"}
        backgroundSize="cover"
        backgroundRepeat={"no-repeat"}
        backgroundAttachment={"fixed"}
        style={{ backgroundOrigin: "border-box" }}
      >
        <NavBar {...navBarProps} />
        <HeroSectionText {...heroSectionProps} />
        <Flex justifyContent={"center"}>
          <Divider size="xl" width={"85%"} border={"1px"}></Divider>
        </Flex>
        <HighlightCardSection {...landmarkSectionProps} />
        <Flex justifyContent={"center"} mt={"5vh"}>
          <Divider size="xl" width={"85%"} border={"1px"}></Divider>
        </Flex>
        <Flex w={"100%"} margin={"auto"} pt={"5vh"}>
          <Box margin="auto" borderRadius="md" boxShadow="md" w={"80%"}>
            <Tabs variant="soft-rounded" colorScheme="cyan">
              <TabList mb={5} justifyContent="center" color={"black"}>
                <Tab color={"black"}>Overview</Tab>
                <Tab>History</Tab>
                <Tab>Culture</Tab>
                <Tab>Geography</Tab>
                <Tab>Politics</Tab>
              </TabList>
              <TabPanels color={nationConfig.textColor}>
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
                  <Card borderRadius={"3xl"}>
                    <Box p={8} rounded="md" shadow="md" mx="auto">
                      <Stack spacing={6}>
                        <Text fontSize="lg">
                          The Holy Earis Empire is a theocratic monarchy, where
                          the Emperor or Empress is both the secular ruler and
                          the high priest of the Church of Earis,
                        </Text>
                        <Divider />
                        <Flex w={"100%"} justify={"center"}>
                          <Heading as="h1" size={"2xl"}>
                            Key Figures
                          </Heading>
                        </Flex>
                        <Grid
                          templateColumns={`repeat(2, 1fr)`}
                          templateRows={`repeat(${politicalPeopleRowAmount}, 1fr)`}
                          gap={4}
                        >
                          {nationConfig.people.political?.map((person) => (
                            <OnPagePersonSection {...person} />
                          ))}
                        </Grid>
                      </Stack>
                    </Box>
                  </Card>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default IndividualNationPage;
