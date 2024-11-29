"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const PatientReviews = () => {
  const testimonials = [
    {
      text: "Swiper carousel is super easy to use. I love its responsiveness and features!",
      name: "John Doe",
      role: "Patient",
      image: "/images/testimonial1.jpg" // Replace with your image path
    },
    {
      text: "Excellent services and beautiful interface. Highly recommend!",
      name: "Jane Smith",
      role: "Patient",
      image: "/images/testimonial2.jpg" // Replace with your image path
    },
    {
      text: "This tool made my website look professional and modern. Kudos to the team!",
      name: "Sam Wilson",
      role: "Patient",
      image: "/images/testimonial3.jpg" // Replace with your image path
    },
    {
      text: "Swiper carousel is super easy to use. I love its responsiveness and features!",
      name: "John Doe",
      role: "Patient",
      image: "/images/testimonial1.jpg" // Replace with your image path
    },
    {
      text: "Excellent services and beautiful interface. Highly recommend!",
      name: "Jane Smith",
      role: "Patient",
      image: "/images/testimonial2.jpg" // Replace with your image path
    },
    {
      text: "This tool made my website look professional and modern. Kudos to the team!",
      name: "Sam Wilson",
      role: "Patient",
      image: "/images/testimonial3.jpg" // Replace with your image path
    }
  ];

  return (
    <section className="testimonials-section">
      <div>
        <h2 className="text-center mb-5">What Say Our Patients!</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name}`}
                      className="testimonial-img"
                      width={50}
                      height={50}
                    />
                    <div>
                      <h5 className="testimonial-name">{testimonial.name}</h5>
                      <span className="testimonial-role">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PatientReviews;

// import React from "react";
// import dynamic from "next/dynamic";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

// // Dynamically import OwlCarousel (to avoid SSR issues)
// const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

// const PatientReviews = () => {
//   const options = {
//     items: 3, // Show three items
//     loop: true,
//     center: true, // Center the active item
//     margin: 10,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     autoplayHoverPause: true,
//     smartSpeed: 800,
//     responsive: {
//       0: {
//         items: 1 // Show 1 item for small screens
//       },
//       768: {
//         items: 3 // Show 3 items for medium+ screens
//       }
//     }
//   };

//   return (
//     <div className={"carouselWrapper"}>
//       <OwlCarousel className="owl-theme" {...options}>
//         <div className={"item"}>Item 1</div>
//         <div className={"item"}>Item 2</div>
//         <div className={"item"}>Item 3</div>
//         <div className={"item"}>Item 4</div>
//         <div className={"item"}>Item 5</div>
//       </OwlCarousel>
//     </div>
//   );
// };

// export default PatientReviews;