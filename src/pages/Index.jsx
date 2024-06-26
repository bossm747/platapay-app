import { Container, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaHome, FaUser, FaCog, FaBell, FaHeart, FaQrcode, FaChartBar, FaFileAlt, FaBars } from "react-icons/fa";

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
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <IconButton
            icon={<FaBars />}
            aria-label="Menu"
            variant="ghost"
            color="white"
            fontSize="24px"
          />
          <Box textAlign="center">
            <img src="https://marcroland84.wordpress.com/wp-content/uploads/2024/06/copy-of-innovate-hub-500-x-500-px.png?w=500" alt="Logo" style={{ height: "50px" }} />
            <Text fontSize="lg" mt={2}>My Wallet</Text>
          </Box>
          <Flex>
            <IconButton
              icon={<FaUser />}
              aria-label="Profile"
              variant="ghost"
              color="white"
              fontSize="24px"
            />
            <IconButton
              icon={<FaBell />}
              aria-label="Notifications"
              variant="ghost"
              color="white"
              fontSize="24px"
            />
          </Flex>
        </Flex>
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
        zIndex="base"
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
        zIndex="sticky"
      >
        <Box display="flex" justifyContent="space-between" width="100%">
          <Box flex="1" textAlign="center">
            <FaHome size="24px" color="white" />
          </Box>
          <Box flex="1" textAlign="center">
            <FaChartBar size="24px" color="white" />
          </Box>
          <Box flex="1" textAlign="center" position="relative" top="-25px">
            <FaQrcode size="24px" color="white" />
          </Box>
          <Box flex="1" textAlign="center">
            <FaCog size="24px" color="white" />
          </Box>
          <Box flex="1" textAlign="center">
            <FaFileAlt size="24px" color="white" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;