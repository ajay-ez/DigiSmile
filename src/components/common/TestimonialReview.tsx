// components/Testimonial.tsx
import React from "react";
import { StaticImageData } from "next/image";
import { Box, Card } from "@chakra-ui/react";

interface TestimonialProps {
  username: string;
  userImage: StaticImageData;
  profession: string;
  review: string;
}

const TestimonialReview: React.FC<TestimonialProps> = ({
  username,
  profession,
  review
}) => {
  return (
    <Card className="max-w-md mx-auto mb-4 shadow-lg rounded-2xl p-4 h-[350px]">
      {/* <CardContent> */}
        <Box className="flex items-center">
          {/* <Image
            src={userImage}
            alt={username}
            className="w-16 h-16 mr-4 rounded-full"
          /> */}
          <Box>
            <h1
              className="font-atkinson"
            >
              {username}
            </h1>
            <h1
              color="textSecondary"
              className="font-atkinson"
            >
              {profession}
            </h1>
          </Box>
        </Box>
        <div>
          <h1 className="mt-2 font-atkinson ">
            {review}
          </h1>
        </div>
      {/* </CardContent> */}
    </Card>
  );
};

export default TestimonialReview;
