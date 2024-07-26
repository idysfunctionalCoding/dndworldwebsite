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
                <Tab color={nationConfig.textColor}>Overview</Tab>
                <Tab color={nationConfig.textColor}>History</Tab>
                <Tab color={nationConfig.textColor}>Culture</Tab>
                <Tab color={nationConfig.textColor}>Geography</Tab>
                <Tab color={nationConfig.textColor}>Politics</Tab>
              </TabList>
              <TabPanels color={nationConfig.textColor}>
                <TabPanel>
                  <Card borderRadius={"3xl"}>
                    <Box p={8} rounded="md" shadow="md" mx="auto">
                      <Stack spacing={6}>
                        <Heading margin={"auto"}>Overview Information</Heading>
                        <Divider />
                        <Stack pl={5} fontSize={"xl"}>
                          <Text>
                            <strong>Government Type: </strong>
                            {nationConfig.sectionText?.overview?.governmentType}
                          </Text>
                          <Text>
                            <strong>Geography: </strong>
                            {nationConfig.sectionText?.overview?.geography}
                          </Text>
                          <Text>
                            <strong>Climate: </strong>
                            {nationConfig.sectionText?.overview?.climate}
                          </Text>
                          <Text>
                            <strong>Population: </strong>~
                            {nationConfig.sectionText?.overview?.population}
                          </Text>
                          <Text>
                            <strong>Major Gods: </strong>
                            {nationConfig.sectionText?.overview?.governmentType
                              .length === 0
                              ? "None"
                              : nationConfig.sectionText?.overview?.majorGods.join(
                                  ","
                                )}
                          </Text>
                        </Stack>
                        <Divider />
                        <Text fontSize="lg" p={5} whiteSpace="pre-line">
                          {nationConfig.sectionText?.overview?.paragraph}
                        </Text>
                      </Stack>
                    </Box>
                  </Card>
                </TabPanel>
                <TabPanel>
                  <Card borderRadius={"3xl"}>
                    <Box p={8} rounded="md" shadow="md" mx="auto">
                      <Stack spacing={6}>
                        <Heading margin={"auto"}>History Information</Heading>
                        <Divider />
                        <Text fontSize="lg" p={5} whiteSpace="pre-line">
                          {nationConfig.sectionText?.history?.paragraph}
                        </Text>
                        <Divider />
                        <Heading margin={"auto"} fontSize={"3xl"}>
                          Major Events
                        </Heading>
                        {nationConfig.sectionText?.history?.majorEvents.map(
                          (entry) => (
                            <Box pl={5}>
                              <Heading fontSize={"xl"}>{entry.name}</Heading>
                              <Text fontSize="lg" pt={2}>
                                {entry.text}
                              </Text>
                              <Divider p={2} />
                            </Box>
                          )
                        )}
                      </Stack>
                    </Box>
                  </Card>
                </TabPanel>
                <TabPanel>
                  <Card borderRadius={"3xl"}>
                    <Box p={8} rounded="md" shadow="md" mx="auto">
                      <Stack spacing={6}>
                        <Heading margin={"auto"}>Cultural Overview</Heading>
                        <Divider />
                        <Text fontSize="lg" p={5} whiteSpace="pre-line">
                          {nationConfig.sectionText?.culture?.paragraph}
                        </Text>
                      </Stack>
                    </Box>
                  </Card>
                </TabPanel>
                <TabPanel>
                  <Card borderRadius={"3xl"}>
                    <Box p={8} rounded="md" shadow="md" mx="auto">
                      <Stack spacing={6}>
                        <Heading margin={"auto"}>Geographical Overview</Heading>
                        <Divider />
                        <Text fontSize="lg" p={5} whiteSpace="pre-line">
                          {nationConfig.sectionText?.geography?.paragraph}
                        </Text>
                      </Stack>
                    </Box>
                  </Card>
                </TabPanel>
                <TabPanel>
                  <Card borderRadius={"3xl"}>
                    <Box p={8} rounded="md" shadow="md" mx="auto">
                      <Stack spacing={6}>
                        <Heading margin={"auto"}>Political Overview</Heading>
                        <Text fontSize="lg" whiteSpace="pre-line">
                          {nationConfig.sectionText?.political?.paragraph}
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
