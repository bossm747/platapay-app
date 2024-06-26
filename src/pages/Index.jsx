import { Container, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container 
      centerContent 
      maxW={{ base: "100%", md: "container.sm" }} 
      height="100vh" 
      display="flex" 
      flexDirection="column" 
      justifyContent="flex-start" 
      alignItems="center" 
      bg={{ base: "white", md: "black" }} 
      color="white" 
      borderRadius="lg" 
      mx={{ base: "0", md: "auto" }} 
      position="relative"
      overflow="hidden"
      p={0}
    >
      <Box 
        width="100%" 
        bg="purple.800" 
        height="75vh" 
        p={4} 
        borderRadius="0 0 2xl 2xl"
        color="white"
      >
        {/* Add any content you want inside the dark purple container */}
        <Box textAlign="center">
          <Box as="span" fontSize="4xl" display="block" mb={4}>My Wallet</Box>
          <Box as="span" fontSize="lg" display="block" mb={4}>Manage your finances effortlessly</Box>
          <Box as="button" bg="teal.500" color="white" px={4} py={2} borderRadius="md">Get Started</Box>
        </Box>
      </Box>
      <Box 
        width="80%" 
        bg="white" 
        height="66.67vh" 
        mt="-10vh" 
        mb={4} 
        borderRadius="lg"
        boxShadow="xl"
        color="black"
      >
        {/* Add any content you want inside the white container */}
      </Box>
    </Container>
  );
};

export default Index;