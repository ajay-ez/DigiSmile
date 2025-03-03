// pages/index.tsx
import React from "react";
import Slider from "react-slick";
import TestimonialReview from "@/components/common/TestimonialReview";
import {
  testimonial_1,
  testimonial_2,
  testimonial_3,
  testimonial_4
} from "@/assets/images";
import { Box } from "@chakra-ui/react";

const testimonials = [
  {
    username: "Florie Johnson",
    userImage: testimonial_1,
    profession: "Software Engineer",
    review:
      "I went for the first time today and I feel I have found my dentist for the rest of my life. Dr.Mahmood is brilliant, kind, creative and she communicates so that you understand All of your options. She told me about things no one had ever told me I could do. If you desire to go to The Best you Owe yourself Smiles Experts Dental!"
  },
  {
    username: "Dick Braun",
    userImage: testimonial_2,
    profession: "Graphic Designer",
    review:
      "Dr. Hartman really knows what she is doing. She is a gifted and extremely caring dentist who takes the time to understand you, and to thoroughly explain everything about what she is finding and what she proposes to do. Her caring and thorough approach is demonstrated also by everyone else in the office. I feel so very fortunate to have her and her team as my dental support."
  },
  {
    username: "Ponu Poppy",
    userImage: testimonial_3,
    profession: "Marketing Manager",
    review:
      "First appointment for my son with special needs, staff and doctor herself were very professional and skilled, Dr. Andleeb Mehmood is so thorough and informative, and lets us know every step of the way what’s going on that really helped ease my son’s anxieties, she is very patient and very calming, as well. HIGHLY RECOMMENDED!"
  },
  {
    username: "Emil Abbasov",
    userImage: testimonial_4,
    profession: "Financial Advisor",
    review:
      "Hands down, this is the most welcoming dentist office I've seen in the DMV area, particularly in DC! I mean, since when dentist office started to provide an inhouse playground for kids and a massage chair for adults? Just see the pics!! And the doc, Dr Mahmood herself, so kind and patient with my kids. True professional! She does accept Medicaid clients, FYI!"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } }
  ]
};

const Testimonial: React.FC = () => {
  return (
    <div className="bg-blue-white-gradient py-8">
      <Box className="flex justify-center">
        <h1 className="text-center p-3 font-bold">
          What our patient&apos;s say
        </h1>
      </Box>

      <div className="p-4">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-2">
              <TestimonialReview
                username={testimonial.username}
                userImage={testimonial.userImage}
                profession={testimonial.profession}
                review={testimonial.review}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
