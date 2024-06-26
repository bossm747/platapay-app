import { Container, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container 
      centerContent 
      maxW={{ base: "100%", md: "container.sm" }} 
      height="100vh" 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center" 
      bg={{ base: "white", md: "black" }} 
      color="white" 
      borderRadius="lg" 
      mx={{ base: "0", md: "auto" }} 
      position="relative"
    >
      <Box 
        width="100%" 
        bg="white" 
        p={4} 
        mt={4} 
        borderRadius="lg"
        color="black"
      >
        {/* Add any content you want inside the white container */}
        <Box textAlign="center">
          <Box as="span" fontSize="4xl" display="block" mb={4}>My Wallet</Box>
          <Box as="span" fontSize="lg" display="block" mb={4}>Manage your finances effortlessly</Box>
          <Box as="button" bg="teal.500" color="white" px={4} py={2} borderRadius="md">Get Started</Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;