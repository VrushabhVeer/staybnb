import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Photos = () => {
  return (
    <Box w={{ base: "90%", md: "50%" }} m="auto" mt="10">
      <Text fontWeight="700" fontSize={{ base: "25px", md: "30px" }}>
        Add some photos of your house
      </Text>

      <Flex
        border="1px solid #cecece"
        borderRadius="10"
        h="200"
        p="10"
        mt="6"
        alignItems="center"
        justifyContent="center"
        fontSize="30px"
      >
        +
      </Flex>
      <Link to="/price">
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

export default Photos;
