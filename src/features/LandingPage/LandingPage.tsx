import React, { useEffect } from "react";
import Script from "next/script";
// import "aos/dist/aos.css";
import LandingPageVideo from "./LandingPageVideo";
import LocationSection from "./LocationSection";

// import AOS from "aos";
import { Box, Divider, Flex, useMediaQuery } from "@chakra-ui/react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ImageGallery from "../Image-gallery";
import PatientReviews from "../patient-reviews";
import ServiceSection from "../services-section";
import SmileGallery from "../smile-gallery";
import MissionComponent from "../mission";
import WhyChooseUsComponent from "../why-choose-us";
import Map from "@/components/common/Map";

const LandingPage = () => {
  const [isLaptop] = useMediaQuery("(max-width: 1000px)");
  useEffect(() => {
    window.addEventListener("scroll", scrollToTop);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", scrollToTop);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 10,
      behavior: "smooth"
    });
  };

  return (
    <Box position={"relative"}>
      <Navbar />
      <LandingPageVideo />
      <LocationSection />
      <ImageGallery />
      <MissionComponent />
      <ServiceSection />
      <WhyChooseUsComponent />
      <SmileGallery />
      <Divider />
      <PatientReviews />
      <Flex id="home-location" flexWrap={isLaptop ? "wrap" : "nowrap"} gap={8} px={8}>
          <Map
            mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.409163489179!2d-77.0414735!3d38.8995466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7c2a1c9be4f%3A0x6e4e3b4cf4df9d76!2s1747%20Pennsylvania%20Ave%20NW%2C%20Washington%2C%20DC%2020006%2C%20USA!5e0!3m2!1sen!2sus!4v1696094570920!5m2!1sen!2sus
"
          />
          <Map
            mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.189827641261!2d-77.2698365!3d38.7932255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64a1b300c64f1%3A0xb83ff2c0bb7d5473!2s9570%20Burke%20Rd%20Unit%20A%2C%20Burke%2C%20VA%2022015%2C%20USA!5e0!3m2!1sen!2sus!4v1696094570920!5m2!1sen!2sus
"
          />
        </Flex>
      <Footer />
    </Box>
  );
};

export default LandingPage;
