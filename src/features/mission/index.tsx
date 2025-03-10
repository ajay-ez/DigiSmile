import { Box, Flex, Text } from "@chakra-ui/react";

const MissionComponent = () => {
  return (
    <Box width={"100%"} bg={"#F4DFCF"} color={"#000"}>
      <Flex
        className="responsive-dental-section"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex gap={2} className="responsive-dental-heading">
          <Text whiteSpace={"nowrap"} as={"h1"} fontWeight={600}>
            Dental services
          </Text>
          <Text as={"h1"} fontWeight={600}>
            with a smile
          </Text>
        </Flex>
        <Text as={"h4"} fontSize={"21px !important"}>
          Time for a dental cleaning? Need a crown, root canal, or dental
          implant? Dr. Andleeb Mahmood, and our team of orthodontists, oral
          surgeons, and periodontists offer all the dental services you could
          ever need to keep your family healthy and smiling.
        </Text>
      </Flex>
    </Box>
  );
};

export default MissionComponent;
