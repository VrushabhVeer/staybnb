import { Box, Button, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Box w={{ base: "90%", md: "35%" }} m="auto" mt={{ base: "10", md: "20" }}>
      <Box textAlign="center">
        <Text fontSize={{ base: "26px", md: "36px" }} fontWeight="bold">
          Create Account
        </Text>
        <Text>Create your account on planr.</Text>
      </Box>
      <Box mt="8">
        <Input
          border="1px solid #636860"
          _hover={{ border: "1px solid #636860" }}
          placeholder="Full Name"
        />
      </Box>

      <Box mt="6">
        <Input
          border="1px solid #636860"
          _hover={{ border: "1px solid #636860" }}
          placeholder="Email"
        />
      </Box>

      <Box mt="6">
        <Input
          border="1px solid #636860"
          _hover={{ border: "1px solid #636860" }}
          placeholder="Password"
        />
      </Box>

      <Box mt="8">
        <Button
          bg="#2b8aff"
          _hover={{ bg: "#0050ff" }}
          color="white"
          fontWeight="normal"
          fontSize="16px"
          w="100%"
          size="lg"
        >
          Sign up
        </Button>
      </Box>

      <Box mt="7">
        <Text>
          If already user, please <Link to="/login">Login.</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Signup;
