import React, { useEffect } from "react";
import Script from "next/script";
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
      {/* <Script
        src="https://offsiteschedule.zocdoc.com/plugin/embed"
        strategy="lazyOnload"
      /> */}
      <Navbar />
      <LandingPageVideo />
      <LocationSection />
      {/* <Box as="div" maxW="container.xl" mx="auto" py={8} px={4}>
        <div>
          <a
            style={{ display: "block" }}
            href="https://www.zocdoc.com/practice/smile-experts-dental-131235?lock=true&isNewPatient=false&referrerType=widget"
            className="zd-plugin"
            data-type="book-button"
            data-practice-id="131235"
            title="Smile Experts Dental"
          >
            <img
              src="https://offsiteSchedule.zocdoc.com/images/remote/zd_bookonline_162x48.png?type=bobjs&monolith_provider_id=131235&practice_id=pt_IGpaOILjskSmF1JxJP2wmh"
              alt="Smile Experts Dental"
              title="Smile Experts Dental"
              style={{ border: 0 }}
            />
          </a>
        </div>
      </Box> */}
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
