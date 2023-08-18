import { Box, Radio, Flex, Input, Stack, Text, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Price() {
    return (
        <Box w={{ base: "90%", md: "45%" }} m="auto" mt="10">
            <Text fontWeight="700" fontSize={{ base: "25px", md: "30px" }}>
                Now, set your price
            </Text>
            <Text color="grey" mt="1" fontSize="15px">
                You can change it anytime.
            </Text>

            <Box mt="6" w="100%">
                <Input
                    border="1px solid #444444"
                    size="lg"
                    _hover={{ border: "1px solid #444444" }}
                    placeholder="Add yor price"
                />
            </Box>

            <Stack mt={{ base: "10", md: "20" }} w="100%">
                <Text fontWeight="700" fontSize={{ base: "25px", md: "30px" }}>
                    Add Discounts
                </Text>
                <Text color="grey" fontSize="15px">
                    Discounts can help your place to stand out to get booked faster.
                </Text>
                <Flex
                    border="1px solid #cecece"
                    borderRadius="10"
                    _hover={{ border: "1px solid" }}
                    alignItems="center"
                    justifyContent="space-between"
                    p="5"
                >
                    <Box>
                        <Text fontWeight="600">15%</Text>
                    </Box>
                    <Box>
                        <Text fontWeight="600">New listing promotion</Text>
                    </Box>
                    <Box mt="1">
                        <Radio size="lg" />
                    </Box>
                </Flex>

                <Flex
                    border="1px solid #cecece"
                    borderRadius="10"
                    _hover={{ border: "1px solid" }}
                    alignItems="center"
                    justifyContent="space-between"
                    p="5"
                >
                    <Box>
                        <Text fontWeight="600">20%</Text>
                    </Box>
                    <Box>
                        <Text fontWeight="600">Weekly discounts</Text>
                    </Box>
                    <Box mt="1">
                        <Radio size="lg" />
                    </Box>
                </Flex>

                <Flex
                    border="1px solid #cecece"
                    borderRadius="10"
                    _hover={{ border: "1px solid" }}
                    alignItems="center"
                    justifyContent="space-between"
                    p="5"
                >
                    <Box>
                        <Text fontWeight="600">25%</Text>
                    </Box>
                    <Box>
                        <Text fontWeight="600">Monthly discounts</Text>
                    </Box>
                    <Box mt="1">
                        <Radio size="lg" />
                    </Box>
                </Flex>

                <Link to="/publish">
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
}

export default Price;
