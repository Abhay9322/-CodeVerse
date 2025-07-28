import React from "react";
import { Button, Icon, Tooltip } from "@chakra-ui/react";
import { FaSave } from "react-icons/fa";

const SaveCodeButton = ({ code, language }) => {
  // Map each language to a file extension
  const getFileExtension = (lang) => {
    const extensions = {
      python: "py",
      javascript: "js",
      java: "java",
      php: "php",
      csharp: "cs",
      typescript: "ts",
      cpp: "cpp",
      c: "c",
      ruby: "rb",
      go: "go",
    };
    return extensions[lang.toLowerCase()] || "txt"; // fallback to .txt if unknown
  };

  // Trigger browser download
  const handleSave = () => {
    const fileExtension = getFileExtension(language);
    const filename = `code.${fileExtension}`;
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Tooltip label="Save Code" aria-label="Save Code" hasArrow placement="bottom">
      <Button
        onClick={handleSave}
        colorScheme="blue"
        variant="outline"
        size="sm"
        aria-label="Save Code"
        _hover={{ bg: "gray.100", color: "gray.700" }}
      >
        <Icon as={FaSave} boxSize={4} />
      </Button>
    </Tooltip>
  );
};

export default SaveCodeButton;
