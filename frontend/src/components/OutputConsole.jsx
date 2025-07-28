import React from "react";
import { Box, Text, useColorModeValue, VStack } from "@chakra-ui/react";

const OutputConsole = ({ output }) => {
  const consoleBgColor = useColorModeValue("#1a1a1a", "#1a1a1a"); // Dark background
  const consoleTextColor = useColorModeValue("green.200", "green.200"); // Light green text
  const consoleHeaderBg = useColorModeValue("gray.800", "gray.800");

  return (
    <VStack
      align="stretch"
      spacing={0}
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.600"
      overflow="hidden"
      boxShadow="lg"
      h="100%"
    >
      <Box
        bg={consoleHeaderBg}
        color="white"
        px={4}
        py={2}
        fontWeight="bold"
        fontSize="md"
        borderBottom="1px solid"
        borderColor="gray.600"
      >
        🖥️ Output Console
      </Box>
      <Box
        flex="1"
        overflowY="auto"
        bg={consoleBgColor}
        color={consoleTextColor}
        px={4}
        py={3}
        fontFamily="monospace"
        fontSize="md"
        whiteSpace="pre-wrap"
        wordBreak="break-word"
        h="90vh"
      >
        {output?.trim() ? output : "No output yet..."}
      </Box>
    </VStack>
  );
};

export default OutputConsole;

