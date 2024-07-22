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
} from "@chakra-ui/react";
import { NavBar } from "../components/header/navbar";
import { nationPageConfig } from "../config/nationColorConfig";
import {
  HeroSectionProps,
  HeroSectionText,
} from "../components/herosection/herosectiontext";
import {
  LandmarkCardSection,
  LandmarkCardSectionProps,
} from "../components/landmarkcards/landmarkCardSection";

const IndividualNationPage = (props: nationPageConfig) => {
  const heroSectionProps: HeroSectionProps = {
    titleText: props.name,
    subtitleText: props.heroText,
    textColor: props.textColor,
  };

  const landmarkSectionProps: LandmarkCardSectionProps = {
    textColor: props.textColor,
    landmarks: props.landmarks,
    columnAmount: Math.min(4, props.landmarks.length),
    rowAmount:
      props.landmarks.length % 4 === 0
        ? Math.floor(props.landmarks.length / 4)
        : Math.floor(props.landmarks.length / 4) + 1,
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
      >
        <NavBar />
        <HeroSectionText {...heroSectionProps} />
        <Flex justifyContent={"center"}>
          <Divider size="xl" width={"85%"} border={"1px"}></Divider>
        </Flex>
        <LandmarkCardSection {...landmarkSectionProps} />
        <Flex justifyContent={"center"} mt={'5vh'}>
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
      </Box>
    </>
  );
};

export default IndividualNationPage;
