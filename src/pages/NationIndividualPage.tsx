import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Stack,
  VStack,
  useBreakpointValue,
  Tab,
  TabPanels,
  TabList,
  TabPanel,
  Tabs,
  Divider,
  Grid,
} from "@chakra-ui/react";
import { NavBar } from "../components/header/headerv2";
import { nationPageConfig } from "../config/nationColorConfig";
import { LandmarkCard } from "../components/landmarkcard/landmarkCard";

const IndividualNationPage = (props: nationPageConfig) => {
  const landmark = {
    heading: "name",
    text: "The Kingdom of Eldoria is a realm of ancient magic and noble knights. Its lush forests and towering castles are home to many legendary creatures and brave adventurers.",
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
        <NavBar></NavBar>
        <Flex
          justifyContent={"left"}
          alignItems={"center"}
          alignContent={"left"}
          h={"99vh"}
        >
          <VStack w={"full"} justify={"left"} align={"left"} pl={"10%"}>
            <Stack maxW={"2xl"} spacing={6}>
              <Heading as="h1" size="4xl">
                {props.name}
              </Heading>
              <Text
                color={"rgb(249, 249, 255)"}
                fontWeight={500}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
                size="lg"
              >
                {props.heroText}
              </Text>
            </Stack>
          </VStack>
        </Flex>
      </Box>
      <Box pt={'3vh'} backgroundColor={props.backgroundColorStatic}>
        <Flex justifyContent={"center"} align={'center'}>
          <Heading>
            Signifigant Landmarks
          </Heading>
        </Flex>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={4}
          ml={"auto"}
          mr={"auto"}
          width={"80%"}
          mt={"3vh"}
          h={"100%"}
        >
          <LandmarkCard {...landmark} />
          <LandmarkCard {...landmark} />
          <LandmarkCard {...landmark} />
          <LandmarkCard {...landmark} />
        </Grid>
      </Box>
      <Flex w={"100%"} margin={"auto"} pt={"5vh"} backgroundColor={props.backgroundColorStatic}>
        <Box margin="auto" borderRadius="md" boxShadow="md" w={"80%"}>
          <Tabs variant="soft-rounded">
            <TabList mb={5} justifyContent="center" color={props.highlightColor}>
              <Tab color={props.color}>Overview</Tab>
              <Tab color={props.color}>History</Tab>
              <Tab color={props.color}>Culture</Tab>
              <Tab color={props.color}>Geography</Tab>
              <Tab color={props.color}>Politics</Tab>
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
    </>
  );
};

export default IndividualNationPage;
