import "swiper/css";
import "swiper/css/navigation";

import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import {
  gallery_1,
  gallery_2,
  gallery_3,
  gallery_5,
  gallery_6,
  gallery_8
} from "@/assets/images";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { useCallback, useState } from "react";

const images = [
  { id: 2, src: gallery_2, alt: "Image 2" },
  { id: 1, src: gallery_1, alt: "Image 1" },
  { id: 4, src: gallery_3, alt: "Image 3" },
  { id: 5, src: gallery_5, alt: "Image 5" },
  { id: 6, src: gallery_6, alt: "Image 6" },
  { id: 8, src: gallery_8, alt: "Image 8" }
];

const ImageGallery = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <Box className="home-section">
      <Flex
        flexDir={"column"}
        className="responsive-section"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text
          as={"h1"}
          color={"brand.100"}
          fontWeight={900}
          className="heading"
        >
          A place for transformation
        </Text>
        {isMobile ? (
          <Text as={"h3"} mt={4} color={"brand.100"} textAlign={"center"}>
            Receive exceptional dental care within spaces designed for personal
          </Text>
        ) : (
          <>
            <Text as={"h3"} color={"brand.100"} mt={4}>
              Receive exceptional dental care within spaces designed for
              personal
            </Text>
            <Text as={"h3"} color={"brand.100"}>
              rejuvenation and renewal
            </Text>
          </>
        )}
        <Flex flexDir={"column"} width={"100%"} mt={16}>
          <Swiper
            navigation={false}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
            style={{ width: "100%" }}
            onSwiper={setSwiperRef}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  style={{
                    borderRadius: "10px",
                    objectFit: "cover"
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Flex
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={8}
            position={"relative"}
            mt={8}
          >
            <div className="button-up" onClick={handlePrevious}></div>
            <div className="button-down" onClick={handleNext}></div>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ImageGallery;
