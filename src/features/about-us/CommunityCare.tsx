import { community_care } from "@/assets/images";
import { Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

export const CommunityCare = () => {
  return (
    <div>
      <Typography variant="h1" className="my-8 text-center mb-16 font-bold">
        Excellence in Dentistry and Community Care
      </Typography>
      <div className="flex flex-col sm:flex-row gap-4 mt-3 items-center justify-center p-3 ">
        <div className="bg-white p-3 sm:w-[30%] rounded-lg">
          <Image src={community_care} alt="d-1" />
        </div>
        <div className="sm:w-[50%]">
          <Typography variant="subtitle1" className="text-left mb-5">
            Empowering Patients with Knowledge and Care:
          </Typography>
          <Typography variant="body1" className="text-left">
            We extend beyond clinical practice to include continuous learning
            and community engagement. She regularly attends conferences,
            contributes to dental research, and participates in charitable
            activities, providing free dental care to underserved populations.
            Her passion for patient education ensures that every patient is
            well-informed about their dental health.
          </Typography>
        </div>
      </div>
    </div>
  );
};
