import React from "react";

interface Properties {
  width?: number;
  height?: number;
  color?: string;
}

const DownloadIconComponent = ({
  width = 40,
  height = 40,
  color = "black"
}: Properties) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
    >
      <rect width="48" height="48" rx="12" fill="white" />
      <path
        d="M24 12V30M24 30L18 24M24 30L30 24"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="12" y="32" width="24" height="4" rx="2" fill="#000" />
    </svg>
  );
};

export default DownloadIconComponent;
