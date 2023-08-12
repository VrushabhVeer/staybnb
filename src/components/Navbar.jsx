import {
  Box,
  Flex,
  HStack,
  Text,
  IconButton,
  useDisclosure,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logo from "../assets/location.png";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={"gray.50"}
        px={{ base: "5", md: "20" }}
        position={"sticky"}
        top={0}
        zIndex="999"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            variant="ghost"
            _hover={{ variant: "ghost" }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Link to="/">
            <Flex alignItems="center">
              <Image w={{ base: "6", md: "7" }} src={logo} alt="logo" />
              <Text
                mt="2"
                fontFamily="Khand"
                fontWeight="700"
                letterSpacing="0.5px"
                fontSize={{ base: "23px", md: "26px" }}
                color="#1b9dff"
              >
                staybnb
              </Text>
            </Flex>
          </Link>

          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Text>Home</Text>
            <Text>About</Text>
            <Text>Tasks</Text>
            <Text>Others</Text>
          </HStack>

          <Link to="/login">Login</Link>
        </Flex>

        {isOpen ? (
          <Box pb={5} pt={5} ml={3} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Text>Home</Text>
              <Text>About</Text>
              <Text>Tasks</Text>
              <Text>Others</Text>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
