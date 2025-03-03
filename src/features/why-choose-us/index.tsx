import { Box, Flex, Text } from "@chakra-ui/react";

const WhyChooseUsComponent = () => {
  return (
    <Box className="home-section" background={"brand.400"} color={"brand.100"}>
      <Flex
        flexDir={"column"}
        className="responsive-section"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text as={"h1"} fontWeight={900}>
          Why Choose US?
        </Text>
        <Text textAlign={"center"} as={"h4"} mt={2}>
          Dr. Andleeb Mahmood is a visionary leader in dentistry, dedicated to
          patient care, continuous learning, and community involvement. Her
          mission is to enhance lives one smile at a time with personalized
          care. At Smile Experts Dental, we uphold her values with state of the
          art technology and a compassionate approach, ensuring the highest
          standard of dental excellence.
        </Text>
      </Flex>
    </Box>
  );
};

export default WhyChooseUsComponent;
