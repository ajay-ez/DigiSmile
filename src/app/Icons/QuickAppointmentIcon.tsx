import React from "react";

interface Properties {
  width?: number;
  height?: number;
  color?: string;
  style?: React.CSSProperties;
}

const QuickAppointmentIconComponent = ({
  width = 90,
  height = 90,
  color = "black",
  style
}: Properties) => {
  return (
    // <svg
    //       fill={color}
    //   width={width}
    //   height={height}
    //   style={
    //     style
    //       ? style
    //       : { borderRadius: "50%", border: "1px white solid", padding: "5px" }
    //   }
    //  viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><defs></defs><line className="cls-1" x1="6.27" y1="14.86" x2="13.91" y2="14.86" /><line className="cls-1" x1="6.27" y1="11.05" x2="13.91" y2="11.05" /><line className="cls-1" x1="6.27" y1="18.68" x2="13.91" y2="18.68" /><polygon className="cls-1" points="16.77 8.18 16.77 22.5 3.41 22.5 3.41 5.32 13.91 5.32 16.77 8.18" /><polyline className="cls-1" points="16.77 18.68 20.59 18.68 20.59 4.36 17.73 1.5 7.23 1.5 7.23 5.32" /></svg>
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
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 3V6M17 3V6M7.10002 20C7.56329 17.7178 9.58104 16 12 16C14.419 16 16.4367 17.7178 16.9 20M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21ZM14 11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default QuickAppointmentIconComponent;
