import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import home from "../assets/home.png";
import sharing from "../assets/sharing.png";
import door from "../assets/open-door.png";
import { Link } from "react-router-dom";

const PrivacyType = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleBoxClick = (value) => {
    setSelectedValue(value);
    console.log(value);
  };

  console.log(selectedValue);

  return (
    <Box w={{ base: "90%", md: "50%" }} m="auto" mt="10">
      <Text fontWeight="700" fontSize={{ base: "25px", md: "30px" }}>
        What type of place will guests have?
      </Text>
      <Text fontWeight="500" color="#0050ff" mt="2">
        {selectedValue}
      </Text>

      <Stack mt="6" w="100%">
        <Flex
          border="1px solid #cecece"
          borderRadius="10"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("An entire place")}
          alignItems="center"
          justifyContent="space-between"
          gap="5"
          p="3"
        >
          <Box>
            <Text fontWeight="600" fontSize="17px">
              An entire place
            </Text>
            <Text color="gray" fontSize="15px">
              Guests have the whole place to themselves.
            </Text>
          </Box>
          <Box>
            <Image
              src={home}
              alt="house"
              w={{ base: "8", md: "13" }}
              loading="lazy"
            />
          </Box>
        </Flex>

        <Flex
          border="1px solid #cecece"
          borderRadius="10"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("A room")}
          mt="2"
          alignItems="center"
          justifyContent="space-between"
          gap="5"
          p="3"
        >
          <Box>
            <Text fontWeight="600" fontSize="17px">
              A room
            </Text>
            <Text color="gray" fontSize="15px">
              Guests have their own room in a home, plus access to shared
              spaces.
            </Text>
          </Box>
          <Box>
            <Image
              src={door}
              alt="door"
              w={{ base: "10", md: "13" }}
              loading="lazy"
            />
          </Box>
        </Flex>

        <Flex
          border="1px solid #cecece"
          borderRadius="10"
          _hover={{ border: "1px solid" }}
          onClick={() => handleBoxClick("A shared room")}
          mt="2"
          alignItems="center"
          justifyContent="space-between"
          gap="5"
          p="3"
        >
          <Box>
            <Text fontWeight="600" fontSize="17px">
              A shared room
            </Text>
            <Text color="gray" fontSize="15px">
              Guests sleep in a room or common area that may be shared with you
              or others.
            </Text>
          </Box>
          <Box>
            <Image
              src={sharing}
              alt="sharing"
              w={{ base: "12", md: "13" }}
              loading="lazy"
            />
          </Box>
        </Flex>

        <Link to="/address">
          <Button
            bg="#131921"
            _hover={{ bg: "black" }}
            color="white"
            fontWeight="500"
            fontSize="16px"
            mt="6"
            px="8"
            size="lg"
          >
            Next
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default PrivacyType;
