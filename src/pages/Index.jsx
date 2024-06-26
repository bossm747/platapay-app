import { Container, Box } from "@chakra-ui/react";
import { FaHome, FaUser, FaCog, FaBell, FaHeart } from "react-icons/fa";

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
        <Box textAlign="center">
          <Box as="span" fontSize="4xl" display="block" mb={4}>My Wallet</Box>
          <Box as="span" fontSize="lg" display="block" mb={4}>Manage your finances effortlessly</Box>
          <Box as="button" bg="teal.500" color="white" px={4} py={2} borderRadius="md">Get Started</Box>
        </Box>
      </Box>
      <Box 
        width="90%"  
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
      <Box 
        as="footer"
        width="100%"
        bg="blue.500"  
        position="sticky"
        bottom="0"
        p={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" gap={4}>
          <FaHome size="24px" color="white" />
          <FaUser size="24px" color="white" />
        </Box>
        <Box 
          width="50px"
          height="50px"
          bg="white"
          borderRadius="50%"
          position="absolute"
          top="-25px"  
          boxShadow="md"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FaHeart size="24px" color="blue.500" />
        </Box>
        <Box display="flex" gap={4}>
          <FaCog size="24px" color="white" />
          <FaBell size="24px" color="white" />
        </Box>
      </Box>
    </Container>
  );
};

export default Index;