import { logo } from "@/assets/images";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface Properties {
  alignment: String;
  isLeftCenter?: boolean;
  isRightCenter?: boolean;
  heading: String;
  image: StaticImageData;
  description: String;
}

const ServiceCard = ({
  alignment,
  isLeftCenter,
  isRightCenter,
  description,
  image,
  heading
}: Properties) => {
  const [isLaptop] = useMediaQuery("(max-width: 1315px)");
  const [isTablet] = useMediaQuery("(max-width: 1000px)");
  const [isMobile] = useMediaQuery("(max-width: 680px)");

  return (
    <Flex
      justifyContent={alignment === "left" ? "end" : "start"}
      gap={6}
      margin={
        isTablet
          ? "0"
          : isLeftCenter
            ? "0 4rem 0 0 "
            : isRightCenter
              ? "0 0 0 4rem"
              : ""
      }
    >
      <Image
        src={image}
        alt=""
        style={{
          borderRadius: "50%",
          border: "1px solid black",
          height: `${isLaptop ? "60px" : "100px"}`,
          width: `${isLaptop ? "60px" : "100px"}`,
          padding: "8px"
        }}
      ></Image>
      <Box
        width={
          isMobile
            ? "100%"
            : alignment === "left"
              ? isLaptop
                ? "200px"
                : "250px"
              : isLaptop
                ? "200px"
                : "300px"
        }
        textAlign={isTablet ? "start" : alignment === "left" ? "end" : "start"}
      >
        <Text as={isLaptop ? "h3" : "h2"}>{heading}</Text>
        <Text as={isLaptop ? "h6" : "h5"}>{description}</Text>
      </Box>
    </Flex>
  );
};

export default ServiceCard;
