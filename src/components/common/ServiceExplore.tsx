import { Box, Button } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Properties {
  title: string;
  image: StaticImageData;
  navLink?: string;
  alt: string;
}
const ServiceExplore = ({ title, image, alt }: Properties) => {
  return (
    <Box className="border-l border-t rounded-tl-[80px] rounded-br-[80px] bg-digiLightBlue">
      <div className="flex justify-center">
        <Box
          className=" border-black border-[1px] p-2 rounded-3xl bg-digiWhiteGray m-2"
          width={"60%"}
        >
          <h1 className=" text-red-500 font-bold font-fredoka text-center">
            {title}
          </h1>
        </Box>
      </div>
      <Box width={"95%"} className="flex p-2">
        <Image className="rounded-lg" src={image} alt={alt} />
      </Box>
      <Button className="bg-orange-gradient italic text-black  text-2xl py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 p-2 m-4 font-bangers">
        Explore
      </Button>
    </Box>
  );
};

export default ServiceExplore;
