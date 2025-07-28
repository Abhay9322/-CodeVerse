import React from "react";
import { Button, Icon, Tooltip, Box, useColorModeValue } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const LoadCodeButton = ({ onLoadCode }) => {
  // Handle file upload logic
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        onLoadCode(content); // Send file content to parent
      };
      reader.readAsText(file);
    } catch (error) {
      console.error("Failed to read file:", error);
    }
  };

  const hoverBg = useColorModeValue("blue.100", "blue.900");

  return (
    <Tooltip label="Load Code from File" aria-label="Load Code" placement="bottom" hasArrow>
      <Box as="span" position="relative">
        {/* Hidden input field for selecting file */}
        <input
          type="file"
          id="load-file"
          accept=".txt,.js,.jsx,.java,.py"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        {/* Button that triggers hidden file input */}
        <Button
          onClick={() => document.getElementById("load-file").click()}
          colorScheme="blue"
          variant="outline"
          size="sm"
          leftIcon={<Icon as={FaUpload} />}
          _hover={{ bg: hoverBg }}
          transition="all 0.2s ease-in-out"
        >
          Load
        </Button>
      </Box>
    </Tooltip>
  );
};

export default LoadCodeButton;
