import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Publish = () => {
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
          Finish up and publish
        </Text>
        <Text>
          You have completed your listing setup.
          
          confirm your listing and publish.
        </Text>

        <Link to="">
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
            Confirm
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

export default Publish;
