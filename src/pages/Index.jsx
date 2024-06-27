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
      maxW="100vw" 
      height="100vh" 
      display="flex" 
      flexDirection="column" 
      p={0}
    >
      <Box 
        flex="1" 
        bg="blue.800" 
        p={4} 
        color="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Row 1</Text>
      </Box>
      <Box 
        flex="1" 
        bg="purple.800" 
        p={4} 
        color="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Row 2</Text>
      </Box>
      <Box 
        flex="1" 
        bg="gray.200" 
        p={4} 
        color="black"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Row 3</Text>
      </Box>
    </Container>
  );
};

export default Index;