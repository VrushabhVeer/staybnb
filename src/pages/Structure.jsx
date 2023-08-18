import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import home from "../assets/home.png";
import flat from "../assets/building.png";
import hotel from "../assets/hotel.png";
import caravan from "../assets/caravan.png";
import yacht from "../assets/yacht.png";
import treeHouse from "../assets/tree-house.png";
import farmHouse from "../assets/farmhouse.png";
import container from "../assets/container.png";
import camping from "../assets/camping-tent.png";
import { Link } from "react-router-dom";

const Structure = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleBoxClick = (value) => {
    setSelectedValue(value);
    console.log(value);
  };

  console.log(selectedValue);

  return (
    <Box w={{ base: "90%", md: "50%" }} m="auto" mt="10">
      <Text fontWeight="700" fontSize={{ base: "25px", md: "30px" }}>
        Which of these best describes your place?
      </Text>
      <Text fontWeight="500" color="#0050ff" mt="2">
        {selectedValue}
      </Text>
      <SimpleGrid mt="6" columns={[2, null, 3]} spacing="40px">
        <Box
          border="1px solid #cecece"
          borderRadius="10"
          p="5"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("House")}
        >
          <Image
            src={home}
            w={{ base: "10", md: "13" }}
            alt="home"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            House
          </Text>
        </Box>
        <Box
          border="1px solid #cecece"
          borderRadius="10"
          p="5"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("Flat/Apartment")}
        >
          <Image
            src={flat}
            w={{ base: "10", md: "13" }}
            alt="flat"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            Flat/Apartment
          </Text>
        </Box>
        <Box
          border="1px solid #cecece"
          borderRadius="10"
          p="5"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("Hotel")}
        >
          <Image
            src={hotel}
            w={{ base: "10", md: "13" }}
            alt="hotel"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            Hotel
          </Text>
        </Box>
        <Box
          border="1px solid #cecece"
          borderRadius="10"
          p="5"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("Farm house")}
        >
          <Image
            src={farmHouse}
            w={{ base: "10", md: "13" }}
            alt="farmhouse"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            Farm House
          </Text>
        </Box>
        <Box
          border="1px solid #cecece"
          borderRadius="10"
          p="5"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("Tent")}
        >
          <Image
            src={camping}
            w={{ base: "10", md: "13" }}
            alt="camping"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            Tent
          </Text>
        </Box>
        <Box
          border="1px solid #cecece"
          borderRadius="10"
          p="5"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("Tree house")}
        >
          <Image
            src={treeHouse}
            w={{ base: "10", md: "13" }}
            alt="treeHouse"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            Tree House
          </Text>
        </Box>

        <Box
          border="1px solid #cecece"
          borderRadius="10"
          p="5"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("Caravan")}
        >
          <Image
            src={caravan}
            w={{ base: "10", md: "13" }}
            alt="caravan"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            Caravan
          </Text>
        </Box>
        <Box
          border="1px solid #cecece"
          borderRadius="10"
          p="5"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("Container")}
        >
          <Image
            src={container}
            w={{ base: "10", md: "13" }}
            alt="container"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            Container
          </Text>
        </Box>
        <Box
          border="1px solid #cecece"
          borderRadius="10"
          p="5"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("Yacht/Boat")}
        >
          <Image
            src={yacht}
            w={{ base: "10", md: "13" }}
            alt="yacht"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            Yacht/Boat
          </Text>
        </Box>
      </SimpleGrid>

      <Link to="/privacy_type">
        <Button
          bg="#131921"
          _hover={{ bg: "black" }}
          color="white"
          fontWeight="500"
          fontSize="16px"
          mt="8"
          px="8"
          size="lg"
        >
          Next
        </Button>
      </Link>
    </Box>
  );
};

export default Structure;
