import { Button, Flex, Text } from "@chakra-ui/react";
import "./Card.scss";

const AppointmentCard = () => {
  return (
    <Flex
      width={"100%"}
      position={"relative"}
      className="calender-card-container"
    >
      <Flex
        className="calender-card"
        border={"2px #0b6aee solid"}
        width={"100%"}
        color={"red"}
        borderRadius={"xs"}
        padding={4}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text as={"h4"} color={"#0b6aee"} fontWeight={900}>
          10:00am
        </Text>
      </Flex>
      <Flex
        className="calender-card-hidden"
        transition="all .2s ease"
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={3}
        position={"absolute"}
        left={"20%"}
        background={"#fff"}
        opacity={0}
      >
        <Button
          borderRadius={"xs"}
          height={"100%"}
          p={6}
          backgroundColor={"#476788"}
          color={"#fff"}
          fontSize={"1rem"}
          fontWeight={800}
          w={"100%"}
          h={"100%"}
          _hover={{ bg: "#476788" }}
        >
          11:00am
        </Button>
        <Button
          borderRadius={"xs"}
          height={"100%"}
          p={6}
          backgroundColor={"#006bff"}
          color={"#fff"}
          w={"100%"}
          h={"100%"}
          _hover={{ bg: "#006bff" }}
        >
          Confirm
        </Button>
      </Flex>
    </Flex>
  );
};

export default AppointmentCard;
