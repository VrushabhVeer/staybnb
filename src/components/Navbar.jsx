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
  Menu,
  MenuButton,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
  Button,
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
              <Link to="/stays">
                <Text>Find Stay's</Text>
              </Link>
              <Link to="/list_property">
                <Text>List your property</Text>
              </Link>
              <Link to="/login">
                <Text>Login</Text>
              </Link>
            </HStack>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size="sm" src={user} />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <Center>
                  <Text fontWeight="500">Username</Text>
                </Center>

                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={10} pt={5} ml={3} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={5} fontWeight="500">
              <Link to="/">
                <Text>Home</Text>
              </Link>
              <Link to="/stays">
                <Text>Find Stay's</Text>
              </Link>
              <Link to="/list_property">
                <Text>List your property</Text>
              </Link>
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
