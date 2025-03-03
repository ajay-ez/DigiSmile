import { about_1, about_2, dr_image } from "@/assets/images";
import React from "react";
import Image from "next/image";
import { StarOutline } from "@mui/icons-material";

export const AboutDoctor = () => {
  return (
    <div className="flex flex-col-reverse gap-8 md:flex-row md:gap-2 mt-3 items-center justify-center">
      <div className="bg-white p-3 md:w-[50%] rounded-lg">
        <h1  className="text-left font-poppins mb-5">
          Dr. Andleeb Mahmood
        </h1>
        <h1  className="text-left">
          Dr. Andleeb Mahmood, a dentist with over 15 years of experience,
          treats patients like family, providing personalized, high-quality
          dental treatment. With three offices in DMV, she offers routine
          check-ups, cleanings, dental implants, and cosmetic dentistry. With
          extensive training and a focus on patient-centric care, her practice
          aims to transform lives.
        </h1>
        <div className="flex justify-around items-center mt-8">
          <div>
            <Image src={about_1} alt="about-1" />
            <h1 className="text-center font-bold text-2xl text-[#011632]">
              Happy Clients
            </h1>
            <h1 className="text-center font-bold text-2xl text-[#011632]">
              380
            </h1>
          </div>
          <div>
            <Image src={about_2} alt="about-2" />
            <h1 className="text-center font-bold text-2xl text-[#011632]">
              Reviews
            </h1>
            <h1 className="text-center font-bold text-2xl text-[#011632]">
              204/4.5
              <StarOutline className="text-yellow-400 mx-1 mb-1" />
            </h1>
          </div>
        </div>
      </div>
      <div>
        <Image src={dr_image} alt="d-1" className="w-[400px] h-[450px] mx-6" />
      </div>
    </div>
  );
};
