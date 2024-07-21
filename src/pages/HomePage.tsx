import {
  Text,
  Button,
  Stack,
  Flex,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

const HomePage = () => {
  const headerStyle = {
    backgroundImage: `url(/images/worldmap.png)`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div style={headerStyle}>
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundSize={"cover"}
        backgroundColor={"rgba(0, 0, 0, 0.5)"}
        backgroundPosition={"center center"}
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
