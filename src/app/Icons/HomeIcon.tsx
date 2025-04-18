import React from "react";

interface Properties {
  width?: number;
  height?: number;
  color?: string;
  style?: React.CSSProperties;
}

const HomeIconComponent = ({
  width = 90,
  height = 90,
  color = "white",
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
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
        fill={color}
      />
    </svg>
  );
};

export default HomeIconComponent;
