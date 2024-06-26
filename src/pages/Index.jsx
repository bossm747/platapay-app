import { Container } from "@chakra-ui/react";

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
    </Container>
  );
};

export default Index;