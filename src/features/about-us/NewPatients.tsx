import React from "react";
import Image from "next/image";
import { service_detail } from "@/assets/images";
import { Stack } from "@chakra-ui/react";

export const NewPatients = () => {
  return (
    <Stack className="items-center  ">
      <h1 className="my-5 text-center">
        We’re welcoming new patients <br />
        <span>and can’t wait to meet you.</span>
      </h1>
      <h1 className="my-3">
        Come Experience Care with a Personal Touch!😄
      </h1>
      <Image src={service_detail} alt="Care with a Personal Touch" />
    </Stack>
  );
};
