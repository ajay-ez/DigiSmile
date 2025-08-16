"use client";

import React from "react";
import DigiLayout from "@/components/Layout";
import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const privacyPolicyPage = () => {
  return (
    <DigiLayout>
      <Box
        height={"60vh"}
        width={"100%"}
        className="locations-bg-image"
        position={"relative"}
      >
        <Text
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          color={"white.900"}
          fontWeight={900}
          className="heading"
        >
          Privacy Policy
        </Text>
      </Box>
      <Flex
        className="home-section location-section"
        flexDir={"column"}
        gap={10}
      >
        <Flex
          flexDir={"column"}
          className="responsive-services-section"
          justifyContent={"center"}
          width={"100%"}
        >
          <Text mt={8} as={"h4"}>
            Smile Experts Dental is committed to respecting and protecting your personal
            information. This Privacy Policy explains how we collect, use, and
            share information when you opt in to receive SMS messages from us.
          </Text>
          <Text as={"h3"} mt={8} fontWeight={800}>
            Sharing Your Information
          </Text>
          <Text as={"h4"} mt={2}>
            We do not share your phone number or SMS opt-in information with
            third parties for marketing purposes.
          </Text>
          <Text as={"h3"} mt={8} fontWeight={800}>
            Your Rights
          </Text>
          <Text as={"h4"} mt={2}>
            You can opt out of receiving SMS messages at any time by replying
            with “STOP” to any message we send you.
          </Text>
          <Text as={"h3"} mt={8} fontWeight={800}>
            Data Security
          </Text>
          <Text as={"h4"} mt={2}>
            We implement reasonable measures to protect your personal
            information from unauthorized access or disclosure.
          </Text>
          <Text as={"h3"} mt={8} fontWeight={800}>
            Contact Us
          </Text>
          <Text as={"h4"} mt={2}>
            If you have questions or concerns about our privacy practices,
            contact us at (202) 545-6336.
          </Text>

          <Text as={"h3"} mt={12} fontWeight={800}>
            Terms and Conditions (Terms of Service)
          </Text>
          <Text as={"h4"} mt={2}>
            Effective Date: April 23, 2025
          </Text>
          <Text as={"h4"} mt={2}>
            By opting in to receive SMS messages from Smile Experts Dental, you agree to
            the following terms:
          </Text>

          <Text as={"h3"} mt={8} fontWeight={800}>
            1. SMS Messaging Service
          </Text>
          <Text as={"h4"} mt={2}>
            By providing my phone number, I consent to receive SMS text messages
            from Smile Experts Dental for appointment reminders, marketing messages, and
            general two-way communication. Msg frequency varies. Msg & data
            rates may apply. Reply HELP for support. Reply STOP to opt out.
          </Text>

          <Text as={"h3"} mt={8} fontWeight={800}>
            2. Message Frequency
          </Text>
          <Text as={"h4"} mt={2}>
            You will receive up to 10 messages per month depending on booked
            appointments.
          </Text>

          <Text as={"h3"} mt={8} fontWeight={800}>
            3. Message and Data Rates
          </Text>
          <Text as={"h4"} mt={2}>
            Message and data rates may apply based on your mobile carrier’s
            terms.
          </Text>

          <Text as={"h3"} mt={8} fontWeight={800}>
            4. Privacy Policy
          </Text>
          <Text as={"h4"} mt={2}>
            Your information will be handled in accordance with our Privacy
            Policy, which can be viewed at
            smilexpertsdental.com/home/privacy-policy.
          </Text>

          <Text as={"h3"} mt={8} fontWeight={800}>
            5. Opt-Out Instructions
          </Text>
          <Text as={"h4"} mt={2}>
            You can opt out at any time by replying “STOP” to any SMS message.
            Reply HELP for support. You may also contact us directly at (202)
            545-6336.
          </Text>

          <Text as={"h3"} mt={8} fontWeight={800}>
            6. Liability
          </Text>
          <Text as={"h4"} mt={2}>
            We are not responsible for any charges, errors, or delays in SMS
            delivery caused by your carrier or third-party service providers. By
            opting in, you confirm that you are the owner or authorized user of
            the phone number provided and that you are at least 18 years old.
          </Text>
        </Flex>
      </Flex>
    </DigiLayout>
  );
};

export default privacyPolicyPage;
