import React from "react";
import {
  Box,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <Box px={4} justifyContent={"center"} h={"7vh"} color={"white"} zIndex={1000}>
      <Flex h={16} alignItems="center" justifyContent="center">
        <HStack spacing={8} alignItems="center">
          <HStack
            as="nav"
            spacing={4}
            display={{ base: "none", md: "flex" }}
          >
            <Menu>
              <MenuButton as={Button} variant={"ghost"} color={"rgb(159, 150, 170)"}>
                World
              </MenuButton>
              <MenuList zIndex={1000}>
                <MenuItem>History</MenuItem>
                <MenuItem>Geography</MenuItem>
                <MenuItem>Culture</MenuItem>
                <Link to="/nations">
                <MenuItem>Nations</MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton as={Button} variant={"ghost"} color={"rgb(159, 150, 170)"}>
                Organizations
              </MenuButton>
              <MenuList zIndex={1000}>
                <MenuItem>Guilds</MenuItem>
                <MenuItem>Factions</MenuItem>
                <MenuItem>Governments</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton as={Button} variant={"ghost"} color={"rgb(159, 150, 170)"}>
                Documents
              </MenuButton>
              <MenuList zIndex={1000}>
                <MenuItem>Player Notes</MenuItem>
                <MenuItem>Campaign Logs</MenuItem>
                <MenuItem>Rulebooks</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton as={Button} variant={"ghost"} color={"rgb(159, 150, 170)"}>
                Maps
              </MenuButton>
              <MenuList zIndex={1000}>
                <Link to="/worldmap">
                <MenuItem>World Map</MenuItem>
                </Link>
                <MenuItem>City Maps</MenuItem>
                <MenuItem>Dungeon Maps</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};