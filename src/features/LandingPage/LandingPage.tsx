import React, { useEffect } from "react";
// import "aos/dist/aos.css";
import LandingPageVideo from "./LandingPageVideo";
import LocationSection from "./LocationSection";

// import AOS from "aos";
import { Box, Divider } from "@chakra-ui/react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ImageGallery from "../Image-gallery";
import PatientReviews from "../patient-reviews";
import ServiceSection from "../services-section";
import SmileGallery from "../smile-gallery";
import MissionComponent from "../mission";
import WhyChooseUsComponent from "../why-choose-us";

const LandingPage = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: false
  //   });
  // }, []);

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
      <Footer />
    </Box>
  );
};

export default LandingPage;
