"use client";

import React, { useEffect } from "react";
import { redirect } from "next/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const token = localStorage.getItem("authToken");
  //     if (token) {
  //       redirect("/home");
  //     }
  //   }
  // }, []);
  return <>{children}</>;
};

export default AuthLayout;
