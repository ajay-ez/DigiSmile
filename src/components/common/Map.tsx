import React from "react";
interface MapProps {
  mapUrl: string;
}
const Map = ({ mapUrl }: MapProps) => {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
