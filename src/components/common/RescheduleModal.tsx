"use client";

import {
  Button,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from "@chakra-ui/react";

interface Properties {
  onConfirm: () => void;
  onClose: () => void;
}

const RescheduleModalComponent = ({ onConfirm, onClose }: Properties) => {
  return (
    <Modal variant={"confirmationModal"} isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader as={"h3"}>Reschedule Booking</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Divider border={"1px #f3f3f3 solid"} width={"auto"} />
          <Text p={4} as={"h4"}>
            Are you sure you want to reschedule this booking?
          </Text>
          <Divider border={"1px #f3f3f3 solid"} width={"auto"} />
          <Flex p={4} justifyContent={"end"} gap={4}>
            <Button
              onClick={onClose}
              border={"1px solid"}
              borderColor={"brand.700"}
            >
              Cancel
            </Button>
            <Button
              backgroundColor={"brand.700"}
              _hover={{ backgroundColor: "brand.800" }}
              color={"white.900"}
              onClick={onConfirm}
            >
              Confirm
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RescheduleModalComponent;
