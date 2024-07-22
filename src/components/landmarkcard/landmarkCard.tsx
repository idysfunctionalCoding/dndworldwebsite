import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";

export interface LandmarkCardProps {
  heading: string;
  text: string;
}

const CustomCard = (props: BoxProps) => {
    return (
      <Box
        position="relative"
        borderRadius="lg"
        overflow="hidden"
        fontFamily="'MedievalSharp', cursive"
        width="15vw"
        height="40vh"
        {...props}
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgImage="url('/images/worldmap.png')" // Replace with your image path
          bgSize="cover"
          bgPosition="center"
          zIndex="1"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgGradient="linear(to-b, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 1) 100%)"
          opacity="0.5"
          zIndex="2"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgGradient="linear(to-b, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0))"
          zIndex="2"
        />
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          textAlign="center"
          p={4}
          color="white"
          zIndex="3"
        >
          <Heading as="h2" size="lg" mb={2}>
            Kingdom of Eldoria
          </Heading>
          <Text>
            The Kingdom of Eldoria is a realm of ancient magic and noble knights.
          </Text>
        </Box>
      </Box>
    );
  };

export const LandmarkCard = (props: LandmarkCardProps) => {
  return (
    <Box p={4} display="flex" justifyContent="center" alignItems="center">
      <CustomCard>
        <Heading as="h2" size="lg">
          {props.heading}
        </Heading>
        <Text>{props.text}</Text>
      </CustomCard>
    </Box>
  );
};
