import { useState } from "react";
import { Container, Box, Flex, Text, useColorMode } from "@chakra-ui/react";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDark, setIsDark] = useState(colorMode === "dark");

  const handleToggleTheme = () => {
    toggleColorMode();
    setIsDark(!isDark);
  };

  return (
    <Container maxW="100vw" height="100vh" display="flex" flexDirection="column" p={0}>
      <Box as="header" position="sticky" top={0} bg="blue.800" p={4} color="white" textAlign="center">
        <Text>Header</Text>
      </Box>
      <Box flex="1" bg="purple.800" p={4} color="white" display="flex" justifyContent="center" alignItems="center">
        <Text>Row 1</Text>
      </Box>
      <Box flex="1" bg="purple.800" p={4} color="white" display="flex" justifyContent="center" alignItems="center">
        <Text>Row 2</Text>
      </Box>
      <Box flex="1" bg="gray.300" p={4} color="black" display="flex" justifyContent="center" alignItems="center">
        <Text>Row 3</Text>
      </Box>
      <Box as="footer" position="sticky" bottom={0} bg="blue.800" p={4} color="white" textAlign="center">
        <Text>Footer</Text>
      </Box>
    </Container>
  );
};

export default Index;