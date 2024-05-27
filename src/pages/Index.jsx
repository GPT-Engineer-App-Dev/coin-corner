import { Box, Container, Flex, Heading, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="#004E7C" color="white" py={4}>
        <Flex justify="space-between" align="center" px={6}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Financial Times
          </Heading>
          <Flex>
            {["Home", "World", "Business", "Markets", "Opinion", "Tech"].map((section) => (
              <Link
                as={RouterLink}
                to={`/${section.toLowerCase()}`}
                px={3}
                py={2}
                rounded={"md"}
                _hover={{ bg: "gray.700" }}
                key={section}
              >
                {section}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box bg="#F3F3F3" py={10}>
        <Container maxW="container.lg">
          <VStack spacing={4} align="start">
            <Heading as="h2" size="xl">
              Featured Article Headline
            </Heading>
            <Text fontSize="lg">
              This is a brief description of the featured article. It provides an overview of the main points and entices the reader to click through to read more.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Grid Layout for Additional Articles */}
      <Container maxW="container.lg" py={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" rounded="md">
              <Heading as="h3" size="md" mb={2}>
                Article Title {index + 1}
              </Heading>
              <Text>
                This is a brief summary of the article. It gives the reader a quick overview of the content.
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="#004E7C" color="white" py={6}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
            <Flex>
              {["About Us", "Contact", "Privacy Policy", "Terms of Service"].map((link) => (
                <Link
                  as={RouterLink}
                  to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                  px={3}
                  key={link}
                >
                  {link}
                </Link>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;