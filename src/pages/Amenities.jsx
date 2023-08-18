import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import wifi from "../assets/wifi-signal.png";
import tv from "../assets/television.png";
import washing from "../assets/washing-machine.png";
import pool from "../assets/swim.png";
import kitchen from "../assets/kitchen-set.png";
import ac from "../assets/air-conditioner.png";
import workspace from "../assets/desk.png";
import bathtub from "../assets/bath-tub.png";
import bbq from "../assets/grill.png";
import { Link } from "react-router-dom";

const Amenities = () => {
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
          onClick={() => handleBoxClick("Wifi")}
        >
          <Image
            src={wifi}
            w={{ base: "10", md: "13" }}
            alt="wifi"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            Wifi
          </Text>
        </Box>

        <Box
          border="1px solid #cecece"
          borderRadius="10"
          p="5"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("TV")}
        >
          <Image
            src={tv}
            w={{ base: "10", md: "13" }}
            alt="tv"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            TV
          </Text>
        </Box>

        <Box
          border="1px solid #cecece"
          borderRadius="10"
          p="5"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("Washing machine")}
        >
          <Image
            src={washing}
            w={{ base: "10", md: "13" }}
            alt="washing"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            Washing machine
          </Text>
        </Box>

        <Box
          border="1px solid #cecece"
          borderRadius="10"
          p="5"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("Kitchen")}
        >
          <Image
            src={kitchen}
            w={{ base: "10", md: "13" }}
            alt="kitchen"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            Kitchen
          </Text>
        </Box>

        <Box
          border="1px solid #cecece"
          borderRadius="10"
          p="5"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("Air Conditioning")}
        >
          <Image
            src={ac}
            w={{ base: "10", md: "13" }}
            alt="air conditioner"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            Air conditioning
          </Text>
        </Box>

        <Box
          border="1px solid #cecece"
          borderRadius="10"
          p="5"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("Workspace")}
        >
          <Image
            src={workspace}
            w={{ base: "10", md: "13" }}
            alt="workspace"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            Workspace
          </Text>
        </Box>

        <Box
          border="1px solid #cecece"
          borderRadius="10"
          p="5"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("Pool")}
        >
          <Image
            src={pool}
            w={{ base: "10", md: "13" }}
            alt="pool"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            Pool
          </Text>
        </Box>

        <Box
          border="1px solid #cecece"
          borderRadius="10"
          p="5"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("Bath tub")}
        >
          <Image
            src={bathtub}
            w={{ base: "10", md: "13" }}
            alt="bathtub"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            Bath tub
          </Text>
        </Box>

        <Box
          border="1px solid #cecece"
          borderRadius="10"
          p="5"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("BBQ grill")}
        >
          <Image
            src={bbq}
            w={{ base: "10", md: "13" }}
            alt="bbq"
            loading="lazy"
          />
          <Text fontWeight="500" mt="2" fontSize={{ base: "15px", md: "16px" }}>
            BBQ grill
          </Text>
        </Box>
      </SimpleGrid>

      <Link to="/photos">
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

export default Amenities;
