import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import { Route, Routes } from "react-router";
import ClickableCardInfoPage from "./pages/ClickableCardPage";
import WorldMap from "./pages/WorldMapPage";
import IndividualNationPage from "./pages/NationIndividualPage";
import customTheme from "./theme";
import WorldHistoryPage from "./pages/WorldHistoryPage";
import { nationCards } from "./config/nationInfoConfigs/clickableCardInfoConfig";

const events = [
  {
    date: "2024-01-01",
    title: "New Year",
    description: "Celebrated the new year with fireworks and a party.",
  },
  {
    date: "2024-01-01",
    title: "New Year",
    description: "Celebrated the new year with fireworks and a party.",
  },
  {
    date: "2024-01-01",
    title: "New Year",
    description: "Celebrated the new year with fireworks and a party.",
  },
  {
    date: "2024-01-01",
    title: "New Year",
    description: "Celebrated the new year with fireworks and a party.",
  },
  {
    date: "2024-01-01",
    title: "New Year",
    description: "Celebrated the new year with fireworks and a party.",
  },
  {
    date: "2024-01-01",
    title: "New Year",
    description: "Celebrated the new year with fireworks and a party.",
  },
  {
    date: "2024-01-01",
    title: "New Year",
    description:
      "Celebrated the new year with fireworks and a party. Celebrated the new year with fireworks and a party.Celebrated the new year with fireworks and a party.Celebrated the new year with fireworks and a party.Celebrated the new year with fireworks and a party.",
  },
  {
    date: "2024-01-01",
    title: "New Year",
    description: "Celebrated the new year with fireworks and a party.",
  },
  {
    date: "2024-01-01",
    title: "New Year",
    description: "Celebrated the new year with fireworks and a party.",
  },
  {
    date: "2024-01-01",
    title: "New Year",
    description: "Celebrated the new year with fireworks and a party.",
  },
  {
    date: "2024-01-01",
    title: "New Year",
    description: "Celebrated the new year with fireworks and a party.",
  },
  {
    date: "2024-01-01",
    title: "New Year",
    description: "Celebrated the new year with fireworks and a party.",
  },
];

const timeline = {
  events: events,
};

const nationCardProps = {
  cards: nationCards,
  pageTitle: "All Nations",
};

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/dndworldwebsite/nations/articles"
        element={<ArticlesPage />}
      />
      <Route
        path="/dndworldwebsite/worldhistory"
        element={<WorldHistoryPage {...timeline} />}
      />
      <Route path="/dndworldwebsite/worldmap" element={<WorldMap />} />
      <Route
        path="/dndworldwebsite/nations/:nationName"
        element={<IndividualNationPage />}
      />
      <Route
        path="/dndworldwebsite/nations"
        element={<ClickableCardInfoPage {...nationCardProps} />}
      />
    </Routes>
  </ChakraProvider>
);
