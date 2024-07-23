import {
  ChakraProvider,
} from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import { Route, Routes } from "react-router";
import NationsInfoPage from "./pages/NationPage";
import WorldMap from "./pages/WorldMapPage";
import IndividualNationPage from "./pages/NationIndividualPage";
import { earisEmpirePageCofig } from "./config/nationColorConfig";
import customTheme from "./theme";
import WorldHistoryPage from "./pages/WorldHistoryPage";

const events = [
  {
    date: '2024-01-01',
    title: 'New Year',
    description: 'Celebrated the new year with fireworks and a party.',
  },
  {
    date: '2024-01-01',
    title: 'New Year',
    description: 'Celebrated the new year with fireworks and a party.',
  },
  {
    date: '2024-01-01',
    title: 'New Year',
    description: 'Celebrated the new year with fireworks and a party.',
  },
  {
    date: '2024-01-01',
    title: 'New Year',
    description: 'Celebrated the new year with fireworks and a party.',
  },
  {
    date: '2024-01-01',
    title: 'New Year',
    description: 'Celebrated the new year with fireworks and a party.',
  },
  {
    date: '2024-01-01',
    title: 'New Year',
    description: 'Celebrated the new year with fireworks and a party.',
  },
  {
    date: '2024-01-01',
    title: 'New Year',
    description: 'Celebrated the new year with fireworks and a party. Celebrated the new year with fireworks and a party.Celebrated the new year with fireworks and a party.Celebrated the new year with fireworks and a party.Celebrated the new year with fireworks and a party.',
  },
  {
    date: '2024-01-01',
    title: 'New Year',
    description: 'Celebrated the new year with fireworks and a party.',
  },
  {
    date: '2024-01-01',
    title: 'New Year',
    description: 'Celebrated the new year with fireworks and a party.',
  },
  {
    date: '2024-01-01',
    title: 'New Year',
    description: 'Celebrated the new year with fireworks and a party.',
  },{
    date: '2024-01-01',
    title: 'New Year',
    description: 'Celebrated the new year with fireworks and a party.',
  },
  {
    date: '2024-01-01',
    title: 'New Year',
    description: 'Celebrated the new year with fireworks and a party.',
  },
];

const timeline = {
  events: events
}

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dndworldwebsite/nations/articles" element={<ArticlesPage />} />
      <Route path="/dndworldwebsite/worldhistory" element={<WorldHistoryPage {...timeline}/>} />
      <Route path="/dndworldwebsite/worldmap" element={<WorldMap />} />
      <Route path='/dndworldwebsite/nations/holyearisampire' element={<IndividualNationPage {...earisEmpirePageCofig}/> } />
      <Route path='/dndworldwebsite/nations' element={<NationsInfoPage /> } />
    </Routes>
  </ChakraProvider>
);
