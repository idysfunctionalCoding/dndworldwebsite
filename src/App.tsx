import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import { Route, Routes } from "react-router";
import NationsInfoPage from "./pages/NationPage";
import WorldMap from "./pages/WorldMapPage";
import IndividualNationPage from "./pages/NationIndividualPage";
import { earisEmpirePageCofig } from "./config/nationColorConfig";
import customTheme from "./theme";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Routes>
      <Route path="/dndworldwebsite" element={<HomePage />} />
      <Route path="/dndworldwebsite/nations/articles" element={<ArticlesPage />} />
      <Route path="/dndworldwebsite/worldmap" element={<WorldMap />} />
      <Route path='/dndworldwebsite/nations/holyearisampire' element={<IndividualNationPage {...earisEmpirePageCofig}/> } />
      <Route path='/dndworldwebsite/nations' element={<NationsInfoPage /> } />
    </Routes>
  </ChakraProvider>
);