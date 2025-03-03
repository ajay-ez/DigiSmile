import DigiLayout from "@/components/Layout";
import { HEADER_HEIGHT } from "@/utils/constant";
import { Box } from "@chakra-ui/react";

const LocationComponent = () => {
  return (
    <DigiLayout>
      <Box
        height={"60vh"}
        width={"100%"}
        position={"absolute"}
        mt={HEADER_HEIGHT}
        className="locations-bg-image"
      >
        Locations
      </Box>
    </DigiLayout>
  );
};

export default LocationComponent;
