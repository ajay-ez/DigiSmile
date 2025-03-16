"use client";

import React from "react";
import DigiLayout from "@/components/Layout";
import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  useMediaQuery
} from "@chakra-ui/react";
import Map from "@/components/common/Map";

const NewPatientsPage = () => {
  const [isLaptop] = useMediaQuery("(max-width: 1000px)");

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
          NEW PATIENTS
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
          <Text className="heading" textAlign={"center"}>
            Welcome to Smile Experts Dental - Your Hometown Dental Care!
          </Text>
          <Text mt={8} as={"h4"}>
            Thank you for visiting our website! At Smile Experts Dental, we are
            excited to welcome new patients and ensure that you feel empowered,
            safe, and valued during your first visit. Our goal is to build trust
            and provide exceptional dental care for you and your family in a
            comfortable, modern environment. We are proud to be your go-to
            dental office in Burke and Washington areas.
          </Text>
          <Text
            as={"h2"}
            fontWeight={"100"}
            color={"##3a3a3a"}
            my={8}
            borderTop={"1px solid #d3d3d3"}
            py={8}
            textAlign={"center"}
          >
            Your First Visit
          </Text>
          <Text as={"h4"} textAlign={"center"}>
            During your initial visit, you will meet with one of our caring
            dental professionals for a personalized interview and thorough
            examination. We take the time to listen to your needs and answer any
            questions you may have. Our team is dedicated to working with you,
            ensuring that we are aligned on your oral health goals.
          </Text>
          <Text
            as={"h2"}
            fontWeight={"100"}
            color={"##3a3a3a"}
            my={8}
            borderTop={"1px solid #d3d3d3"}
            py={8}
            textAlign={"center"}
          >
            Compassionate Care, Fair Prices
          </Text>
          <Text as={"h4"} textAlign={"center"}>
            At Smile Experts Dental, we believe that dental care should be both
            compassionate and affordable. We are committed to providing
            high-quality services at prices that are accessible to everyone. Our
            fees are typically below the regional average to make sure that cost
            is never a barrier to your dental health.
          </Text>
          <Text
            as={"h2"}
            fontWeight={"100"}
            color={"##3a3a3a"}
            my={8}
            borderTop={"1px solid #d3d3d3"}
            py={8}
            textAlign={"center"}
          >
            We Accept Most Insurances
          </Text>
          <Text as={"h4"} textAlign={"center"}>
            Smile Experts Dental is proud to accept most dental insurances,
            including Healthy Michigan Plans, making it easier for you to
            receive the care you deserve.
          </Text>
          <Text as={"h4"} mt={4}>
            Usually, treatment can be done or started on the <b>same day</b> as
            your consultation. We love to save our patients an extra trip to the
            dentist. However, a complex medical history or complex treatment
            needs may require a second appointment to provide treatment on
            another day.
          </Text>
          <Text
            as={"h2"}
            fontWeight={"100"}
            color={"##3a3a3a"}
            my={8}
            borderTop={"1px solid #d3d3d3"}
            py={8}
            textAlign={"center"}
          >
            Flexible Appointment Times
          </Text>
          <Text as={"h4"} textAlign={"center"}>
            We understand that life can get busy, so if you’re unable to make
            your scheduled appointment, we’re happy to help you reschedule at a
            more convenient time. For many patients, treatment can be completed
            or started on the same day as the consultation, saving you an extra
            trip to the office. However, more complex cases may require
            follow-up visits.
          </Text>
          <Text
            as={"h2"}
            fontWeight={"100"}
            color={"##3a3a3a"}
            my={8}
            borderTop={"1px solid #d3d3d3"}
            py={8}
            textAlign={"center"}
          >
            Special Offers for New Patients
          </Text>
          <Text as={"h4"} textAlign={"center"}>
            To welcome you to Smile Experts Dental, we offer ongoing special
            deals and discounts for new patients. We want to make sure that your
            dental journey with us is as affordable as possible!
          </Text>
          <Text
            as={"h2"}
            fontWeight={"100"}
            color={"##3a3a3a"}
            my={8}
            borderTop={"1px solid #d3d3d3"}
            py={8}
            textAlign={"center"}
          >
            Preparing for Your First Appointment
          </Text>
          <Text as={"h4"} mt={8}>
            To make the most out of your visit, please bring the following:
          </Text>
          <Flex>
            <UnorderedList>
              <ListItem>Any x-rays from a previous dentist</ListItem>
              <ListItem>
                A list of any medications you are currently taking
              </ListItem>
              <ListItem>
                Your dental insurance card and other insurance information.
              </ListItem>
              <ListItem>
                A list of any oral health concerns or questions you would like
                to ask us.
              </ListItem>
            </UnorderedList>
          </Flex>
          <Text as={"h4"} mt={8}>
            *Patients <b>under the age of 18</b> must be accompanied by a parent
            or guardian.
          </Text>
          <Text as={"h4"} mt={4} pb={8} borderBottom={"1px solid #d3d3d3"}>
            We can’t wait to meet you and help you achieve your best smile!
          </Text>
        </Flex>
        <Flex flexWrap={isLaptop ? "wrap" : "nowrap"} gap={8} px={8}>
          <Map
            mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.409163489179!2d-77.0414735!3d38.8995466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7c2a1c9be4f%3A0x6e4e3b4cf4df9d76!2s1747%20Pennsylvania%20Ave%20NW%2C%20Washington%2C%20DC%2020006%2C%20USA!5e0!3m2!1sen!2sus!4v1696094570920!5m2!1sen!2sus
"
          />
          <Map
            mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.189827641261!2d-77.2698365!3d38.7932255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64a1b300c64f1%3A0xb83ff2c0bb7d5473!2s9570%20Burke%20Rd%20Unit%20A%2C%20Burke%2C%20VA%2022015%2C%20USA!5e0!3m2!1sen!2sus!4v1696094570920!5m2!1sen!2sus
"
          />
        </Flex>
      </Flex>
    </DigiLayout>
  );
};

export default NewPatientsPage;
