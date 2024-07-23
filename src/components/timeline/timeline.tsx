import React, { useState } from "react";
import {
  HStack,
  Text,
  Flex,
  Card,
  Divider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Heading
} from "@chakra-ui/react";

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState<TimelineEvent>();

  const handleSettingContent = (data: TimelineEvent) => {
    setData(data);
    onOpen();
  };

  return (
    <>
      <Flex w={"80%"} overflowX={"scroll"} h={"50vh"} pl={10} pr={10}>
        <HStack>
          {events.map((event, index) => (
            <>
              <Card
                key={index}
                position="relative"
                size={"sm"}
                w={"sm"}
                p={4}
                borderRadius="md"
                shadow="md"
                _hover={{
                  transform: "scale(1.2)",
                  transitionDuration: "300ms",
                }}
                onClick={() => handleSettingContent(event)}
              >
                <Text fontWeight="bold">{event.date}</Text>
                <Text fontWeight="bold">{event.title}</Text>
                <Text>{event.description}</Text>
              </Card>
              {index < events.length - 1 && <Divider w={"5%"} />}
            </>
          ))}
        </HStack>
      </Flex>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Date: {data?.date}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading fontWeight="bold">{data?.title}</Heading>
            <Text>{data?.description}</Text>
            <Text>Other Content Eventually Goes Here</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Timeline;
