import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { sliderImage } from "@/assets/images";
import "./smilecard.scss";
import { Box, Flex, Text } from "@chakra-ui/react";

interface Properties {
  beforeImage: string;
  afterImage: string;
}

const SmileCard = ({ beforeImage, afterImage }: Properties) => {
  const [isResizing, setIsResizing] = useState(false);
  const topImageRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useRef<HTMLDivElement | null>(null);

  const setPositioning = useCallback((x: number) => {
    if (!topImageRef.current || !handleRef.current) return;

    const { left, width } = topImageRef.current.getBoundingClientRect();

    if (x >= left && x <= width + left) {
      const percentage = ((x - left) / width) * 100;
      handleRef.current.style.left = `${percentage}%`;
      topImageRef.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    }
  }, []);

  const handleResize = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (e instanceof MouseEvent) {
        setPositioning(e.clientX);
      } else if (e.touches[0]?.clientX) {
        setPositioning(e.touches[0].clientX);
      }
    },
    [setPositioning]
  );

  useEffect(() => {
    if (!topImageRef.current || !handleRef.current) return;

    const { left, width } = topImageRef.current.getBoundingClientRect();
    const handleWidth = handleRef.current.offsetWidth;

    setPositioning(width / 4 + left - handleWidth / 2);
  }, [setPositioning]);

  const handleResizeEnd = useCallback(() => {
    setIsResizing(false);

    window.removeEventListener("mousemove", handleResize);
    window.removeEventListener("touchmove", handleResize);
    window.removeEventListener("mouseup", handleResizeEnd);
    window.removeEventListener("touchend", handleResizeEnd);
  }, [handleResize]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!handleRef.current || !handleRef.current.offsetParent) return;

      const { offsetLeft } = handleRef.current;
      const { offsetLeft: parentOffsetLeft } = handleRef.current
        .offsetParent as HTMLElement;

      if (e.code === "ArrowLeft") {
        setPositioning(offsetLeft + parentOffsetLeft - 10);
      }

      if (e.code === "ArrowRight") {
        setPositioning(offsetLeft + parentOffsetLeft + 10);
      }
    },
    [setPositioning]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleResize);
      window.addEventListener("touchmove", handleResize);
      window.addEventListener("mouseup", handleResizeEnd);
      window.addEventListener("touchend", handleResizeEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleResize);
      window.removeEventListener("touchmove", handleResize);
      window.removeEventListener("mouseup", handleResizeEnd);
      window.removeEventListener("touchend", handleResizeEnd);
    };
  }, [isResizing, handleResize, handleResizeEnd]);

  return (
    <Box className="comparison-container">
      <div className="comparison-slider">
        <div
          ref={handleRef}
          className="handle"
          onMouseDown={() => setIsResizing(true)}
          onTouchStart={() => setIsResizing(true)}
        >
          <div className="handle-shadow"></div>
          <Image
            className="handle-image"
            src={sliderImage}
            draggable="true"
            alt=""
          />
        </div>
        <div ref={topImageRef} className="comparison-item top">
          <Image
            className="comparison-image"
            draggable="false"
            src={afterImage}
            alt={""}
          />
        </div>
        <div className="comparison-item bottom">
          <Image
            className="comparison-image"
            draggable="false"
            src={beforeImage}
            alt={""}
          />
        </div>
      </div>
    </Box>
  );
};

export default SmileCard;

// import React, { useState, useRef, useCallback, useEffect } from "react";
// import Image from "next/image";
// import { sliderImage } from "@/assets/images";
// import "./smilecard.scss";
// import { Box, Divider, Flex, Text } from "@chakra-ui/react";

// interface Properties {
//   beforeImage: string;
//   afterImage: string;
// }

// const SmileCard = ({ beforeImage, afterImage }: Properties) => {
//   const topImageRef = useRef<HTMLDivElement | null>(null);
//   const handleRef = useRef<HTMLDivElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const setPositioning = useCallback((x: number) => {
//     if (!topImageRef.current || !handleRef.current || !containerRef.current)
//       return;

//     const { left, width } = containerRef.current.getBoundingClientRect();

//     if (x >= left && x <= left + width) {
//       const percentage = ((x - left) / width) * 100;
//       handleRef.current.style.left = `${percentage}%`;
//       topImageRef.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
//     }
//   }, []);

//   const handleMouseMove = useCallback(
//     (e: React.MouseEvent) => {
//       setPositioning(e.clientX);
//     },
//     [setPositioning]
//   );

//   return (
//     <Box
//       className="comparison-container"
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//     >
//       <div className="comparison-slider">
//         <Flex className="comparison-overlay">
//           <Text className="overlay-text">Before</Text>
//           <Text className="overlay-text">After</Text>
//         </Flex>
//         <div ref={handleRef} className="handle">
//           <div className="handle-shadow"></div>
//           <Image
//             className="handle-image"
//             src={sliderImage}
//             draggable="true"
//             alt=""
//           />
//         </div>
//         <div ref={topImageRef} className="comparison-item top">
//           <Image
//             className="comparison-image"
//             draggable="false"
//             src={afterImage}
//             alt={""}
//           />
//         </div>
//         <div className="comparison-item">
//           <Image
//             className="comparison-image"
//             draggable="false"
//             src={beforeImage}
//             alt={""}
//           />
//         </div>
//       </div>
//     </Box>
//   );
// };

// export default SmileCard;
