import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ListProperty = () => {
  return (
    <Flex
      w={{ base: "90%", md: "85%" }}
      alignItems="center"
      m="auto"
      mt={{ base: "10", md: "10" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box w="100%">
        <Text fontWeight="700" fontSize={{ base: "30px", md: "38px" }}>
          Tell us about your place
        </Text>
        <Text>
          Share some basic info, such as where it is and how many guests can
          stay.
          <br />
          In this step, we'll ask you which type of property you have and if
          guests will book the entire place or just a room. Then let us know the
          location and how many guests can stay.
        </Text>

        <Link to="/structure">
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
            Get Started
          </Button>
        </Link>
      </Box>

      <Box w="100%">
        <video
          src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high"
          autoPlay
          muted
          width="100%"
        />
      </Box>
    </Flex>
  );
};

export default ListProperty;
