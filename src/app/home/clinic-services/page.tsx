"use client";

import React from "react";
import DigiLayout from "@/components/Layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import { clinicServices } from "@/utils";
import { useRouter } from "next/navigation";

const ClinicServices = () => {
  const router = useRouter();
  const [isLaptop] = useMediaQuery("(max-width: 1000px)");

  const navigateToSection = (id: string) => {
    router.push(`${id}`);
  };

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
          SERVICES
        </Text>
      </Box>
      <Flex
        className="home-section location-section"
        flexDir={"column"}
        gap={10}
        color={"brand.100"}
      >
        <Flex
          flexDir={"column"}
          className="responsive-services-section"
          justifyContent={"center"}
          width={"100%"}
        >
          <Text
            color={"brand.100"}
            className="heading"
            textAlign={"center"}
            fontWeight={800}
          >
            Your teeth
          </Text>
          <Text mt={2} as={"h4"} textAlign={"center"}>
            Experience innovative, gentle treatments that will leave you
            smiling.
          </Text>
          <Flex
            mt={8}
            borderRadius={"md"}
            border={"1px #963f36 solid"}
            justifyContent={"space-between"}
            flexWrap={isLaptop ? "wrap" : "nowrap"}
          >
            {clinicServices.map((service, index) => (
              <Flex
                key={index}
                flexDir={"column"}
                width={"100%"}
                borderRight={
                  clinicServices.length - 1 === index || isLaptop
                    ? "none"
                    : isLaptop
                      ? "none"
                      : "1px #963f36 solid"
                }
              >
                <Text
                  borderBottom={isLaptop ? "none" : "1px #963f36 solid"}
                  borderTop={
                    isLaptop && index !== 0 ? "1px #963f36 solid" : "none"
                  }
                  as={"h3"}
                  p={4}
                  color={"brand.100"}
                  fontWeight={700}
                  textAlign={"center"}
                  height={"100px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  {service.heading}
                </Text>
                <Flex
                  padding={isLaptop ? "0 2rem 2rem 2rem" : "2rem"}
                  justifyContent={"center"}
                  textAlign={"center"}
                  flexDir={"column"}
                >
                  <Text as={"h5"} fontWeight={500}>
                    {service.description}
                  </Text>
                  {/* <Text
                    as={"h4"}
                    fontWeight={600}
                    mt={isLaptop ? 4 : 16}
                    color={"brand.100"}
                  >
                    {service.time}
                  </Text>
                  <Text as={"h4"} mt={2}>
                    {service.price}
                  </Text> */}
                  <Button
                    mt={8}
                    backgroundColor={"brand.100"}
                    color={"white"}
                    borderRadius={"md"}
                    _hover={{
                      backgroundColor: "brand.100"
                    }}
                    onClick={() => {
                      if (localStorage.getItem("userId")) {
                        navigateToSection(
                          `/profile/${localStorage.getItem("userId")}/quick-appointment?tabId=2&reason=${service.value}`
                        );
                      } else {
                        navigateToSection(
                          `/appointment?reason=${service.value}`
                        );
                      }
                    }}
                  >
                    BOOK NOW
                  </Button>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Box width={"100%"} bg={"#F4DFCF"} color={"#000"}>
          <Flex
            className="responsive-dental-section"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Flex gap={2} className="responsive-dental-heading">
              <Text whiteSpace={"nowrap"} as={"h1"} fontWeight={500}>
                Dental services
              </Text>
              <Text as={"h1"} fontWeight={500}>
                with a smile
              </Text>
            </Flex>
            <Text as={"h4"}>
              Time for a dental cleaning? Need a crown, root canal, or dental
              implant? Dr. Andleeb Mahmood, and our team of orthodontists, oral
              surgeons, and periodontists offer all the dental services you
              could ever need to keep your family healthy and smiling.
            </Text>
          </Flex>
        </Box>
        <Flex
          flexDir={"column"}
          className="responsive-services-section"
          justifyContent={"center"}
          width={"100%"}
        >
          <Text className="heading" textAlign={"center"} fontWeight={800}>
            General Dentistry Services
          </Text>
          <Text as={"h3"} textAlign={"center"} mt={2}>
            one stop shop for all your needs one stop shop for all your needs
          </Text>
          <Flex mt={8} gap={10} flexDir={"column"}>
            <Flex
              pt={6}
              gap={isLaptop ? 4 : 10}
              justifyContent={"space-between"}
              borderTop={"1px #963f36 solid"}
              flexDir={isLaptop ? "column" : "row"}
            >
              <Text as={"h1"} fontWeight={800} width={"100%"}>
                Dental Filling
              </Text>
              <Flex width={"100%"} flexDir={"column"}>
                <Text as={"h4"} fontWeight={800}>
                  Sign Indicating You Need a Dental Filling
                </Text>
                <Text as={"h4"} mt={6}>
                  Not sure if you require a dental filling? Your regular exam
                  will provide certainty, but watch out for signs like
                  toothaches, sensitivity to temperature, visible cracks, dark
                  spots, or swollen and bleeding gums. These are cues that
                  it&apos;s time to consider a dental filling.
                </Text>
                <Text as={"h4"} fontWeight={800} mt={6}>
                  What is the Purpose of Dental Fillings?
                </Text>
                <Text as={"h4"} mt={6}>
                  Dental fillings serve as the remedy for cavities—those small
                  but impactful holes in teeth. Our process involves adeptly
                  removing decay, replacing it with a material that safeguards
                  against future decay, and shields the tooth&apos;s root and
                  internal structures from bacterial harm. Experience the
                  strength and health our fillings bring to your smile.
                </Text>
                <Text as={"h4"} fontWeight={800} mt={6}>
                  Are Dental Fillings Painful?
                </Text>
                <Text as={"h4"} mt={6}>
                  Concerned about pain during the filling process? Fear not.
                  With the use of local anesthesia, dental fillings are
                  typically painless. Small cavities may not even require
                  anesthesia. Feel free to discuss any concerns with our
                  dentists beforehand for a more comfortable experience.
                </Text>
                <Text as={"h4"} fontWeight={800} mt={6}>
                  How does the filling procedure work?
                </Text>
                <Text as={"h4"} mt={6}>
                  he bonding or filling material is a composite resin that
                  mostly matches the color of your teeth. It is used to bond
                  teeth or fill the cavity. It is also very effective for making
                  aesthetically pleasing changes. Once the resin composite is
                  applied, it is shaped to appear natural and blend in. Once
                  cured, it forms a strong bond and can last for 7-8 years with
                  proper care.
                </Text>
                <Divider mt={8} mb={4} />
                <Accordion allowToggle variant={"services"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Does teeth filling hurts?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Teeth filling is usually not painful during the procedure
                      because dentists use local anesthesia to numb the area.
                      Afterward, you may experience some temporary discomfort or
                      sensitivity.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Can you get veneers without filling teeth?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      In most cases, getting veneers involves some tooth
                      preparation, which often includes minimal filing or
                      reshaping of the teeth to ensure a proper fit and
                      appearance for the veneers
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Does filling teeth damage enamel?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Filling teeth can involve removing some enamel to create
                      space for the filling material. However, modern techniques
                      aim to minimize enamel removal to preserve tooth
                      structure.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Where can I found teeth filling service in USA?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      You can find teeth filling services in the USA at dental
                      clinics, private dental practices, and community health
                      centers. Start by contacting a local dentist to schedule
                      an appointment.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
            </Flex>
            <Flex
              pt={6}
              gap={isLaptop ? 4 : 10}
              justifyContent={"space-between"}
              borderTop={"1px #963f36 solid"}
              flexDir={isLaptop ? "column" : "row"}
            >
              <Text as={"h1"} fontWeight={800} width={"100%"}>
                Root Canal
              </Text>
              <Flex width={"100%"} flexDir={"column"}>
                <Text as={"h4"} fontWeight={800}>
                  Symptoms and Reasons of Root Canal
                </Text>
                <Text as={"h4"} mt={6}>
                  Recognize signs like severe toothache or changes in tooth
                  color indicating an infected root pulp. Reasons for root
                  canals include infection, tooth decay, dead tooth nerve,
                  trauma, or fractures. Timely intervention is crucial.
                </Text>
                <Text as={"h4"} fontWeight={800} mt={6}>
                  Preventing Root Canals: Embrace Proactive Dental Care
                </Text>
                <Text as={"h4"} mt={6}>
                  Regular Checkups: Avoid the need for root canal therapy with
                  regular checkups. We catch cavities early, preventing
                  infections. Address cracked or chipped teeth promptly to avoid
                  pulp infections.
                </Text>
                <Text as={"h4"} fontWeight={800} mt={6}>
                  What is the procedure for a root canal?
                </Text>
                <Text as={"h4"} mt={6}>
                  It used to take more than one visit to the dentist to complete
                  a root canal procedure, but development and progression in
                  dentistry now allow for the procedure to be completed in just
                  one visit.
                </Text>
                <Text as={"h4"} fontWeight={800} mt={6}>
                  Your Trusted Partner in Dental Care: Smile Experts Dental
                </Text>
                <Text as={"h4"} mt={6}>
                  At Smile Experts Dental, we understand the importance of your
                  oral health. Our experienced team combines advanced technology
                  with a compassionate approach, making your root canal
                  experience stress-free. If you&apos;re experiencing symptoms
                  of tooth damage, contact Dental near you today for an
                  evaluation and consultation. Trust us to deliver high-quality
                  care tailored to your unique needs.
                </Text>
                <Divider mt={8} mb={4} />
                <Accordion allowToggle variant={"services"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How long does a root canal take?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      A root canal procedure typically takes 1 to 2 hours. The
                      exact time may vary based on the tooth’s complexity and
                      the dentist’s experience.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Does root canal hurt?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      During a root canal procedure, you should not feel pain as
                      the dentist uses local anesthesia to numb the area. Some
                      discomfort may occur afterward, but it’s manageable with
                      over-the-counter pain relievers.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How long does root canal take to heal?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Recovery from a root canal usually takes a few days to a
                      few weeks. The exact healing time varies depending on the
                      tooth’s condition and your overall oral health.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Can I drive after root canal?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Yes, you can typically drive after a root canal procedure,
                      as the local anesthesia used will wear off, allowing you
                      to regain full control of your faculties.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Do root canal cause cancer?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      No, root canal procedures do not cause cancer. There is no
                      scientific evidence supporting a link between root canals
                      and cancer development.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
            </Flex>
            <Flex
              pt={6}
              gap={isLaptop ? 4 : 10}
              justifyContent={"space-between"}
              borderTop={"1px #963f36 solid"}
              flexDir={isLaptop ? "column" : "row"}
            >
              <Text as={"h1"} fontWeight={800} width={"100%"}>
                Teeth Whitening
              </Text>
              <Flex width={"100%"} flexDir={"column"}>
                <Text as={"h4"} fontWeight={800}>
                  What happens during a tooth whitening procedure?
                </Text>
                <Text as={"h4"} mt={6}>
                  When you apply a whitening solution to your teeth, the
                  hydrogen peroxide in the solution penetrates the enamel. The
                  oxidation process then begins, in which molecules are altered
                  to reflect less or no light. This gives them a colorless
                  appearance and white teeth. This method is quite good at
                  removing stains and can be performed several times.
                  State-of-the-Art Technology At our modern cosmetic dentistry
                  practice, we pride ourselves on using the latest tools for
                  superior whitening. Choose the confidence that comes with
                  knowing you&apos;re in the hands of professionals committed to
                  bringing you the best in dental technology.
                </Text>
                <Text as={"h4"} fontWeight={800} mt={6}>
                  Professional Teeth Whitening Process in Washington DC and
                  Burke, VA
                </Text>
                <Text as={"h4"} mt={6}>
                  There are many reasons for discolored teeth. Some people
                  naturally have a yellow bone color, while other people are
                  smokers or frequent coffee drinkers. This can leave obvious
                  and uncanny stains on your teeth. The teeth whitening process
                  is quite simple and can be done by the dentist in just one
                  visit.
                </Text>
                <Text as={"h4"} fontWeight={800} mt={6}>
                  Why Choose Our Teeth Whitening Services
                </Text>
                <Text as={"h4"} mt={6}>
                  Brighten your smile with experienced dental professionals near
                  you. Our dedicated team brings years of expertise to every
                  teeth whitening treatment, ensuring personalized care and
                  exceptional results. We take pride in our state-of-the-art
                  technology, utilizing modern techniques for superior and
                  lasting outcomes. Choose us for a brighter, whiter smile that
                  reflects the expertise and innovation of cosmetic dentistry
                  team.
                </Text>
                <Divider mt={8} mb={4} />
                <Accordion allowToggle variant={"services"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How long does teeth whitening last?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      The duration of teeth whitening results varies depending
                      on factors like your oral hygiene, diet, and habits.
                      Typically, teeth whitening effects can last from several
                      months to a few years.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          What to eat after teeth whitening?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      After teeth whitening, it’s best to stick to a white diet
                      for 24-48 hours, including foods like plain yogurt, rice,
                      pasta, chicken, and white fish. Avoid staining foods and
                      drinks.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to dehydrate after teeth whitening?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      After teeth whitening, drink water and avoid colored or
                      acidic beverages like coffee, tea, and soda. Rinse with
                      water after consuming any potentially staining substances.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Is snow teeth whitening safe?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Snow teeth whitening products are generally considered
                      safe when used as directed. However, individual reactions
                      may vary, so it’s advisable to consult your dentist before
                      using any teeth whitening product, including Snow.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How to treat burned gums from teeth whitening?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      If you experience gum irritation from teeth whitening, try
                      rinsing with warm salt water, using a desensitizing
                      toothpaste, and avoiding further whitening until the
                      irritation subsides. If the problem persists or worsens,
                      consult your dentist.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
            </Flex>
            <Flex
              pt={6}
              gap={isLaptop ? 4 : 10}
              justifyContent={"space-between"}
              borderTop={"1px #963f36 solid"}
              flexDir={isLaptop ? "column" : "row"}
            >
              <Text as={"h1"} fontWeight={800} width={"100%"}>
                Orthodontics
              </Text>
              <Flex width={"100%"} flexDir={"column"}>
                <Text as={"h4"} fontWeight={800}>
                  What is the procedure of the Treatment?
                </Text>
                <Text as={"h4"} mt={6}>
                  Orthodontic treatment takes years and a lot of visits to your
                  dentist. Depending on the condition of your teeth, it can take
                  a short or very long time. But in the end, the perfectly
                  aligned teeth and a beautiful smile are worth it all!
                </Text>
                <Divider mt={8} mb={4} />
                <Accordion allowToggle variant={"services"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How often do you go to orthodontist after braces?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      After getting braces, you typically visit the orthodontist
                      every 4 to 6 weeks for adjustments and check-ups to ensure
                      your treatment progresses as planned.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          What is difference between dentist and orthodontist?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Dentists are general oral health care providers, while
                      orthodontists are specialists who focus on correcting
                      misaligned teeth and jaws, often through braces or other
                      orthodontic treatments.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          What orthodontist take medicaid?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Orthodontic Medicaid coverage varies by state and program.
                      You can check with your state’s Medicaid office or contact
                      local orthodontists who accept Medicaid to find providers
                      in your area.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Can I change orthodontist mid treatment?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Yes, you can change orthodontists during treatment, but
                      it’s advisable to discuss your decision with both your
                      current orthodontist and the new one to ensure a smooth
                      transition and proper continuity of care.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
            </Flex>
            <Flex
              pt={6}
              gap={isLaptop ? 4 : 10}
              justifyContent={"space-between"}
              borderTop={"1px #963f36 solid"}
              flexDir={isLaptop ? "column" : "row"}
            >
              <Text as={"h1"} fontWeight={800} width={"100%"}>
                Dental Veneer
              </Text>
              <Flex width={"100%"} flexDir={"column"}>
                <Text as={"h4"} fontWeight={800}>
                  What is a Dental Veneer, and why might you need it?
                </Text>
                <Text as={"h4"} mt={6}>
                  A dental veneer is a thin covering that is placed on the front
                  part of the tooth. It matches your teeth in color, shape, and
                  size. Dental Veneer blend in perfectly with your teeth and are
                  very hard to detect.
                </Text>
                <Text as={"h4"} fontWeight={800}>
                  What is the procedure for getting a Dental veneer?
                </Text>
                <Text as={"h4"} mt={6}>
                  To start, the dentist cleans and preps your tooth for the
                  procedure. The dentist ensures that there is enough space to
                  bond a veneer; they have to file a bit in some cases. A
                  temporary veneer is created using removable glue. During that
                  time, the patient has to take special care and avoid hard
                  foods. The temporary veneers are worn for a few days to figure
                  out any problems or wrong angles. After that, the actual
                  veneer is fabricated and ready to be bonded to the tooth.
                </Text>
                <Text as={"h4"} fontWeight={800}>
                  Why do people choose veneers?
                </Text>
                <Text as={"h4"} mt={6}>
                  Dental veneers are so much more effective than filling or
                  bonding. Veneers are more aesthetically pleasing and good for
                  appearance. Veneers transform a person&apos;s smile from
                  average to very eye-catching and attractive.
                </Text>
                <Divider mt={8} mb={4} />
                <Accordion allowToggle variant={"services"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Does delta dental cover veneers?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Delta Dental plans vary, but they typically do not cover
                      elective cosmetic procedures like veneers. Coverage may be
                      available for medically necessary veneers in certain
                      cases. Check your specific plan details for coverage
                      information.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          How much do dental veneers cost?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      The cost of dental veneers varies widely, ranging from
                      $500 to $2,500 per tooth, depending on factors like the
                      type of veneer, location, dentist’s expertise, and
                      additional procedures needed.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Are dental veneers permanent?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Dental veneers are not considered permanent. They
                      typically last 10-15 years or longer with proper care but
                      may need replacement due to wear or damage over time.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Can I eat with dental veneers?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Yes, you can eat with dental veneers, but it’s recommended
                      to avoid biting into extremely hard or sticky foods to
                      prevent damage or dislodging. Normal eating is fine.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
            </Flex>
            <Flex
              pt={6}
              gap={isLaptop ? 4 : 10}
              justifyContent={"space-between"}
              borderTop={"1px #963f36 solid"}
              flexDir={isLaptop ? "column" : "row"}
            >
              <Text as={"h1"} fontWeight={800} width={"100%"}>
                Exam and Cleaning
              </Text>
              <Flex width={"100%"} flexDir={"column"}>
                <Text as={"h4"} fontWeight={800}>
                  Why do you need a dental exam?
                </Text>
                <Text as={"h4"} mt={6}>
                  A comprehensive exam and cleaning are part of regular dental
                  care. It’s important to visit your dentist regularly to ensure
                  your oral health is in good condition. During this scheduled
                  checkup, your dentist will examine your teeth, gums, and other
                  aspects of oral health, including screening for oral cancer.
                  They will also review any previous procedures that may have
                  been performed. After the evaluation, your dentist will advise
                  you on any necessary treatments.
                </Text>
                <Text as={"h4"} fontWeight={800}>
                  What to expect during a dental examination?
                </Text>
                <Text as={"h4"} mt={6}>
                  The procedures during a dental examination depend on the
                  condition of your teeth and your oral history. You can expect
                  general X-rays, such as bitewing X-rays, to detect tooth
                  decay. If you have had previous procedures, your dentist may
                  take an X-ray of a specific tooth. Other procedures may
                  include oral photos for face profiles or intraoral photos. The
                  visit usually includes a thorough cleaning and is followed by
                  advice on any additional procedures you might need.
                </Text>
                <Text as={"h4"} fontWeight={800}>
                  What does a thorough cleaning of the mouth mean?
                </Text>
                <Text as={"h4"} mt={6}>
                  A thorough cleaning is a standard procedure that does not
                  require special medication. The dentist uses scalers or sonic
                  handpieces to remove plaque and built-up calculus, followed by
                  flossing and polishing the teeth.
                </Text>
                <Text as={"h4"} fontWeight={800}>
                  What is the difference between regular and deep cleaning?
                </Text>
                <Text as={"h4"} mt={6}>
                  The main difference between regular and deep cleaning is that
                  deep cleaning is more extensive and is performed when
                  periodontal issues such as deep pockets and bone loss are
                  detected. A maintenance schedule of every three months is
                  usually recommended after a deep cleaning.
                </Text>
                <Divider mt={8} mb={4} />
              </Flex>
            </Flex>
            <Flex
              pt={6}
              gap={isLaptop ? 4 : 10}
              justifyContent={"space-between"}
              borderTop={"1px #963f36 solid"}
              flexDir={isLaptop ? "column" : "row"}
            >
              <Text as={"h1"} fontWeight={800} width={"100%"}>
                Dentures
              </Text>
              <Flex width={"100%"} flexDir={"column"}>
                <Text as={"h4"} fontWeight={800}>
                  What are dentures, and what are their different variants?
                </Text>
                <Text as={"h4"} mt={6}>
                  Dentures are a maintainable, detachable, and fixed tooth
                  replacement solution that is gaining popularity among people
                  struggling with tooth decay and other reasons. Dentures
                  enhance your look, including your smiling features providing
                  you with an overall attractive persona. The two basic types of
                  dentures are partial and complete dentures.
                </Text>
                <Text as={"h4"} fontWeight={800}>
                  When should you go for Partial Dentures?
                </Text>
                <Text as={"h4"} mt={6}>
                  If you are struggling with just a few missing teeth, the
                  perfect solution for you is partial dentures. These partial
                  dentures are held in place by the base that matches the color
                  of your gums to ensure a natural look. If you have a few
                  teeth, getting partial dentures is bound to solve the problem
                  for you!
                </Text>
                <Text as={"h4"} fontWeight={800}>
                  When are complete dentures a better option?
                </Text>
                <Text as={"h4"} mt={6}>
                  Complete dentures are used when all of your teeth have either
                  decayed or been extracted. In recent years, technology has
                  progressed, making them more convenient and comfortable than
                  they used to be. These dentures are made according to your
                  specifics which also makes them look natural and beautiful .
                </Text>
                <Divider mt={8} mb={4} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </DigiLayout>
  );
};

export default ClinicServices;
