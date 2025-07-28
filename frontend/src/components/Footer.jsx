import React from "react";
import { FaGlobe } from "react-icons/fa";
import {
  Box,
  Container,
  Flex,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  // {
  //   icon: FaFacebook,
  //   href: "https://www.facebook.com/abhinabaroy123",
  //   label: "Facebook",
  //   color: "#3b5998",
  // },
  {
    icon: FaGlobe,
    href: "https://abhay-portfolio-zmrl.onrender.com", // 🔗 Yahan apna actual portfolio link daaliye
    label: "Portfolio",
    color: "#3182CE", // 🔵 Blue tone (you can change it)
  },
  // {
  //   icon: FaXTwitter,
  //   href: "https://twitter.com/_abhinaba_roy_",
  //   label: "Twitter",
  //   color: "#000000",
  // },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/abhay-suryawanshi-a0b9632b1",
    label: "LinkedIn",
    color: "#0a66c2",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Abhay9322",
    label: "GitHub",
    color: "#000000",
  },
  // {
  //   icon: FaInstagram,
  //   href: "https://www.instagram.com/_mattersmore_",
  //   label: "Instagram",
  //   color: "#E1306C",
  // },
];

const Footer = () => {
  const iconColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      py={8}
      borderTop="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={iconColor}
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
        >
          {/* Social Icons */}
          <Flex gap={5} mb={{ base: 4, md: 0 }}>
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                isExternal
                aria-label={social.label}
                _hover={{ color: social.color, transform: "scale(1.2)" }}
                transition="all 0.3s"
              >
                <social.icon size={24} />
              </Link>
            ))}
          </Flex>

          {/* Copyright */}
          <Text fontSize="sm" textAlign="center">
            &copy; {new Date().getFullYear()} Abhay Suryawanshi —{" "}
            <Text as="span" color="red.400" display="inline">
              All Rights Reserved.
            </Text>
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
