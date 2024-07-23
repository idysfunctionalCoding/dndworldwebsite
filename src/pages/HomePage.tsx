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
import homePageBackground from '../assets/landingPageBackground.png'

const HomePage = () => {

  const navBarProps: NavBarProps = {
    textColor: "rgb(159, 150, 170)"

  }

  return (
    <Box
      backgroundImage={homePageBackground}
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
              Welcome to my DM website which contains info for a fantasy world
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Me no work
              </Button>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                Me no work
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default HomePage;
