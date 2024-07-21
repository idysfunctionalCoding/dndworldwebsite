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
  IconButton,
  Popover,
  PopoverTrigger,
  textDecoration,
  PopoverContent,
  Stack,
  Text,
  useColorModeValue,
  MenuGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <Box px={4} justifyContent={"center"} h={"7vh"} color={"white"}>
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
              <MenuList>
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
              <MenuList>
                <MenuItem>Guilds</MenuItem>
                <MenuItem>Factions</MenuItem>
                <MenuItem>Governments</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton as={Button} variant={"ghost"} color={"rgb(159, 150, 170)"}>
                Documents
              </MenuButton>
              <MenuList>
                <MenuItem>Player Notes</MenuItem>
                <MenuItem>Campaign Logs</MenuItem>
                <MenuItem>Rulebooks</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton as={Button} variant={"ghost"} color={"rgb(159, 150, 170)"}>
                Maps
              </MenuButton>
              <MenuList>
                <MenuItem>World Map</MenuItem>
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
