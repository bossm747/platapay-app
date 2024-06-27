import { useState } from "react";
import { Container, Box, Flex, IconButton, Text, Switch, useColorMode, Menu, MenuButton, MenuList, MenuItem, Image, Divider } from "@chakra-ui/react";
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
      justifyContent="space-between" 
      alignItems="center" 
      bg={isDark ? "black" : "white"} 
      color={isDark ? "white" : "black"} 
      borderRadius="lg" 
      mx={{ base: "0", md: "auto" }} 
      position="relative"
      overflow="hidden"
      p={0}
      boxShadow="0 0 20px rgba(0, 0, 0, 0.5)" // Glowing shadow
      border="4px solid darkgrey" // Thick dark grey border
      borderRadius="20px" // Rounded corners
    >
      <Box 
        width="100%" 
        bg="blue.800" 
        p={4} 
        borderRadius="0 0 2xl 2xl"
        color="white"
        position="sticky"
        top="0"
        zIndex="1000"
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
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
            <Box mb={2}>
              <Image src="/images/new-logo.png" alt="Innovate Hub" height="50px" />
            </Box>
            <Text fontSize="lg">Page Title</Text>
          </Box>
          <Flex>
            <IconButton
              icon={<FaBell />}
              aria-label="Notifications"
              variant="ghost"
              color="white"
              fontSize="24px"
            />
          </Flex>
        </Flex>
        <Divider borderColor="whiteAlpha.600" />
      </Box>

      <Box 
        as="footer"
        width="100%"
        bg="blue.500"  
        height="60px"
        position="sticky"
        bottom="0"
        p={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        zIndex="1000"
      >
        <Box display="flex" justifyContent="space-between" width="100%">
          {/* Left Column */}
          <Box flex="1" display="flex" justifyContent="space-between">
            <Box flex="1" textAlign="center">
              <FaHome size="24px" color="white" />
            </Box>
            <Box flex="1" textAlign="center">
              <FaChartBar size="24px" color="white" />
            </Box>
          </Box>

          {/* Center Column */}
          <Box flex="1" textAlign="center" position="relative">
            <Box 
              width="60px" // Increased size
              height="60px" // Increased size
              bg="white" 
              borderRadius="50%" 
              display="flex" 
              justifyContent="center" 
              alignItems="center" 
              position="absolute" 
              top="-30px" // Adjusted position
              left="50%" 
              transform="translateX(-50%)"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
            >
              <FaQrcode size="40px" color="blue.500" fontWeight="bold" /> // Increased size and bold
            </Box>
          </Box>

          {/* Right Column */}
          <Box flex="1" display="flex" justifyContent="space-between">
            <Box flex="1" textAlign="center">
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<FaCog />}
                  aria-label="Settings"
                  variant="ghost"
                  color="white"
                  fontSize="24px"
                />
                <MenuList bg="gray.700" color="white">
                  <MenuItem>
                    <Flex alignItems="center">
                      <Text mr={2}>Dark Mode</Text>
                      <Switch isChecked={isDark} onChange={handleToggleTheme} />
                    </Flex>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box flex="1" textAlign="center" display="flex" justifyContent="center" alignItems="center">
              <FaUser size="24px" color="white" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;