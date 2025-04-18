import React from "react";

interface Properties {
  width?: number;
  height?: number;
  color?: string;
  style?: React.CSSProperties;
}

const AppointmentIconComponent = ({
  width = 90,
  height = 90,
  color = "black",
  style
}: Properties) => {
  return (
    <svg
    fill={color}
      width={width}
      height={height}
      style={
        style
          ? style
          : { borderRadius: "50%", border: "1px white solid", padding: "5px" }
      }
      viewBox="0 0 24 24"
      data-name="Layer 1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <path d="M18,5V3a1,1,0,0,0-2,0V5H8V3A1,1,0,0,0,6,3V5H2V21H22V5Zm2,14H4V7H20ZM9,10H7v2H9Zm0,4H7v2H9Zm8-4H11v2h6Zm0,4H11v2h6Z" />
    </svg>
  );
};

export default AppointmentIconComponent;
