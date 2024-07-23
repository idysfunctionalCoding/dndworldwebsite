import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config,
  fonts: {
    heading: "MedievalSharp",
    body: "MedievalSharp",
  },
});

export default customTheme;
