import React from "react";
import logo from "../logo.svg";
import "../App.css";
import "./Cards.css";

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      text: "Past Inventory",
      link: "X",
      linkText: "Xt",
      backgroundColor: "#ff9a9e", // Light pink
    },
    {
      id: 2,
      text: "Current Inventory",
      link: "X",
      linkText: "X",
      backgroundColor: "#fad0c4", // Light peach
    },
    {
      id: 3,
      text: "Trade Now",
      link: "https://reactjs.org",
      linkText: "X",
      backgroundColor: "#fbc2eb", // Light purple
    },
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="card"
          style={{ backgroundColor: card.backgroundColor }}
        >
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>{card.text}</p>
              <a
                className="App-link"
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {card.linkText}
              </a>
            </header>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
