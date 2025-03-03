import Image from "next/image";
import React from "react";

interface Props {
  header: string;
  desc: string;
  asset: any;
  videoUrl: string;
  index: number;
}

const ClinicServiceDetail = ({
  header,
  desc,
  asset,
  index
  // videoUrl
}: Props) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl  shadow-lg  
        ${index % 2 === 0 ? "flex-col-reverse md:flex-row" : "flex-col-reverse md:flex-row-reverse"}
        flex justify-between items-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 gap-4
      `}
    >
      <div className="md:w-[45%] relative p-4 space-y-4  rounded-lg shadow-md backdrop-blur-md   px-8 lg:mx-16">
        <h1 className="font-bold text-blue-900">{header}</h1>
        <h1 className="text-gray-700 leading-relaxed">{desc}</h1>
      </div>

      <div className="md:w-[50%] p-4 flex justify-center relative">
        <div className="rounded-xl overflow-hidden shadow-md w-[480px] h-[250px]">
          <Image
            src={asset}
            alt={header}
            className="transition-transform duration-500 ease-in-out hover:scale-110 rounded-lg w-full h-full "
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Image Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent    opacity-100 transition-opacity duration-300"></div> */}
      </div>
    </div>
  );
};

export default ClinicServiceDetail;
