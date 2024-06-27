import { useState, useEffect } from "react";
import { Container, Box, Flex, IconButton, Text, Switch, useColorMode, Menu, MenuButton, MenuList, MenuItem, Image, Divider } from "@chakra-ui/react";
import { FaHome, FaUser, FaCog, FaBell, FaQrcode, FaChartBar, FaBars } from "react-icons/fa";

const darkPurple = "#4B0082"; // Updated to a more suitable dark mode color
const white = "#FFFFFF";
const headerFooterColor = "#4B0082"; // Replace with the actual color from the "Platapay" text
const rowColor = "#FFFFFF"; // Replace with the actual color from the "Wallet Balance" card

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
      bg={isDark ? "gray.800" : rowColor} // Updated background color for dark mode
      color={isDark ? "gray.100" : "black"} // Updated text color for dark mode
      borderRadius="2xl" 
      mx={{ base: "0", md: "auto" }} 
      position="relative"
      overflow="hidden"
      p={0}
      border={isDark ? "8px solid gray.700" : "8px solid darkgrey"} // Updated border color for dark mode
      boxShadow={isDark ? "0 0 10px gray.700" : "0 0 10px white"} // Updated box shadow color for dark mode
    >
      <Box 
        width="100%" 
        bg={isDark ? "gray.900" : headerFooterColor} // Updated header background color for dark mode
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
              <Image src="https://marcroland84.wordpress.com/wp-content/uploads/2024/06/copy-of-innovate-hub-2-1.png?w=1024" alt="Innovate Hub" height="50px" />
            </Box>
            <Text fontSize="lg" fontWeight="bold" color="white">E-wallet</Text>
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

      <Box width="100%" bg={isDark ? "gray.700" : darkPurple} flex="1" p={4}>
        <Box 
          width="calc(100% - 20px)" // 10px less on both sides
          bg={darkPurple}
          borderRadius="3xl" // Deeper round edges
          mx="auto"
          overflow="hidden"
        >
          <Box height="33.33%" bg="transparent" className="mcr3"></Box> {/* Row 1 */}
          <Box height="33.33%" bg="white" className="c3"></Box> {/* Row 2 */}
          <Box height="33.33%" bg="white" className="c3"></Box> {/* Row 3 */}
        </Box>
      </Box>

      <Box 
        as="footer"
        width="100%"
        bg={isDark ? "gray.900" : headerFooterColor}  
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
          <Box flex="1" display="flex" justifyContent="center" alignItems="center">
            <FaHome size="24px" color="white" />
          </Box>
          <Box flex="1" display="flex" justifyContent="center" alignItems="center">
            <FaChartBar size="24px" color="white" />
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
          <Box flex="1" display="flex" justifyContent="center" alignItems="center">
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
                    <Switch 
                      isChecked={isDark} 
                      onChange={handleToggleTheme} 
                      colorScheme="purple"
                      bg={isDark ? "gray.700" : "gray.300"} // Updated background color for light mode
                      borderColor={isDark ? "gray.600" : "gray.400"} // Updated border color for light mode
                      _checked={{
                        bg: "purple.500",
                        borderColor: "purple.500",
                      }}
                    />
                  </Flex>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box flex="1" display="flex" justifyContent="center" alignItems="center">
            <FaUser size="24px" color="white" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;