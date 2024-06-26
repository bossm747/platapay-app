import { Container, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container 
      centerContent 
      maxW="container.md" 
      height="100vh" 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center" 
      bg="purple.900" 
      color="white" 
      borderRadius="lg" 
      mx={{ base: "10px", md: "30px" }} 
      position="relative"
    >
    {/* Existing content */}
      <Box 
        width="100%" 
        bg="white" 
        p={4} 
        mt={4} 
        borderRadius="lg"
      >
        {/* Add any content you want inside the white container */}
      </Box>
    </Container>
  );
};

export default Index;