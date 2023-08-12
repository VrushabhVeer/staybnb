import { Box, Button, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box w={{ base: "90%", md: "35%" }} m="auto" mt={{ base: "10", md: "20" }}>
      <Box textAlign="center">
        <Text fontSize={{ base: "26px", md: "36px" }} fontWeight="700">
          Welcome Back
        </Text>
        <Text>Login to your planr account.</Text>
      </Box>
      <Box mt="8">
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
          Login
        </Button>
      </Box>

      <Box mt="7">
        <Text>
          Fisrt time user, please <Link to="/signup">Signup.</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
