import {
    Flex,
    Heading,
    Text,
    Stack,
    VStack,
    useBreakpointValue,
  } from "@chakra-ui/react";

export interface HeroSectionProps {
    titleText: string;
    subtitleText: string;
    textColor: string;
}


export const HeroSectionText: React.FC<HeroSectionProps> = (props: HeroSectionProps) => {
    return (
        <Flex
          justifyContent={"left"}
          alignItems={"center"}
          alignContent={"left"}
          h={"99vh"}
        >
          <VStack w={"full"} justify={"left"} align={"left"} pl={"10%"}>
            <Stack maxW={"2xl"} spacing={6}>
              <Heading as="h1" size="4xl" color={props.textColor}>
                {props.titleText}
              </Heading>
              <Text
                color={props.textColor}
                fontWeight={500}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
                size="lg"
              >
                {props.subtitleText}
              </Text>
            </Stack>
          </VStack>
        </Flex>
    )
}