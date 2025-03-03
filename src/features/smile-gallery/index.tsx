import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import SmileCard from "./SmileCard";
import {
  teeth1,
  teeth2,
  teeth3,
  teeth4,
  teeth5,
  teeth6
} from "@/assets/images";

const SmileGallery = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  return (
    <Box className="home-section">
      <Flex
        flexDir={"column"}
        className="responsive-section"
        alignItems={"center"}
        justifyContent={"center"}
        gap={10}
      >
        <Text as={"h1"} color={"brand.100"} fontWeight={900}>
          Smile Gallery
        </Text>
        <Flex
          gap={10}
          justifyContent={"space-between"}
          flexDir={isMobile ? "column" : "row"}
          width={"100%"}
        >
          <SmileCard key={1} beforeImage={teeth1} afterImage={teeth2} />
          <SmileCard key={2} beforeImage={teeth3} afterImage={teeth4} />
          <SmileCard key={3} beforeImage={teeth5} afterImage={teeth6} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SmileGallery;
