import {
  Heading,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { nationsInfo } from "../config/nationConfig";

const NationInfoPage = () => {
  const location = useLocation();
  const { nation } = location.state;

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
        {nationsInfo[nation as keyof typeof nationsInfo].name}
      </Heading>
    </>
  );
};

export default NationInfoPage;
