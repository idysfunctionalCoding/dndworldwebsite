import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Stack,
  VStack,
  HStack,
  Link,
  IconButton,
  useBreakpointValue,
  Tab,
  TabPanels,
  TabList,
  TabPanel,
  Tabs,
  Divider,
} from "@chakra-ui/react";
import { NavBar } from "../components/header/headerv2";

const FantasyUI = () => {
  return (
    <Box
      backgroundImage={"url(/images/earisBackGroundImage.png)"}
      width={"100%"}
      height={"100%"}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
    >
      <NavBar></NavBar>
      <Flex
        justifyContent={"left"}
        alignItems={"center"}
        alignContent={"left"}
        h={"75vh"}
      >
        <VStack w={"full"} justify={"left"} align={"left"} pl={"10%"}>
          <Stack maxW={"2xl"} spacing={6}>
            <Text
              color={"rgb(249, 249, 255)"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              The Goddess' Light Will Protect Us On Our Holy Conquest
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Show me more
              </Button>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                Show me more
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Flex justifyContent={'center'}>
        <Divider size='xl' width={'75%'} border={'1px'}></Divider>
      </Flex>
      <Flex w={"80%"} margin={"auto"}>
        <Box p={5} margin="auto" borderRadius="md" boxShadow="md" w={"100%"}>
          <Tabs variant="soft-rounded" colorScheme="teal">
            <TabList mb={5} justifyContent="center">
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
    </Box>
  );
};

export default FantasyUI;
