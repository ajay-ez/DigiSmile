import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  gallery_1,
  gallery_2,
  gallery_3,
  gallery_4,
  gallery_5,
  gallery_6,
  gallery_7,
  gallery_8
} from "@/assets/images";

const images = [
  { id: 1, src: gallery_1, alt: "Image 1" },
  { id: 2, src: gallery_2, alt: "Image 2" },
  { id: 3, src: gallery_3, alt: "Image 3" },
  { id: 4, src: gallery_4, alt: "Image 4" },
  { id: 5, src: gallery_5, alt: "Image 5" },
  { id: 6, src: gallery_6, alt: "Image 6" },
  { id: 7, src: gallery_7, alt: "Image 7" },
  { id: 8, src: gallery_8, alt: "Image 8" }
];

export const settings = {
  dots: true,
  infinite: true,
  speed: 4000, // Adjusts the speed of slide transition
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0, // No delay between slides
  cssEase: "linear", // Ensures continuous, smooth scrolling
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } }
  ]
};

const Gallery = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className=" font-bold text-center mb-6">Image Gallery</h1>
      <Slider {...settings} className="relative">
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="p-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="rounded-lg shadow-lg h-[400px] w-[400px]"
            />
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
