import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  IconButton,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const DrawerExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const nations = [
    {
      name: "Holy Earis Empire",
      stateName: "holyEarisEmpire",
    },
    {
      name: "Dominion of Xaendriad",
      stateName: "dominionOfXaendriad",
    },
  ];

  return (
    <>
      <IconButton
        aria-label="SidebarMenu"
        icon={<IoIosMenu />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>What info do you want?</DrawerHeader>
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    World Info
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Accordion>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Nations
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    {nations.map((nation) => (
                      <AccordionPanel>
                        <Link
                          to="/nationinfo"
                          state={{ nation: `${nation.stateName}` }}
                        >
                          <Button
                            colorScheme="teal"
                            variant="link"
                            onClick={onClose}
                          >
                            {nation.name}
                          </Button>
                        </Link>
                      </AccordionPanel>
                    ))}
                  </AccordionItem>
                </Accordion>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Organizations
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Button variant="link">Dominon of death</Button>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Maps
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Button variant="link">Dominon of death</Button>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Documents
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Link to="/articles">
                  <Button colorScheme="teal" variant="link" onClick={onClose}>
                    Articles
                  </Button>
                </Link>
              </AccordionPanel>
              <AccordionPanel pb={4}>
                <Link to="/sessionrecaps">
                  <Button colorScheme="teal" variant="link" onClick={onClose}>
                    Session Recaps
                  </Button>
                </Link>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerExample;
