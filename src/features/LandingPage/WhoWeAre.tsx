import { dr_image } from "@/assets/images";
import React from "react";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="flex gap-2 flex-col-reverse md:flex-row   mt-3 items-center justify-center bg-blue-white-gradient">
      <div className="p-3 md:w-[50%] rounded-lg">
        <h1 className="text-left mb-5">
          Dr. Andleeb Mahmood
        </h1>
        <h1 className="text-left">
          Dr. Andleeb Mahmood, a dentist with over 15 years of experience,
          treats patients like family, providing personalized, high-quality
          dental treatment. With three offices in DMV, she offers routine
          check-ups, cleanings, dental implants, and cosmetic dentistry. With
          extensive training and a focus on patient-centric care, her practice
          aims to transform lives.
        </h1>
        <h1 className="text-left my-8">
          Values and Mission
        </h1>
        <h1 className="text-left">
          Dr. Andleeb Mahmood is a visionary leader in dentistry, dedicated to
          patient care, continuous learning, and community involvement. Her
          mission is to enhance lives one smile at a time with personalized
          care. At Smile Experts Dental, we uphold her values with state of the
          art technology and a compassionate approach, ensuring the highest
          standard of dental excellence.
        </h1>
      </div>
      <div>
        <Image src={dr_image} alt="d-1" className="w-[400px] h-[500px]" />
      </div>
    </div>
  );
};

export default WhoWeAre;
