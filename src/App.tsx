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

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/worldmap" element={<WorldMap />} />
      <Route path='/nations/holyearisampire' element={<IndividualNationPage {...earisEmpirePageCofig}/> } />
      <Route path='/nations' element={<NationsInfoPage /> } />
    </Routes>
  </ChakraProvider>
);
