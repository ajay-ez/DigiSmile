import { service_detail } from "@/assets/images";
import React from "react";
import Image from "next/image";

interface TextImageOverlayProps {
  title: string;
}
export const TextImageOverlay = ({ title }: TextImageOverlayProps) => {
  return (
    <div className="relative w-full h-64">
      <Image
        src={service_detail}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-digiDarkBlue text-3xl font-bold">{title}</h1>
      </div>
    </div>
  );
};
