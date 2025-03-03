import React from "react";

interface Properties {
  width?: number;
  height?: number;
  color?: string;
  style?: React.CSSProperties;
}

const UpcomingAppointmentIconComponent = ({
  width = 100,
  height = 100,
  color = "black",
  style
}: Properties) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="3"
      stroke="#000"
      fill={color}
      style={
        style
          ? style
          : { borderRadius: "50%", border: "1px white solid", padding: "3px" }
      }
    >
      <rect
        x="9.59"
        y="9.59"
        width="44.82"
        height="44.82"
        rx="2.5"
        fill={color}
        stroke={color}
      />
      <line x1="9.59" y1="20.59" x2="54.41" y2="20.59" />
      <line x1="19.7" y1="9.59" x2="19.7" y2="4.59" />
      <line x1="43.66" y1="9.59" x2="43.66" y2="4.59" />
      <rect
        x="16.14"
        y="27.92"
        width="6.15"
        height="6.15"
        fill="#000"
        stroke={color}
      />
      <rect
        x="28.78"
        y="27.92"
        width="6.15"
        height="6.15"
        fill="#000"
        stroke={color}
      />
      <rect
        x="41.26"
        y="27.92"
        width="6.15"
        height="6.15"
        fill="#000"
        stroke={color}
      />
      <rect
        x="16.36"
        y="39.68"
        width="6.15"
        height="6.15"
        fill="#000"
        stroke={color}
      />
      <rect
        x="29.01"
        y="39.68"
        width="6.15"
        height="6.15"
        fill="#000"
        stroke={color}
      />
      <rect
        x="41.49"
        y="39.68"
        width="6.15"
        height="6.15"
        fill="#000"
        stroke={color}
      />
    </svg>
  );
};

export default UpcomingAppointmentIconComponent;
