import React from 'react';
import { Box, Flex, Heading, Spacer, Button, useColorMode } from '@chakra-ui/react';
import DrawerExample from '../sidemenu/menu';
import { ColorModeSwitcher } from '../../ColorModeSwitcher'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="1rem"
      borderBottom="1px"
      borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
    >
    <DrawerExample></DrawerExample>
      <Heading as="h1" size="lg" paddingLeft={"2%"}>
        Parker's DnD World Website!
      </Heading>

      <Spacer />

      <Box>
        <Button variant="link" mr={4}>
          Home
        </Button>
        <Button variant="link">
          About
        </Button>
        {/* Add more navigation buttons as needed */}
      </Box>

      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};

export default Header;