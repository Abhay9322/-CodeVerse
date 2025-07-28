import React from "react";
import {
  Box,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGlobe } from "react-icons/fa";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "red";

const LanguageSelector = ({ language, onSelect }) => {
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const hoverBg = useColorModeValue("gray.100", "gray.600");

  return (
    <Menu isLazy>
      <Tooltip label="Select Language" hasArrow placement="right">
        <MenuButton
          as={Button}
          size="sm"
          variant="ghost"
          aria-label="Select Language"
          iconSpacing={0}
          _hover={{ bg: hoverBg }}
          _active={{ bg: hoverBg }}
        >
          <Center>
            <FaGlobe size={18} />
          </Center>
        </MenuButton>
      </Tooltip>

      <MenuList bg={bgColor} zIndex="dropdown">
        {languages.map(([lang, version]) => (
          <MenuItem
            key={lang}
            fontSize="sm"
            fontWeight={lang === language ? "bold" : "normal"}
            color={lang === language ? ACTIVE_COLOR : "inherit"}
            bg={lang === language ? useColorModeValue("gray.100", "gray.600") : "transparent"}
            _hover={{ bg: hoverBg, color: ACTIVE_COLOR }}
            onClick={() => onSelect(lang)}
          >
            {lang.toUpperCase()} &nbsp;
            <Box as="span" fontSize="xs" color="gray.500">
              ({version})
            </Box>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSelector;
