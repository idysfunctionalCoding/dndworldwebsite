import {
  Grid,
  GridItem,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";
import { articleCardsInformation } from "../config/articlesConfig";

const ArticlesPage = () => {
  return (
    <>
      <Heading
        as="h1"
        size="3xl"
        width="100%"
        justifyContent="center"
        display={"flex"}
        paddingTop={"2%"}
      >
        Articles About The World
      </Heading>
      <Grid
        h="200px"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        margin={"auto"}
        width={"80%"}
        paddingTop={"3%"}
      >
        {articleCardsInformation.map((cardInfo) => (
          <Card
            _hover={{ boxShadow: "1px 3px 1px #9E9E9E" }}
            key={cardInfo.articleName}
            size={"md"}
          >
            <CardHeader key={`${cardInfo.articleName}Header`}>
              <Heading size="md">{cardInfo.articleName}</Heading>
            </CardHeader>
            <CardBody key={`${cardInfo.articleName}Body`}>
              <Text>{cardInfo.articleDescription}</Text>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default ArticlesPage;
