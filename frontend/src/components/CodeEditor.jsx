import React, { useRef, useState } from "react";
import {
  Box,
  Flex,
  Tooltip,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import OutputConsole from "./OutputConsole";
import CodeRunnerButton from "./CodeRunnerButton";
import LoadCodeButton from "./LoadCodeButton";
import SaveCodeButton from "./SaveCodeButton";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("java");
  const [output, setOutput] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);

  const sidebarBg = useColorModeValue("gray.100", "gray.800");
  const buttonBg = useColorModeValue("white", "gray.700");
  const hoverBg = useColorModeValue("cyan.100", "cyan.600");

  const isMobile = useBreakpointValue({ base: true, md: false });
  const codeEditorWidth = isMobile ? "100%" : "65%";
  const consoleWidth = isMobile ? "100%" : "35%";

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (lang) => {
    setLanguage(lang);
    setValue(CODE_SNIPPETS[lang]);
  };

  const handleButtonClick = (btn) => setSelectedButton(btn);

  return (
    <Flex
      direction={isMobile ? "column" : "row"}
      height="100vh"
      bg={useColorModeValue("gray.50", "gray.900")}
      overflow="hidden"
    >
      {/* Sidebar */}
      <Box
        bg={sidebarBg}
        minW={isMobile ? "100%" : "60px"}
        p={4}
        borderRight={isMobile ? "none" : "1px solid"}
        borderBottom={isMobile ? "1px solid" : "none"}
        borderColor="gray.600"
      >
        <Flex
          direction={isMobile ? "row" : "column"}
          align="center"
          justify="space-around"
          gap={4}
        >
          <Tooltip label="Load Code">
            <Box>
              <LoadCodeButton
                onLoadCode={(code) => setValue(code)}
                onClick={() => handleButtonClick("load")}
                bg={selectedButton === "load" ? hoverBg : buttonBg}
                p={2}
                borderRadius="md"
                _hover={{ bg: hoverBg }}
              />
            </Box>
          </Tooltip>

          <Tooltip label="Save Code">
            <Box>
              <SaveCodeButton
                code={value}
                language={language}
                onClick={() => handleButtonClick("save")}
                bg={selectedButton === "save" ? hoverBg : buttonBg}
                p={2}
                borderRadius="md"
                _hover={{ bg: hoverBg }}
              />
            </Box>
          </Tooltip>

          <Tooltip label="Select Language">
            <Box>
              <LanguageSelector language={language} onSelect={onSelect} />
            </Box>
          </Tooltip>

          <Tooltip label="Run Code">
            <Box>
              <CodeRunnerButton
                editorRef={editorRef}
                language={language}
                setValue={setOutput}
                onClick={() => handleButtonClick("run")}
                bg={selectedButton === "run" ? hoverBg : buttonBg}
                p={2}
                borderRadius="md"
                _hover={{ bg: hoverBg }}
              />
            </Box>
          </Tooltip>
        </Flex>
      </Box>

      {/* Code Editor */}
      <Box w={codeEditorWidth} p={4} overflow="hidden">
        <Editor
          options={{ minimap: { enabled: false } }}
          theme="vs-dark"
          language={language}
          defaultValue={CODE_SNIPPETS[language]}
          onMount={onMount}
          value={value}
          onChange={(val) => setValue(val)}
          height="100%"
        />
      </Box>

      {/* Output Console */}
      <Box
        w={consoleWidth}
        bg="gray.800"
        p={4}
        color="white"
        overflowY="auto"
        borderLeft={isMobile ? "none" : "1px solid"}
        borderColor="gray.700"
      >
        <OutputConsole output={output} />
      </Box>
    </Flex>
  );
};

export default CodeEditor;
