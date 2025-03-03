import React from "react";

interface Properties {
  width?: number;
  height?: number;
  color?: string;
  style?: React.CSSProperties;
}

const ChangePasswordIconComponent = ({
  width = 90,
  height = 90,
  color = "black",
  style
}: Properties) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      style={
        style
          ? style
          : { borderRadius: "50%", border: "1px white solid", padding: "5px" }
      }
    >
      <defs></defs>
      <path d="M24,25.28a3.26,3.26,0,0,0-1.64,6.07V36h3.32V31.35a3.28,3.28,0,0,0,1.61-2.8v0A3.27,3.27,0,0,0,24,25.28Z" />
      <rect x="7.38" y="17.77" width="33.23" height="25.73" rx="4.32" />
      <path d="M13.35,17.77V15.16a10.66,10.66,0,0,1,21.32,0v2.61" />
    </svg>
  );
};

export default ChangePasswordIconComponent;
