import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Map from "@/components/common/Map";
import { Box } from "@chakra-ui/react";
const ContactUs = () => {
  return (
    <div className="font-poppins">
      <h1 className="text-center p-4 font-bold font-poppins">
        Where we are located
      </h1>

      <div className=" bg-digiLightBlue rounded-xl m-3">
        <h1 className="text-center py-8">Smile Experts Dental Clinic</h1>
        <div className="flex p-3 flex-col gap-8 md:flex-row justify-around">
          <Box className="flex flex-col justify-center gap-4 md:w-[40%]">
            <Map
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.409163489179!2d-77.0414735!3d38.8995466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7c2a1c9be4f%3A0x6e4e3b4cf4df9d76!2s1747%20Pennsylvania%20Ave%20NW%2C%20Washington%2C%20DC%2020006%2C%20USA!5e0!3m2!1sen!2sus!4v1696094570920!5m2!1sen!2sus
"
            />

            <Box className="flex items-center gap-2">
              <LocationOnIcon />
              <h1 className="font-poppins">
                Washington D.C.1747 Pennsylvania Aven NWSuite 100 Washington, DC
                20006
                <br /> (202) 545-6336
              </h1>
            </Box>
          </Box>
          <Box className="flex flex-col justify-center gap-4 md:w-[40%]">
            <Map
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.189827641261!2d-77.2698365!3d38.7932255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64a1b300c64f1%3A0xb83ff2c0bb7d5473!2s9570%20Burke%20Rd%20Unit%20A%2C%20Burke%2C%20VA%2022015%2C%20USA!5e0!3m2!1sen!2sus!4v1696094570920!5m2!1sen!2sus
"
            />
            <Box className="flex items-center gap-2">
              <LocationOnIcon />
              <h1 className="font-poppins">
                Burke, VA 9570 Burke Road Unit A Burke, VA 22015 <br /> (571)
                374-8000
              </h1>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
