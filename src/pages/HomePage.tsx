import {
  Text,
  Button,
  Stack,
  Flex,
  useBreakpointValue,
  VStack,
  Box,
} from "@chakra-ui/react";
import { NavBar, NavBarProps } from "../components/header/navbar";

const HomePage = () => {

  const navBarProps: NavBarProps = {
    textColor: "rgb(159, 150, 170)"

  }

  return (
    <Box
      backgroundImage={`url(./dndworldwebsite/images/landingPageBackground.png)`}
      backgroundSize={"cover"}
      w={"full"}
      h={"100vh"}
    >
      <NavBar {...navBarProps}/>
      <Flex justifyContent={'center'} alignItems={'center'} alignContent={'center'} h={'93vh'}>
        <VStack
          w={"full"}
          justify={"center"}
          align={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Stack maxW={"2xl"} spacing={6}>
            <Text
              color={"rgb(249, 249, 255)"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor
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
    </Box>
  );
};

export default HomePage;
