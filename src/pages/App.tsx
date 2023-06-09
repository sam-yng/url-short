import React from "react";
import "../css/index.css";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import LinkInput from "../components/LinkInput";
import Stats from "../components/Stats";
import Boost from "../components/Boost";
import Footer from "../components/Footer";
import { UrlProvider } from "../utils/UrlContext";

function App() {
  return (
    <UrlProvider>
      <NavBar />
      <Main />
      <LinkInput />
      <Stats />
      <Boost />
      <Footer />
    </UrlProvider>
  );
}

export default App;
