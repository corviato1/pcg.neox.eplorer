import React from "react";
import "./App.css";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      {/* Landing Page */}
      <div className="landing-page">
        {/* Cards */}
        <section className="cards">
          <div className="card" id="card-one">
            One
          </div>
          <div className="card" id="card-two">
            Two
          </div>
          <div className="card" id="card-three">
            Three
          </div>
        </section>

        {/* About */}
        <section className="about">
          <About />
        </section>

        {/* Highlights */}
        <section className="highlights">
          <Highlights />
        </section>

        {/* Contact */}
        <section className="contact">
          <Contact />
        </section>

        {/* Login */}
        <section className="login">
          <Login />
        </section>
      </div>
    </div>
  );
}

export default App;
