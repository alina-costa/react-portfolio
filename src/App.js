import React from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Nav from "./components/About/Nav";

function App() {
  return (
    <div>
      <main>
        <About></About>
        <Nav></Nav>
      </main>
    </div>
  );
}

export default App;
