import {
  signup_bottom_left,
  signup_top_left,
  signup_top_right,
  signup_teeth
} from "@/assets/images";
import { Container } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface Properties {
  children: React.ReactNode;
}

const SignupContainer = ({ children }: Properties) => {
  return (
    <div className="relative bg-signup-gradient min-h-screen flex justify-center items-center overflow-hidden">
      <div className="hidden md:absolute md:block -top-9 -left-9 p-4 z-0">
        <Image height={200} width={200} src={signup_top_left} alt="Image 1" />
      </div>

      <div className="hidden md:absolute md:block top-0 right-0 p-4 z-0">
        <Image height={200} width={200} src={signup_top_right} alt="Image 2" />
      </div>

      <Container maxWidth="lg" className="relative z-10">
        <div>{children}</div>
      </Container>

      <div className="hidden md:absolute md:block bottom-0 left-0 p-4 z-0">
        <Image
          height={200}
          width={200}
          src={signup_bottom_left}
          alt="Image 3"
        />
      </div>

      <div className="hidden md:absolute md:block bottom-0 right-0 p-4 z-0">
        <Image height={200} width={200} src={signup_teeth} alt="Image 4" />
      </div>
    </div>
  );
};

export default SignupContainer;
