import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
  keyframes,
} from '@chakra-ui/react';

// Background animation keyframes
const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Home = () => {
  const gradientBg = useColorModeValue(
    'linear-gradient(270deg, #f8f8f8, #ffffff, #e2e8f0)',
    'linear-gradient(270deg, #1A202C, #2D3748, #4A5568)'
  );

  return (
    <Box
      position="relative"
      height="100vh"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      {/* Animated Background */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient={gradientBg}
        backgroundSize="400% 400%"
        animation={`${gradientMove} 10s ease infinite`}
        zIndex={0}
      />

      {/* Content */}
      <Box zIndex="1" textAlign="center" px={4}>
        <Heading
          as="h1"
          fontSize={["2xl", "4xl", "5xl"]}
          fontWeight="bold"
          mb={4}
        >
          Welcome To <span style={{ color: '#FF0000' }}>➡</span> Code
          <span style={{ color: '#FFA500' }}>Verse</span>
        </Heading>

        <Text fontSize={["md", "lg", "2xl"]} mb={8} color="gray.500">
          Learn, Practice & Explore the World of Coding...
        </Text>

        {/* CTA Buttons */}
        <Box display="flex" justifyContent="center" gap={4} flexWrap="wrap">
          <Link to="/code-editor">
            <Button
              bg="black"
              color="white"
              _hover={{ bg: 'white', color: 'black', transform: 'scale(1.05)' }}
              _active={{ transform: 'scale(0.95)' }}
              borderRadius="full"
              px={6}
              py={2}
              boxShadow="lg"
              transition="all 0.3s"
            >
              Workspace
            </Button>
          </Link>

          <Link to="/youtube-learning">
            <Button
              bg="black"
              color="white"
              _hover={{ bg: 'white', color: 'black', transform: 'scale(1.05)' }}
              _active={{ transform: 'scale(0.95)' }}
              borderRadius="full"
              px={6}
              py={2}
              boxShadow="lg"
              transition="all 0.3s"
            >
              Learn
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
