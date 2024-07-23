import React from "react";
import Timeline, { TimelineProps } from "../components/timeline/timeline";
import { NavBar, NavBarProps } from "../components/header/navbar";
import { Flex, Heading, Text } from "@chakra-ui/react";

const WorldHistoryPage: React.FC<TimelineProps> = (props: TimelineProps) => {
  // URL to the image
  const navBarProps: NavBarProps = {
    textColor: "white",
  };

  return (
    <>
      <NavBar {...navBarProps} />
      <Flex justifyContent={"center"} align={"center"} h={'50vh'} flexDirection={'column'}>
        <Heading pt={'3%'} pb={3}> The Major Event Timeline</Heading>
        <Text>Click on the cards in the timeline to learn more about each event!</Text>
        <Timeline {...props} />
      </Flex>
    </>
  );
};

export default WorldHistoryPage;
