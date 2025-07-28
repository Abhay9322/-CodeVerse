import React from 'react';
import { Flex, Link, Spacer, Box } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation(); // Get current route path

  const navItems = [
    { label: "HOME", to: "/" },
    { label: "WORKSPACE", to: "/code-editor" },
    { label: "CHAT", to: "/online-chat-bot" },
    { label: "LEARN", to: "/youtube-learning" },
    { label: "NOTES", to: "/notes" },
  ];

  return (
    <Flex
      as="nav"
      p={4}
      bg="white"
      boxShadow="md"
      alignItems="center"
      height="60px"
      position="sticky"
      top={0}
      zIndex={1000}
    >
      {/* Logo or App Name */}
      <Link
        as={RouterLink}
        to="/"
        fontWeight="bold"
        fontSize="xl"
        color="blue.600"
        _hover={{ textDecoration: "none", color: "blue.800" }}
      >
        CodeVerse
      </Link>

      <Spacer />

      {/* Navigation Links */}
      <Box>
        {navItems.map((item) => (
          <Link
            key={item.to}
            as={RouterLink}
            to={item.to}
            mx={3}
            fontWeight="medium"
            color={location.pathname === item.to ? "red.500" : "gray.700"}
            borderBottom={location.pathname === item.to ? "2px solid red" : "none"}
            _hover={{
              color: "red.400",
              textDecoration: "none",
            }}
            transition="color 0.2s ease"
          >
            {item.label}
          </Link>
        ))}
      </Box>
    </Flex>
  );
};

export default NavBar;
