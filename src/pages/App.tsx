import React from "react";
import "../css/index.css";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import LinkInput from "../components/LinkInput";
import Stats from "../components/Stats";

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <LinkInput />
      <Stats />
    </>
  );
}

export default App;
