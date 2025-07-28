import React, { useState } from 'react';
import {
  Box,
  Input,
  Heading,
  Text,
  Link,
  VStack,
  Collapse,
  useColorModeValue,
} from '@chakra-ui/react';

const articles = [
  {
    title: 'Introduction to React',
    summary: 'React is a JavaScript library for building user interfaces...',
    link: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    title: 'Python Basics',
    summary: 'Python is an interpreted, high-level and general-purpose programming language...',
    link: 'https://www.python.org/about/gettingstarted/',
  },
  {
    title: 'Java Programming Language',
    summary: 'Java is a high-level, class-based, object-oriented programming language...',
    link: 'https://www.geeksforgeeks.org/java/',
  },
  {
    title: 'Node.js Fundamentals',
    summary: 'Node.js is an open-source, cross-platform JavaScript runtime...',
    link: 'https://nodejs.org/en/docs/',
  },
  {
    title: 'Go Tutorials',
    summary: 'Go is geared to develop highly reliable concurrent applications...',
    link: 'https://go.dev/doc/tutorial/',
  },
  {
    title: 'SQL Basics',
    summary: 'SQL is a domain-specific language used in programming for data...',
    link: 'https://www.javatpoint.com/sql-tutorial',
  },
  {
    title: 'Git Version Control',
    summary: 'Git is a distributed version control system for tracking changes in source code...',
    link: 'https://git-scm.com/doc',
  },
  {
    title: 'Modern JavaScript Tutorial',
    summary: 'Advanced JavaScript concepts include closures, promises, async/await...',
    link: 'https://javascript.info/',
  },
  {
    title: 'Ruby on Rails for Beginners',
    summary: 'Rails is a web app development framework written in Ruby...',
    link: 'https://guides.rubyonrails.org/getting_started.html',
  },
  {
    title: 'Computer Networking for Beginners',
    summary: 'Computer networking involves connecting multiple systems...',
    link: 'https://www.geeksforgeeks.org/basics-computer-networking/',
  },
  {
    title: 'Rust for Beginners',
    summary: 'Rust is used for building operating systems, kernels, or low-level components...',
    link: 'https://www.rust-lang.org/learn/get-started',
  },
];

const Notes = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleExpanded = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cardBg = useColorModeValue('white', 'gray.800');
  const cardText = useColorModeValue('gray.800', 'gray.200');
  const cardHover = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box py={10} px={4} minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
      <Box maxW="800px" mx="auto" w="100%">
        <Input
          placeholder="Search notes..."
          mb={6}
          size="lg"
          borderRadius="md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          bg="white"
          borderColor="gray.300"
        />

        <VStack spacing={6} align="stretch">
          {filteredArticles.map((article, index) => (
            <Box
              key={index}
              bg={cardBg}
              p={5}
              borderRadius="lg"
              shadow="md"
              cursor="pointer"
              transition="all 0.2s ease-in-out"
              _hover={{ bg: cardHover }}
              onClick={() => toggleExpanded(index)}
            >
              <Heading fontSize="xl" color="red.500" mb={2}>
                {article.title}
              </Heading>
              <Collapse in={expandedIndex === index}>
                <Text fontSize="md" color={cardText} mb={2}>
                  {article.summary}
                </Text>
                <Link
                  href={article.link}
                  isExternal
                  fontWeight="bold"
                  color="blue.500"
                  _hover={{ color: 'blue.700' }}
                >
                  Read More...
                </Link>
              </Collapse>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Notes;
