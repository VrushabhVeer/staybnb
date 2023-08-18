import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Address = () => {
  return (
    <Box w={{ base: "90%", md: "45%" }} m="auto" mt="10">
      <Text fontWeight="700" fontSize={{ base: "25px", md: "30px" }}>
        Where's your place located?
      </Text>

      <Stack mt="6" w="100%">
        <Box>
          <Input
            border="1px solid #444444"
            size="lg"
            fontSize="16px"
            _hover={{ border: "1px solid #444444" }}
            placeholder="House,flat,building, etc"
          />
        </Box>
        <Box mt="2">
          <Input
            border="1px solid #444444"
            size="lg"
            fontSize="16px"
            _hover={{ border: "1px solid #444444" }}
            placeholder="Street address"
          />
        </Box>
        <Box mt="2">
          <Input
            border="1px solid #444444"
            size="lg"
            fontSize="16px"
            _hover={{ border: "1px solid #444444" }}
            placeholder="Landmark"
          />
        </Box>
        <Box mt="2">
          <Input
            border="1px solid #444444"
            size="lg"
            fontSize="16px"
            _hover={{ border: "1px solid #444444" }}
            placeholder="City"
          />
        </Box>
        <Box mt="2">
          <Input
            border="1px solid #444444"
            size="lg"
            fontSize="16px"
            _hover={{ border: "1px solid #444444" }}
            placeholder="Pin Code"
          />
        </Box>
        <Box mt="2">
          <Input
            border="1px solid #444444"
            size="lg"
            fontSize="16px"
            _hover={{ border: "1px solid #444444" }}
            placeholder="State"
          />
        </Box>

        <Link to="/amenities">
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

export default Address;
