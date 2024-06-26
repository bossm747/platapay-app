import { useState } from "react";
import { Container, Box, Flex, IconButton, Text, Switch, useColorMode } from "@chakra-ui/react";
import { FaHome, FaUser, FaCog, FaBell, FaHeart, FaQrcode, FaChartBar, FaFileAlt, FaBars } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDark, setIsDark] = useState(colorMode === "dark");

  const handleToggleTheme = () => {
    toggleColorMode();
    setIsDark(!isDark);
  };

  return (
    <Container 
      centerContent 
      maxW={{ base: "100%", md: "container.sm" }} 
      height="100vh" 
      display="flex" 
      flexDirection="column" 
      justifyContent="flex-start" 
      alignItems="center" 
      bg={isDark ? "black" : "white"} 
      color={isDark ? "white" : "black"} 
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
            <img src="/images/new-logo.png" alt="Logo" style={{ height: "50px" }} />
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
        bg={isDark ? "gray.700" : "white"} 
        height="66.67vh" 
        mt="-10vh" 
        mb={4} 
        borderRadius="lg"
        boxShadow="xl"
        color={isDark ? "white" : "black"}
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
            <FaQrcode size="32px" color="white" />
          </Box>
          <Box flex="1" textAlign="center">
            <FaCog size="24px" color="white" />
          </Box>
          <Box flex="1" textAlign="center">
            <FaFileAlt size="24px" color="white" />
          </Box>
        </Box>
      </Box>
      <Box 
        position="absolute" 
        top="10px" 
        right="10px"
      >
        <Flex alignItems="center">
          <Text mr={2}>Dark Mode</Text>
          <Switch isChecked={isDark} onChange={handleToggleTheme} />
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;