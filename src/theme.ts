import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans";

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    fonts: {
        heading: 'MedievalSharp',
        body: 'MedievalSharp'
    }
  }

const customTheme = extendTheme({ config })

export default customTheme;
