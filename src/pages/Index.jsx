import { useState } from "react";
import { Container, Box, Flex, IconButton, Text, Switch, useColorMode, Menu, MenuButton, MenuList, MenuItem, Image } from "@chakra-ui/react";
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
        height="60vh" 
        p={4} 
        borderRadius="0 0 2xl 2xl"
        color="white"
        position="sticky"
        top="0"
        zIndex="2"
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
              <Image src="https://marcroland84.wordpress.com/wp-content/uploads/2024/06/copy-of-innovate-hub-2-1.png?w=1024" alt="Innovate Hub" height="50px" />
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
      </Box>

      <Box 
        width="100%" 
        p={4} 
        bg={isDark ? "gray.700" : "gray.100"} 
        borderRadius="lg" 
        mt={-8}
        zIndex="1"
      >
        <Text fontSize="xl" fontWeight="bold" textAlign="left">
          Balance
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          ₱74,700.00
        </Text>
      </Box>

      <Box 
        width="90%"  
        bg={isDark ? "gray.700" : "white"} 
        height="80vh" 
        mt={2} 
        mb={4} 
        borderRadius="lg"
        boxShadow="xl"
        color={isDark ? "white" : "black"}
        zIndex="3"
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
              width="50px" 
              height="50px" 
              bg="white" 
              borderRadius="50%" 
              display="flex" 
              justifyContent="center" 
              alignItems="center" 
              position="absolute" 
              top="-25px" 
              left="50%" 
              transform="translateX(-50%)"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
            >
              <FaQrcode size="32px" color="blue.500" />
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