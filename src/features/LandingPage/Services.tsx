import React from "react";

import projectConstants from "@/projectContants";
import ServiceCard from "../services/ServiceCard";
import Slider from "react-slick";
import { settings } from "./Gallery";

const Services = () => {
  return (
    <div className="bg-blue-white-gradient pb-8">
      <h1 className="text-center p-3 font-bold">
        Our Services
      </h1>
      <h1 className="text-center m-2 font-poppins ">
        Comprehensive Services for Optimal Oral Health.
      </h1>
      <div className="   p-4">
        <Slider {...settings} className="relative">
          {projectConstants.clinicService.map((service) => (
            <div key={service.alt} className="p-4">
              <ServiceCard
                title={service.title}
                desc={service.desc}
                image={service.image}
                alt={service.alt}
              />
            </div>
          ))}
        </Slider>
      </div>
      <h1 className="font-semibold text-center mt-24">
        Our state-of-the-art facilities are equipped with the latest technology
        to <br />
        ensure optimal care for both children and adults
      </h1>
    </div>
  );
};

export default Services;
