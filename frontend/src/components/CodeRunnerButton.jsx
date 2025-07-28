import React, { useState } from "react";
import { Button, Icon, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { executeCode } from "../api";

const CodeRunnerButton = ({ editorRef, language, setValue }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRunCode = async () => {
    const sourceCode = editorRef.current?.getValue();
    if (!sourceCode) return;

    setIsLoading(true);
    try {
      const { run: result } = await executeCode(language, sourceCode);
      setValue(result.output);
    } catch (err) {
      console.error("Code execution failed:", err);
      setValue("⚠️ Error while running code.");
    } finally {
      setIsLoading(false);
    }
  };

  const bgColor = useColorModeValue("blue.100", "blue.700");
  const hoverColor = useColorModeValue("blue.200", "blue.600");

  return (
    <Tooltip label="Run Code" placement="bottom" hasArrow>
      <Button
        onClick={handleRunCode}
        isLoading={isLoading}
        loadingText="Running..."
        leftIcon={<FaPlay />}
        size="sm"
        variant="solid"
        bg={bgColor}
        _hover={{ bg: hoverColor }}
        color="white"
        borderRadius="md"
        shadow="md"
        transition="all 0.2s ease-in-out"
      >
        Run
      </Button>
    </Tooltip>
  );
};

export default CodeRunnerButton;
