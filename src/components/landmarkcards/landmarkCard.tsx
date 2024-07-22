import { Box, Heading, Text } from "@chakra-ui/react";

export interface LandmarkCardProps {
  heading: string;
  text: string;
}

const CustomCard = (props: LandmarkCardProps) => {
  return (
    <Box
      position="relative"
      borderRadius="lg"
      overflow="hidden"
      fontFamily="'MedievalSharp', cursive"
      width="15vw"
      height="40vh"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgImage="url('/images/worldmap.png')"
        bgSize="cover"
        bgPosition="center"
        zIndex="1"
      />
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        textAlign="center"
        bgGradient="linear(to-t, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))"
        p={4}
        color="white"
        zIndex="3"
      >
        <Heading as="h2" size="lg" mb={2} color={"black"}>
          {props.heading}
        </Heading>
        <Text>
          {props.text}
        </Text>
      </Box>
    </Box>
  );
};

export const LandmarkCard = (props: LandmarkCardProps) => {
  return (
    <Box
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      _hover={{ transform: "scale(1.2)", transitionDuration: "500ms" }}
    >
      <CustomCard {...props} />
    </Box>
  );
};
