import {
  Box,
  Flex,
  HStack,
  Text,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logo from "../assets/location.png";
import user from "../assets/user.png";

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

          <HStack as={"nav"} spacing={5}>
            <HStack
              fontWeight="500"
              display={{ base: "none", md: "flex" }}
              spacing={6}
            >
              <Text>Find Stay's</Text>
              <Text>List your property</Text>
              <Link to="/login">
                <Text>Login</Text>
              </Link>
            </HStack>
            <Avatar size="sm" src={user} />
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={10} pt={5} ml={3} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={5} fontWeight="500">
              <Text>Home</Text>
              <Text>Find Stay's</Text>
              <Text>List your property</Text>
              <Link to="/login">
                <Text>Login</Text>
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
