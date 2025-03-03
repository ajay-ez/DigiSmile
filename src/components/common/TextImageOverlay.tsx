import { service_detail } from "@/assets/images";
import React from "react";
import Image from "next/image";

interface TextImageOverlayProps {
  title: string;
}
export const TextImageOverlay = ({ title }: TextImageOverlayProps) => {
  return (
    <div className="relative w-full h-36">
      <Image
        src={service_detail}
        alt="Background Image"
        layout="fill"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-4xl font-poppins">{title}</h1>
      </div>
    </div>
  );
};
