import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans";

const customTheme = extendTheme({
    fonts: {
        heading: 'MedievalSharp',
        body: 'MedievalSharp'
    }
})

export default customTheme;
