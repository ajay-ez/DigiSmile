import React from "react";

interface Properties {
  width?: number;
  height?: number;
  color?: string;
  style?: React.CSSProperties;
}

const AppointmentHistoryIconComponent = ({
  width = 100,
  height = 100,
  color = "black",
  style
}: Properties) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      style={
        style
          ? style
          : { borderRadius: "50%", border: "1px white solid", padding: "5px" }
      }
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 6V5h-3v2h-2V5H9v2H7V5H4v4h16zm0 2H4v8h16v-8zM6 13h5v4H6v-4z" />
      </g>
    </svg>
  );
};

export default AppointmentHistoryIconComponent;
