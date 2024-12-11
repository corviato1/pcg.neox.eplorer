import React from "react";
import "./Cards.css";

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      title: "Past Inventory",
      subtitle: "", // For later text
      link: "/past-inventory", // Subpage URL
      backgroundImage: "/img/cards/Past-Inventory.jpg", // Correct relative path
    },
    {
      id: 2,
      title: "Current Inventory",
      subtitle: "", // For later text
      link: "/current-inventory",
      backgroundImage: "/img/cards/Current-Inventory.jpg", // Correct relative path
    },
    {
      id: 3,
      title: "Trade Now",
      subtitle: "", // For later text
      link: "https://neoxa.app/",
      backgroundImage: "/img/cards/Trade-Now.jpg", // Correct relative path
    },
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <a
          key={card.id}
          href={card.link}
          className="card"
          style={{ backgroundImage: `url(${card.backgroundImage})` }}
          target={card.id === 3 ? "_blank" : "_self"}
          rel={card.id === 3 ? "noopener noreferrer" : undefined}
        >
          <div className="card-content">
            <div className="card-title">{card.title}</div>
            <div className="card-subtitle">{card.subtitle}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Cards;
