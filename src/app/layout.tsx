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
        <title>Best General and Cosmetic Dentist in DMV Area | DigiSmile</title>
        <meta
          name="description"
          content="Looking for the best dentist in Washington DC, Burke VA, or the DMV area? Our affordable, family-friendly dental clinic offers general dentistry, teeth cleaning, dental checkups, root canal treatments, tooth extractions, fillings, and emergency dental care."
        />

        {/* Essential Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />

        {/* Canonical URL */}
        {/* <link rel="canonical" href="https://yourclinicurl.com/" /> */}

        {/* Favicon */}
        {/* <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" /> */}

        {/* Additional SEO */}
        <meta
          name="keywords"
          content="dentist, dental clinic, teeth cleaning, cosmetic dentistry, dental implants, Invisalign, emergency dentist, pediatric dentist, DMV area, Washington DC, Burke VA"
        />
        <meta name="geo.region" content="US-VA" />
        <meta name="geo.placename" content="Burke" />
        <meta name="geo.placename" content="Washington" />
      </Head>

      {/* Google Analytics */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_APP_GTAG}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_APP_GTAG}');
        `}
      </Script>
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
      <body className={`${poppins.className} ${dmSans.className}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Provider store={store}>
            <AppWrappers>{children}</AppWrappers>
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
