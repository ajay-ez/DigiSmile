"use client";

import {
  excellence,
  handshake,
  mahmoodImage,
  mindfull,
  teeth1,
  transparency
} from "@/assets/images";
import DigiLayout from "@/components/Layout";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";

const AboutUsComponent = () => {
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
          ABOUT US
        </Text>
      </Box>
      <Flex flexDir={"column"} color={"black.900"} bg={"brand.200"}>
        <Flex
          className="responsive-dental-section"
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
          gap={"0 !important"}
        >
          <Text
            fontWeight={600}
            className="heading"
            textAlign={"center"}
            color={"brand.100"}
          >
            What we’re striving for
          </Text>
          <Text as={"h3"} mt={8} color={"brand.100"}>
            At Smile Experts Dental Clinic, nothing is more important than the
            highest quality of care. Since day one, we have been committed to
            our values so each of our patients can rest assured they are in good
            hands.
          </Text>
          <Flex width={"100%"} mt={20} flexDir={isLaptop ? "column" : "row"}>
            <Flex
              width={"100%"}
              flexDir={"column"}
              borderRight={isLaptop ? "0" : "1px solid"}
              borderColor={"#d8bdba"}
            >
              <Flex
                alignItems={"flex-start"}
                p={isLaptop ? 0 : 4}
                gap={8}
                flexDir={isLaptop ? "column" : "row"}
              >
                <Image src={transparency} height={100} width={100} alt="" />
                <Box>
                  <Text as={"h3"} color={"brand.100"} fontWeight={900}>
                    Transparency
                  </Text>
                  <Text as={"h5"} color={"brand.100"}>
                    The best patient is an educated patient.
                  </Text>
                  <Text as={"h5"} color={"brand.100"} mt={4}>
                    An educated patient is the best patient, so we prioritize
                    clarity at every step. You&apos;ll know exactly why a
                    treatment is recommended and its full cost upfront. Your
                    journey with us doesn&apos;t end until you&apos;re fully
                    satisfied, ensuring you feel confident in the care
                    you&apos;ve received.
                  </Text>
                </Box>
              </Flex>
              <Flex
                alignItems={"flex-start"}
                p={isLaptop ? 0 : 4}
                gap={8}
                flexDir={isLaptop ? "column" : "row"}
              >
                <Image src={excellence} height={100} width={100} alt="" />
                <Box>
                  <Text as={"h3"} color={"brand.100"} fontWeight={900}>
                    Excellence
                  </Text>
                  <Text as={"h5"} color={"brand.100"}>
                    The best patient is an educated patient.
                  </Text>
                  <Text as={"h5"} color={"brand.100"} mt={4}>
                    You deserve outstanding dental care delivered with precision
                    and skill. Our state-of-the-art equipment ensures accurate
                    diagnoses and painless treatments. Our doctors complete
                    hundreds of training
                  </Text>
                </Box>
              </Flex>
            </Flex>
            <Flex width={"100%"} flexDir={"column"}>
              <Flex
                alignItems={"flex-start"}
                p={isLaptop ? 0 : 4}
                gap={8}
                flexDir={isLaptop ? "column" : "row"}
              >
                <Image src={handshake} height={100} width={100} alt="" />
                <Box>
                  <Text as={"h3"} color={"brand.100"} fontWeight={900}>
                    Seamless Service
                  </Text>
                  <Text as={"h5"} color={"brand.100"}>
                    A trip to the dentist’s office should be a source of
                    serenity, not anxiety.
                  </Text>
                  <Text as={"h5"} color={"brand.100"} mt={4}>
                    A visit to the dentist should be smooth and stress-free.
                    Book online, check in digitally, and enjoy a clear, itemized
                    invoice. Relax during your appointment by streaming Netflix
                    or Hulu while we take care of your smile.
                  </Text>
                </Box>
              </Flex>
              <Flex
                alignItems={"flex-start"}
                p={isLaptop ? 0 : 4}
                gap={8}
                flexDir={isLaptop ? "column" : "row"}
              >
                <Image src={mindfull} height={100} width={100} alt="" />
                <Box>
                  <Text as={"h3"} color={"brand.100"} fontWeight={900}>
                    Mindfulness
                  </Text>
                  <Text as={"h5"} color={"brand.100"}>
                    Beautiful smiles begin on the inside.
                  </Text>
                  <Text as={"h5"} color={"brand.100"} mt={4}>
                    Exceptional dentistry starts with honoring your well-being.
                    Our thoughtfully designed spaces promote relaxation and
                    mindfulness, creating a serene environment where you can
                    feel at ease during your dental visit.
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDir={"column"} gap={10} color={"brand.100"}>
        <Box width={"100%"} bg={"brand.100"} color={"#fff"}>
          <Flex
            className="responsive-dental-section"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image src={mahmoodImage} height={400} width={400} alt=""></Image>
            <Flex flexDir={"column"} gap={8}>
              <Text className="heading">Our founders story</Text>
              <Text as={"h4"}>
                Dr. Andleeb Mahmood (Dentist) is genuinely gifted with a vision
                and mission for her dental practice. She treats every patient as
                family, aiming to provide an extraordinary experience and the
                highest quality dental treatment. Her approach is grounded in
                personalized care, ensuring that each patient receives a
                treatment plan tailored specifically to their needs. Dr.
                Mahmood’s commitment to excellence in patient care is evident in
                the way she has structured her practice and the patient-centric
                focus she maintains.
              </Text>
              <Text as={"h4"}>
                With over 15 years of experience, Dr. Mahmood has established
                three thriving offices in the DMV area. Her commitment to
                providing excellent patient care is reflected in the wide range
                of services her clinics offer, including routine check-ups,
                cleanings, dental implants, and cosmetic dentistry. Her team,
                selected for their expertise and dedication, shares her vision
                of delivering top-notch care. Rigorous training ensures that
                every team member is up-to-date with the latest knowledge and
                skills in the field.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Flex flexDir={"column"} gap={10} color={"brand.200"}>
        <Box width={"100%"} bg={"brand.200"} color={"brand.100"}>
          <Flex
            className="responsive-dental-section"
            flexDir={"column"}
            gap={"8 !important"}
          >
            <Text textAlign={"center"} width={"100%"} className="heading">
              Our guiding principles
            </Text>
            <Accordion allowToggle variant={"about-us"}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box as="h3" flex="1" textAlign="left">
                        WE INNOVATE FOR THE BEST EXPERIENCE
                      </Box>
                      {isExpanded ? <FaMinus /> : <FaPlus />}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      Our commitment to pioneering innovative tools ensures that
                      you receive the most premium, gentle care on the market.
                      We bridge the gap between preventative health and highly
                      effective treatments to ensure an unparalleled experience
                      you&apos;re sure to come back to time and time again.
                      That&apos;s why we lead with innovative offerings.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box as="h3" flex="1" textAlign="left">
                        WE FOCUS ON RESULTS FIRST
                      </Box>
                      {isExpanded ? <FaMinus /> : <FaPlus />}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      The desire for bright, white teeth is universal
                      (we&apos;ve all dabbled with those whitening strips from
                      time to time). But when you cut through the gimmicks and
                      marketing ploys, you&apos;ll find that white teeth
                      actually start with the foundation of a healthy smile. As
                      our founder Dr. Mahmood says, “You would never get your
                      car waxed without first getting it cleaned” - the same
                      applies to our teeth. After diligent research, we
                      identified an innovative method that leverages the
                      dentist-designed Glo Pro Power technology. In one
                      customized treatment administered by our expert
                      Hygienists, you will garner the natural results you
                      deserve (cue: satisfaction guaranteed), with zero hassle.
                      Our customized plans are built around your personal needs
                      and habits (such as smoking, drinking wine/coffee, and
                      perio health), and ensure that you are safely guided and
                      properly taken care of during the whitening process.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box as="h3" flex="1" textAlign="left">
                        How we treat patients at our clinic?
                      </Box>
                      {isExpanded ? <FaMinus /> : <FaPlus />}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      We are guided by internationally recognized dental ethics,
                      ensuring every patient is treated with compassion,
                      dignity, and without discrimination. Whether it&apos;s a
                      routine check-up or a complex case, we focus on your
                      comfort, needs, and overall well-being. Emergency care is
                      always prioritized, and we maintain a supportive,
                      respectful environment for all.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box as="h3" flex="1" textAlign="left">
                        Is patient information confidential and how do you
                        ensure professionalism?
                      </Box>
                      {isExpanded ? <FaMinus /> : <FaPlus />}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      Yes, your privacy is our top priority. All personal and
                      medical information is handled with strict confidentiality
                      and shared only when legally required. Our team follows
                      ethical guidelines in every aspect of care—taking full
                      responsibility for treatments, working only with qualified
                      professionals, and ensuring every procedure meets legal
                      and professional standards.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Box as="h3" flex="1" textAlign="left">
                        How do we stay current with dental advancements?
                      </Box>
                      {isExpanded ? <FaMinus /> : <FaPlus />}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      Our dentists &quot;Dr Andleeb Mahmood&quot; are committed to
                      lifelong learning and regularly participate in continuing
                      education to stay updated with the latest techniques and
                      technologies. We combine modern science with a
                      patient-first approach, so you receive care that is both
                      advanced and personalized. We also actively promote oral
                      health education and contribute to building a
                      healthier community.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Flex>
        </Box>
      </Flex>
    </DigiLayout>
  );
};

export default AboutUsComponent;
