import React from "react";

interface Properties {
  width?: number;
  height?: number;
  color?: string;
  style?: React.CSSProperties;
}

const ServiceIconComponent = ({
  width = 90,
  height = 90,
  color = "black",
  style
}: Properties) => {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32" enable-background="new 0 0 32 32"
      fill={color}
      width={width}
      height={height}
      style={
        style
          ? style
          : { borderRadius: "50%", border: "1px white solid", padding: "5px" }
      }
    >
      <circle fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" cx="11.9" cy="20.1" r="5.8" />
      <line fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" x1="3.9" y1="23.4" x2="6.6" y2="22.3" />
      <line fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" x1="17.2" y1="17.9" x2="19.9" y2="16.8" />
      <line fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" x1="8.6" y1="12.1" x2="9.7" y2="14.8" />
      <line fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" x1="14.1" y1="25.4" x2="15.2" y2="28.1" />
      <line fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" x1="3.9" y1="16.8" x2="6.6" y2="17.9" />
      <line fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" x1="17.2" y1="22.3" x2="19.9" y2="23.4" />
      <line fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" x1="15.2" y1="12.1" x2="14.1" y2="14.8" />
      <line fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" x1="9.7" y1="25.4" x2="8.6" y2="28.1" />
      <circle fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" cx="22.5" cy="9.5" r="4.7" />
      <line fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" x1="17.5" y1="14.5" x2="19.2" y2="12.8" />
      <line fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" x1="25.8" y1="6.2" x2="27.4" y2="4.6" />
      <line fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" x1="17.5" y1="4.6" x2="19.2" y2="6.2" />
      <line fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" x1="25.8" y1="12.8" x2="27.4" y2="14.5" />
      <line fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" x1="15.5" y1="9.5" x2="17.8" y2="9.5" />
      <line fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" x1="27.2" y1="9.5" x2="29.5" y2="9.5" />
      <line fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" x1="22.5" y1="2.5" x2="22.5" y2="4.8" />
      <line fill="none" stroke={color} strokeWidth="2" strokeMiterlimit="10" x1="22.5" y1="14.2" x2="22.5" y2="16.5" />
    </svg>
  );
};

export default ServiceIconComponent;
