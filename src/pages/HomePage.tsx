import {
  Text,
  Button,
  Stack,
  Flex,
  useBreakpointValue,
  VStack,
  Box,
} from "@chakra-ui/react";
import Header from "../components/header/header";
import { NavBar } from "../components/header/headerv2";

const HomePage = () => {
  const headerStyle = {
    backgroundImage: `url(/images/landingPageBackground.png)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <Box
      backgroundImage={`url(/images/landingPageBackground.png)`}
      backgroundSize={"cover"}
      w={"full"}
      h={"100vh"}
    >
      <NavBar />
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

  return (
    <div style={headerStyle}>
      <Flex
        backgroundSize={"cover"}
        backgroundColor={"rgba(0, 0, 0, 0.5)"}
        backgroundPosition={"center center"}
        minHeight={"max-content"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"center"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              align={"center"}
            >
              Welecome To Parker's DM Website Where I Hold All Information For
              My Players
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
    </div>
  );
};

export default HomePage;
