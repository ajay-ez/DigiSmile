"use client";
import LandingPage from "@/features/LandingPage/LandingPage";
import React from "react";
import ScrollHandler from "./components/ScrollHandler";

const RootPage: React.FC = () => {
  return (
    <ScrollHandler>
      <LandingPage />
    </ScrollHandler>
  );
};

export default RootPage;
