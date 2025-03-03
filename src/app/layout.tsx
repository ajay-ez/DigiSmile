"use client";

import { Poppins, DM_Sans } from "next/font/google";
import "./global.scss";
import React, { Suspense } from "react";
import Script from "next/script";
import AppWrappers from "./AppWrapper";
import { Provider } from "react-redux";
import store from "@/redux/store";

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

// export const metadata: Metadata = {
//   metadataBase: new URL("https://master.d5vek0a8y0qcb.amplifyapp.com/"),
//   openGraph: {
//     siteName: "Dental Care | Your Smile Matters",
//     type: "website",
//     locale: "en_US",
//     title: "Dental Care | Your Smile Matters",
//     description:
//       "Explore top-notch dental services and learn how we prioritize your oral health. Your smile deserves the best care!",
//     url: "https://master.d5vek0a8y0qcb.amplifyapp.com/",
//     images: [
//       {
//         url: "/images/og-image.jpg", // replace with your image URL
//         width: 1200,
//         height: 630,
//         alt: "Dental Care - Your Smile Matters"
//       }
//     ]
//   },
//   robots: {
//     index: true,
//     follow: true,
//     "max-image-preview": "large",
//     "max-snippet": -1,
//     "max-video-preview": -1,
//     googleBot: "index, follow"
//   },
//   alternates: {
//     types: {
//       "application/rss+xml":
//         "https://master.d5vek0a8y0qcb.amplifyapp.com/rss.xml"
//     }
//   },
//   applicationName: "Dental Care | Your Smile Matters",
//   appleWebApp: {
//     title: "Dental Care | Your Smile Matters",
//     statusBarStyle: "default",
//     capable: true
//   },
//   verification: {
//     google: "YOUR_GOOGLE_VERIFICATION_CODE",
//     yandex: ["YOUR_YANDEX_VERIFICATION_CODE"],
//     other: {
//       "msvalidate.01": ["YOUR_MICROSOFT_VALIDATION_CODE"],
//       "facebook-domain-verification": ["YOUR_FACEBOOK_VERIFICATION_CODE"]
//     }
//   },
//   icons: {
//     icon: [
//       {
//         url: "/favicon.ico",
//         type: "image/x-icon"
//       },
//       {
//         url: "/favicon-16x16.png",
//         sizes: "16x16",
//         type: "image/png"
//       },
//       {
//         url: "/favicon-32x32.png",
//         sizes: "32x32",
//         type: "image/png"
//       },
//       {
//         url: "/favicon-96x96.png",
//         sizes: "96x96",
//         type: "image/png"
//       },
//       {
//         url: "/android-chrome-192x192.png",
//         sizes: "192x192",
//         type: "image/png"
//       }
//     ],
//     shortcut: [
//       {
//         url: "/favicon.ico",
//         type: "image/x-icon"
//       }
//     ],
//     apple: [
//       {
//         url: "/apple-icon-57x57.png",
//         sizes: "57x57",
//         type: "image/png"
//       },
//       {
//         url: "/apple-icon-60x60.png",
//         sizes: "60x60",
//         type: "image/png"
//       },
//       {
//         url: "/apple-icon-72x72.png",
//         sizes: "72x72",
//         type: "image/png"
//       },
//       {
//         url: "/apple-icon-76x76.png",
//         sizes: "76x76",
//         type: "image/png"
//       },
//       {
//         url: "/apple-icon-114x114.png",
//         sizes: "114x114",
//         type: "image/png"
//       },
//       {
//         url: "/apple-icon-120x120.png",
//         sizes: "120x120",
//         type: "image/png"
//       },
//       {
//         url: "/apple-icon-144x144.png",
//         sizes: "144x144",
//         type: "image/png"
//       },
//       {
//         url: "/apple-icon-152x152.png",
//         sizes: "152x152",
//         type: "image/png"
//       },
//       {
//         url: "/apple-icon-180x180.png",
//         sizes: "180x180",
//         type: "image/png"
//       }
//     ]
//   }
// };

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
      </head>
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
