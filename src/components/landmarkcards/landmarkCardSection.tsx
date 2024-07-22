import { Box, Flex, Heading, Grid } from "@chakra-ui/react"
import { LandmarkCard, LandmarkCardProps } from "./landmarkCard"

export interface LandmarkCardSectionProps {
    textColor: string;
    columnAmount: number;
    rowAmount: number;
    landmarks: LandmarkCardProps[];
}

export const LandmarkCardSection: React.FC<LandmarkCardSectionProps> = (props: LandmarkCardSectionProps) => {
    return (
        <Box pt={"3vh"}>
          <Flex justifyContent={"center"} align={"center"}>
            <Heading color={props.textColor}>Signifigant Landmarks</Heading>
          </Flex>
          <Grid
            templateColumns={`repeat(${props.columnAmount}, 1fr)`}
            templateRows={`repeat(${props.rowAmount}, 1fr)`}
            gap={4}
            ml={"auto"}
            mr={"auto"}
            width={"80%"}
            mt={"3vh"}
            h={"100%"}
          >
            {props.landmarks.map((landmark) => (
                <LandmarkCard {...landmark} />
            ))}
          </Grid>
        </Box>
    )
}