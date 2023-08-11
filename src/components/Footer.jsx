import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/location.png";

const Footer = () => {
  return (
    <>
      <Box mt="20" bg="gray.50" px="10" py={{base:"10", md:"20"}}>
        <SimpleGrid
          w={{ base: "none", md: "80%" }}
          m="auto"
          columns={[1, 2, 3, 4]}
          spacing={{ base: "30px", md: "50px" }}
        >
          <Stack align={"flex-start"}>
            <Text fontWeight="bold" fontSize={{ base: "16px", md: "17px" }}>
              Product
            </Text>
            <Text fontSize={{ base: "15px", md: "16px" }}>Overview</Text>
            <Text fontSize={{ base: "15px", md: "16px" }}>Features</Text>
            <Text fontSize={{ base: "15px", md: "16px" }}>Tutorials</Text>
            <Text fontSize={{ base: "15px", md: "16px" }}>Pricing</Text>
            <Text fontSize={{ base: "15px", md: "16px" }}>Releases</Text>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontWeight="bold" fontSize={{ base: "16px", md: "17px" }}>
              Company
            </Text>
            <Text fontSize={{ base: "15px", md: "16px" }}>About</Text>
            <Text fontSize={{ base: "15px", md: "16px" }}>Press</Text>
            <Text fontSize={{ base: "15px", md: "16px" }}>Careers</Text>
            <Text fontSize={{ base: "15px", md: "16px" }}>Contact</Text>
            <Text fontSize={{ base: "15px", md: "16px" }}>Partners</Text>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontWeight="bold" fontSize={{ base: "16px", md: "17px" }}>
              Support
            </Text>
            <Text fontSize={{ base: "15px", md: "16px" }}>Help Center</Text>
            <Text fontSize={{ base: "15px", md: "16px" }}>
              Terms of Service
            </Text>
            <Text fontSize={{ base: "15px", md: "16px" }}>Legal</Text>
            <Text fontSize={{ base: "15px", md: "16px" }}>Privacy Policy</Text>
            <Text fontSize={{ base: "15px", md: "16px" }}>Status</Text>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontWeight="bold" fontSize={{ base: "16px", md: "17px" }}>
              Follow Us
            </Text>
            <Flex gap="3" mt="3" fontSize="18">
              <i className="fa-brands fa-youtube" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-twitter" />
            </Flex>
          </Stack>
        </SimpleGrid>
      </Box>

      <Flex
        bg="gray.50"
        borderTop="1px solid #cecece"
        p="4"
        gap="1"
        justifyContent="center"
        m="auto"
        alignItems="center"
      >
        <Text fontSize="14px">© 2023 </Text>
        <Flex alignItems="center">
          <Image w="4" src={logo} alt="logo" />
          <Text fontSize="14px" fontWeight="bold" fontFamily="Bricolage Grotesque">
            staybnb,
          </Text>
        </Flex>
        <Text fontSize="14px"> Made by Vrushabh Veer.</Text>
      </Flex>
    </>
  );
};

export default Footer;
