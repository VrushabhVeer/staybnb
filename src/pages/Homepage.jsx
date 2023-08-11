import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import property from "../assets/stay-architecture.jpg";

const Homepage = () => {
  return (
    <>
      <Flex
        className="hero"
        w="100%"
        alignItems="center"
        flexDirection={{ base: "column-reverse", md: "row" }}
      >
        <Box w="100%">
          <Box
            w={{ base: "90%", md: "75%" }}
            m="auto"
            mt={{ base: "5", md: "0" }}
          >
            <Flex alignItems="center" gap="3">
              <Box color="#0050ff" fontSize="13px">
                #rent
              </Box>
              <Box color="#0050ff" fontSize="13px">
                #stay
              </Box>
              <Box color="#0050ff" fontSize="13px">
                #explore
              </Box>
            </Flex>
            <Text
              fontSize={{ base: "35px", md: "50px" }}
              w={{ base: "80%", md: "70%" }}
              lineHeight={{ base: "40px", md: "55px" }}
              mt="2"
              fontWeight="700"
            >
              Find a perfect place to stay.
            </Text>
            <Text mt="5" color="grey" fontSize="15px">
              Staybnb is an online marketplace that connects people who want to
              rent out their property with people who are looking for
              accommodations in specific locales. Staybnb offers people an easy,
              relatively stress-free way to earn some income from their
              property.
            </Text>

            <Button
              bg="#2b8aff"
              _hover={{ bg: "#0050ff" }}
              color="white"
              fontWeight="normal"
              fontSize="16px"
              mt="8"
              px="10"
              size="lg"
            >
              Discover stays
            </Button>
          </Box>
        </Box>
        <Box w="100%">
          <Image
            w="100%"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-867054237184940077/original/90346d51-2777-4000-8025-54d7e2023697.jpeg?im_w=1440"
            alt="hero"
            loading="lazy"
          />
        </Box>
      </Flex>

      {/* services */}

      <Box
        w={{ base: "90%", md: "85%" }}
        m="auto"
        mt={{ base: "10", md: "20" }}
      >
        <Text fontSize={{ base: "35px", md: "50px" }} fontWeight="700">
          Services
        </Text>

        <Flex
          alignItems="center"
          w="100%"
          mt="5"
          gap="10"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box w="100%">
            <Box w="10">
              <Image
                w="100%"
                src="https://forever.travel-assets.com/flex/flexmanager/images/2022/04/06/VRBO-shield-mark.svg"
                alt="shield"
                loading="lazy"
              />
            </Box>
            <Text fontWeight="bold" fontSize="17px" mt="3">
              Peace of mind
            </Text>
            <Text color="gray" fontSize="15px">
              Our Book with Confidence guarantee gives you 24/7 support
            </Text>
          </Box>

          <Box w="100%">
            <Box w="14">
              <Image
                w="100%"
                src="https://forever.travel-assets.com/flex/flexmanager/images/2022/04/06/VRBO-teapot-mark.svg"
                alt="teapot"
                loading="lazy"
              />
            </Box>
            <Text fontWeight="bold" fontSize="17px" mt="3">
              All the privacy of home
            </Text>
            <Text color="gray" fontSize="15px">
              Enjoy full kitchens, laundry, pools, yards and more
            </Text>
          </Box>

          <Box w="100%">
            <Box w="12">
              <Image
                w="100%"
                src="https://forever.travel-assets.com/flex/flexmanager/images/2022/04/06/VRBO-money-mark.svg"
                alt="money"
                loading="lazy"
              />
            </Box>
            <Text fontWeight="bold" fontSize="17px" mt="3">
              More for less
            </Text>
            <Text color="gray" fontSize="15px">
              More space, more privacy, more amenities — more value
            </Text>
          </Box>

          <Box w="100%">
            <Box w="12">
              <Image
                w="100%"
                src="https://forever.travel-assets.com/flex/flexmanager/images/2022/04/06/VRBO-heart-mark.svg"
                alt="heart"
                loading="lazy"
              />
            </Box>
            <Text fontWeight="bold" fontSize="17px" mt="3">
              A place for everyone
            </Text>
            <Text color="gray" fontSize="15px">
              We stand for diversity, inclusion and families everywhere.
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* rent your property */}

      <Box
        w={{ base: "90%", md: "85%" }}
        m="auto"
        mt={{ base: "10", md: "20" }}
        position="relative"
        textAlign="center"
      >
        <Image
          h={{ base: "70vh", md: "50vh", lg: "60vh" }}
          w="100%"
          objectFit="cover"
          src={property}
          alt="property"
          loading="lazy"
        />

        <Box
          position="absolute"
          top="20"
          left={{ base: "10", md: "20" }}
          textAlign="left"
        >
          <Text
            w={{ base: "80%", md: "50%" }}
            lineHeight={{ base: "40px", md: "55px" }}
            fontSize={{ base: "35px", md: "50px" }}
            fontWeight="700"
            color="white"
          >
            List your property on staybnb
          </Text>

          <Button
            bg="#2b8aff"
            _hover={{ bg: "#0050ff" }}
            color="white"
            fontWeight="normal"
            fontSize="16px"
            mt="5"
            size="lg"
          >
            List property
          </Button>
        </Box>

        <Text
          textAlign={{ base: "left", md: "center" }}
          fontSize={{ base: "18px", md: "20px" }}
          fontWeight="bold"
          mt="8"
        >
          The easy way to get more bookings
        </Text>

        <SimpleGrid
          columns={[1, 1, 2, 4]}
          spacing="40px"
          mt="5"
          textAlign="left"
        >
          <Box>
            <Text fontWeight="bold">Cost-effective advertising</Text>
            <Text mt="2" color="grey" fontSize="15px">
              With a free listing, you can advertise your rental with no upfront
              costs. Pay just 3% (excl. VAT) on confirmed bookings and manage
              everything through our easy-to-use dashboard.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Reach millions with Tripadvisor</Text>
            <Text mt="2" color="grey" fontSize="15px">
              Exposure to Tripadvisor’s global traveller audience comes free
              with your listing. Millions of people are searching for unique
              places to stay around the world. Why not add yours?
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold">List your home</Text>
            <Text mt="2" color="grey" fontSize="15px">
              Have a holiday rental, spare room or want to let out your own home
              while you’re away? Your ad can be online and ready to receive
              bookings in minutes. Give it a try.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Secure and simple</Text>
            <Text mt="2" color="grey" fontSize="15px">
              A Holiday Lettings listing gives you a secure and easy way to take
              bookings and payments online. Plus, it’s simple to create and
              update your advert.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Homepage;
