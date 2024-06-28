import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d", // Dark Blue
    800: "#153e75", // Medium Blue
    700: "#2a69ac", // Light Blue
    600: "#4B0082", // Dark Purple
    500: "#6A0DAD", // Medium Purple
    400: "#9370DB", // Light Purple
    300: "#FFFFFF", // White
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);