import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "./patient-reviews.scss";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import {
  review1,
  review2,
  review3,
  review4,
  review5,
  reviewer1
} from "@/assets/images";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useCallback, useState } from "react";

const ReviewCard = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  // const testimonials = [
  //   {
  //     text: "I went in for an exam and cleaning, and I was so impressed with the attention to detail. The dentist was thorough, kind, and explained everything in a way that made sense. It’s rare to find a place where you feel genuinely cared for. I’ll definitely return for all my dental needs!",
  //     name: "Rajesh Kumar",
  //     profession: "Software Engineer",
  //     image: review4
  //   },
  //   {
  //     text: "The team at this dental clinic is absolutely incredible! I came in for a root canal and was honestly a bit nervous, but they explained everything thoroughly and made me feel at ease. The process was painless, and the results were outstanding. Their professionalism and care really stood out. ",
  //     name: "Michael Brown",
  //     profession: "Teacher",
  //     image: review1
  //   },
  //   {
  //     text: "I couldn’t be happier with the teeth whitening service! My teeth are brighter, and I’ve been getting compliments on my smile ever since. The clinic is spotless, and the staff are so welcoming. I loved how easy it was to book through their app. It's refreshing to find a place that combines technology with excellent service.",
  //     name: "Sarah Lee",
  //     profession: "Graphic Designer",
  //     image: review2
  //   },
  //   {
  //     text: "The orthodontic services here are top-notch. After two years of braces, I now have the perfect smile, and it’s all thanks to this amazing team. They were with me every step of the way, ensuring I was comfortable and informed. I couldn’t be more grateful. The results are truly life-changing!",
  //     name: "Emily Carter",
  //     profession: "Student",
  //     image: review3
  //   },
  //   {
  //     text: "I recently got a set of dentures here, and the experience was fantastic. The dentist took the time to ensure they fit perfectly and even gave me tips on how to care for them. It’s clear they prioritize their patients' comfort and satisfaction. I’m beyond grateful for their exceptional care and professionalism.",
  //     name: "Sophia",
  //     profession: "Designer",
  //     image: review5
  //   }
  // ];

  const testimonials = [
    {
      text: "Great Customer Service, Fast & Friendly, Dentist & Assistant was very patient and kind, Quick Appointments. Was in & out within a hour and 1/2. Also, they have a massage chair that tickles your feet & a kids playroom while you wait 😂 I love it! …",
      name: "Sherrie Simmons",
      profession: "Software Engineer",
      image: review4
    },
    {
      text: "They were incredibly careful and kind throughout my visit, making me feel at ease. What I appreciated most was how straightforward they were—they quickly identified the issue and provided effective solutions without unnecessary delays. The whole process was smooth and efficient. I highly recommend them to anyone looking for professional and compassionate dental care!",
      name: "Laura Ramirez",
      profession: "Teacher",
      image: reviewer1
    },
    {
      text: "I couldn’t be happier with the teeth whitening service! My teeth are brighter, and I’ve been getting compliments on my smile ever since. The clinic is spotless, and the staff are so welcoming. I loved how easy it was to book through their app. It's refreshing to find a place that combines technology with excellent service.",
      name: "Sarah Lee",
      profession: "Graphic Designer",
      image: review2
    },
    {
      text: "The orthodontic services here are top-notch. After two years of braces, I now have the perfect smile, and it’s all thanks to this amazing team. They were with me every step of the way, ensuring I was comfortable and informed. I couldn’t be more grateful. The results are truly life-changing!",
      name: "Emily Carter",
      profession: "Student",
      image: review3
    },
    {
      text: "I recently got a set of dentures here, and the experience was fantastic. The dentist took the time to ensure they fit perfectly and even gave me tips on how to care for them. It’s clear they prioritize their patients' comfort and satisfaction. I’m beyond grateful for their exceptional care and professionalism.",
      name: "Sophia",
      profession: "Designer",
      image: review5
    }
  ];

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      loop={true}
      onSwiper={setSwiperRef}
      breakpoints={{
        640: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <>
              <Flex
                alignItems={"center"}
                gap={10}
                _hover={{ ".nav-buttons": { opacity: 1 } }}
              >
                {isActive && (
                  <GrLinkPrevious
                    style={{
                      transition: "all .3s ease-in"
                    }}
                    className="nav-buttons"
                    opacity={0}
                    onClick={handlePrevious}
                    size={40}
                    color="#963f36"
                    cursor={"pointer"}
                  />
                )}
                <Image
                  className="slide-image"
                  src={testimonial.image}
                  alt=""
                  style={{
                    height: "120px",
                    width: "120px"
                  }}
                ></Image>
                {isActive && (
                  <GrLinkNext
                    style={{
                      transition: "all .3s ease-in"
                    }}
                    className="nav-buttons"
                    opacity={0}
                    onClick={handleNext}
                    size={40}
                    color="#963f36"
                    cursor={"pointer"}
                  />
                )}
              </Flex>
              <Flex className="slide-text" flexDir={"column"}>
                <Text as={"h5"}>{testimonial.text}</Text>
                <Text as={"h4"} mt={4} fontWeight={900}>
                  {testimonial.name}
                </Text>
                <Text as={"h6"}>{testimonial.profession}</Text>
              </Flex>
            </>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewCard;
