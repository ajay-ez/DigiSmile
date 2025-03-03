import {
  teeth_1,
  teeth_2,
  teeth_3,
  teeth_4,
  teeth_5,
  teeth_6,
  userImage1
} from "@/assets/images";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  const [isTablet] = useMediaQuery("(max-width: 1000px)");
  const [isMobile] = useMediaQuery("(max-width: 680px)");

  const leftItems = [
    {
      id: 1,
      heading: "Root Canals",
      image: teeth_5,
      description:
        "Save your tooth with a root canal! Remove infection, decay, and preserve your smile."
    },
    {
      id: 2,
      heading: "Exam & Cleaning",
      image: teeth_1,
      description:
        "Regular checkups ensure optimal oral health, detect issues early, and keep your smile fresh."
    },
    {
      id: 3,
      heading: "Fillings",
      image: teeth_3,
      description:
        "Restore your teeth with durable fillings, stopping decay, and preventing further damage to your smile."
    }
  ];

  const rightItems = [
    {
      id: 1,
      heading: "Dentures",
      image: teeth_4,
      description:
        "Custom dentures offer a natural look and comfortable fit, replacing missing teeth and restoring confidence."
    },
    {
      id: 2,
      heading: "Teeth Whitening",
      image: teeth_2,
      description:
        "Achieve a bright, radiant smile by removing stains from smoking, coffee, and daily habits."
    },
    {
      id: 3,
      heading: "Orthodontics",
      image: teeth_6,
      description:
        "Straighten your teeth with braces or aligners, achieving a beautiful, aligned smile over time."
    }
  ];

  return (
    <Box
      className="service-section"
      background={"#F7F7F7"}
      color={"brand.100"}
      position={"relative"}
    >
      <Flex
        flexDir={"column"}
        className="responsive-service-section"
        width={"100%"}
        textAlign={"center"}
        zIndex={3}
      >
        <Box textAlign={"center"} width={"100%"}>
          {/* <Text as={"h4"}>Our services</Text> */}
          <Text as={"h1"}>Comprehensive Services for Optimal Oral Health.</Text>
        </Box>
        <Flex
          paddingTop={"4rem"}
          gap={10}
          flexWrap={isMobile ? "wrap" : "nowrap"}
        >
          <Flex
            width={isTablet ? "100%" : "33%"}
            flexDir={"column"}
            gap={isMobile ? 10 : 20}
          >
            {leftItems.map((item, index) => (
              <ServiceCard
                key={item.id}
                heading={item.heading}
                image={item.image}
                description={item.description}
                alignment={"left"}
                isLeftCenter={index === 1}
              />
            ))}
          </Flex>
          {!isTablet && (
            <Image
              src={userImage1}
              alt=""
              style={{ width: "26%", zIndex: 2 }}
            ></Image>
          )}
          <Flex
            width={isTablet ? "100%" : "33%"}
            flexDir={"column"}
            gap={isMobile ? 10 : 20}
          >
            {rightItems.map((item, index) => (
              <ServiceCard
                key={item.id}
                heading={item.heading}
                image={item.image}
                description={item.description}
                alignment={"right"}
                isRightCenter={index === 1}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ServiceSection;
