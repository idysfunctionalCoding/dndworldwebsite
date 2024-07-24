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

const IndividualNationPage = (props: NationPageConfig) => {
  const heroSectionProps: HeroSectionProps = {
    titleText: props.name,
    subtitleText: props.heroText,
    textColor: props.textColor,
  };

  const landmarkSectionProps: HighlightCardSectionProps = {
    textColor: props.textColor,
    landmarks: props.landmarks,
    columnAmount: Math.min(4, props.landmarks.length),
    rowAmount:
      props.landmarks.length % 4 === 0
        ? Math.floor(props.landmarks.length / 4)
        : Math.floor(props.landmarks.length / 4) + 1,
  };

  const navBarProps: NavBarProps = {
    textColor: props.textColor,
  };

  return (
    <>
      <Box
        backgroundImage={props.backgroundImage}
        width={"100%"}
        height={"100%"}
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
              <TabPanels color={"black"}>
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
                        {props.people.political?.map((person) => (
                          <OnPagePersonSection {...person} />
                        ))}
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
