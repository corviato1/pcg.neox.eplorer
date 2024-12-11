import React from "react";
import About from "./components/About";
import Cards from "./components/Cards";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import How from "./components/How";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <About />
      <Cards />
      <Highlights />
      <How />
      <Contact />
      <button className="floating-login-button" onClick={() => Login()}>
        Login
      </button>
    </div>
  );
}

export default App;
