import React from "react";

interface Properties {
  width?: number;
  height?: number;
  color?: string;
  style?: React.CSSProperties;
}

const ProfileIconComponent = ({
  width = 90,
  height = 90,
  color = "black",
  style
}: Properties) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill={color}
      width={width}
      height={height}
      style={
        style
          ? style
          : { borderRadius: "50%", border: "1px white solid", padding: "5px" }
      }
    >
      <path d="M256 256c70.692 0 128-57.308 128-128S326.692 0 256 0 128 57.308 128 128s57.308 128 128 128zm0 48c-79.529 0-240 40.526-240 120v88c0 11.046 8.954 20 20 20h440c11.046 0 20-8.954 20-20v-88c0-79.474-160.471-120-240-120z" />
    </svg>
  );
};

export default ProfileIconComponent;
