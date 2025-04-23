"use client";

import { Poppins, DM_Sans } from "next/font/google";
import "./global.scss";
import React, { Suspense } from "react";
import Script from "next/script";
import AppWrappers from "./AppWrapper";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400"]
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"]
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Best General and Cosmetic Dentist in DMV Area</title>
        <meta 
          name="description" 
          content="Looking for the best dentist in Washington DC, Burke VA, or the DMV area? Our affordable, family-friendly dental clinic offers general dentistry, teeth cleaning, dental checkups, root canal treatments, tooth extractions, fillings, and emergency dental care. We specialize in cosmetic dentistry, including veneers, teeth whitening, smile makeovers, Invisalign, clear braces, and dental implants. We also provide gentle pediatric dental care, including child tooth cleanings and extractions. Medicaid and low-cost options available. Visit the best dentist near you for a healthy, beautiful smile." 
        />
      </Head>
      <body className={`${poppins.className} ${dmSans.className}`}>
        <Script id="chatbot-config" strategy="beforeInteractive">
          {`
            window.embeddedChatbotConfig = {
              chatbotId: "1ZYPlrW9E56Qhv7BVhwjH",
              domain: "www.chatbase.co"
            };
          `}
        </Script>
        <Script
          src="https://www.chatbase.co/embed.min.js"
          strategy="afterInteractive"
          defer
        />
        <Suspense fallback={<div>Loading...</div>}>
          <Provider store={store}>
            <AppWrappers>{children}</AppWrappers>
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
