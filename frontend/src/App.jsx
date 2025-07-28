import React from 'react';
import {
  ChakraProvider,
  Container,
  Box,
  useColorMode,
  extendTheme
} from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/Home";
import CodeEditor from "./components/CodeEditor";
import OnlineChatBot from "./components/OnlineChatBot";
import YouTubeLearning from "./components/YouTubeLearning";
import Notes from "./components/Notes";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

// Custom theme using Chakra UI
const theme = extendTheme({
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.800",
      },
    },
  },
});

// Animation wrapper component for smooth page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/code-editor" element={<PageWrapper><CodeEditor /></PageWrapper>} />
        <Route path="/online-chat-bot" element={<PageWrapper><OnlineChatBot /></PageWrapper>} />
        <Route path="/youtube-learning" element={<PageWrapper><YouTubeLearning /></PageWrapper>} />
        <Route path="/notes" element={<PageWrapper><Notes /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

// Wrapper to apply animation on route change
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Container
          maxW="100vw"
          p={0}
          display="flex"
          flexDirection="column"
          minHeight="100vh"
          overflow="hidden"
          bg="gray.100"
        >
          <NavBar />
          <Box flex="1" px={4} py={6}>
            <AnimatedRoutes />
          </Box>
          <Footer />
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
