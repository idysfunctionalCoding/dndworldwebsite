import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import Header from "./components/header/header";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import { Route, Routes, Outlet } from "react-router";

export const App = () => (
  <ChakraProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="articles" element={<ArticlesPage />} />
      </Routes>
  </ChakraProvider>
);
