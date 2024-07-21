import React from "react";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import DrawerExample from "../sidemenu/menu";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Link } from "react-router-dom";

const Header = () => {
  // Maybe add later?
  // <Heading as="h1" size="lg" paddingLeft={"2%"}>
  // Parker's DnD World Website!
  // </Heading>

  return (
    <Flex as="header" align="center" justify="space-between" padding="1rem">
      <DrawerExample></DrawerExample>

      <Spacer />

      <Box>
        <Link to="/">
          <Button variant="link" mr={4}>
            Home
          </Button>
        </Link>
        <Button variant="link">About</Button>
        {/* Add more navigation buttons as needed */}
      </Box>

      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};

export default Header;
