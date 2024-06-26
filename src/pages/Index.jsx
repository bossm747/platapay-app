import { Container, VStack, Text, Box, Button } from "@chakra-ui/react";
import { FaWallet } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="blue.900" color="white">
      <VStack spacing={6}>
        <Box as={FaWallet} size="64px" />
        <Text fontSize="4xl" fontWeight="bold">My Wallet</Text>
        <Text fontSize="lg">Manage your finances effortlessly</Text>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      </VStack>
    </Container>
  );
};

export default Index;