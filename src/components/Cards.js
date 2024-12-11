import React from "react";
import "./Cards.css";

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      title: "Top",
      subtitle: "Bottom",
      link: "/past-inventory", // Subpage URL
      backgroundImage: "/img/cards/Past-Inventory.jpg", // Correct relative path
    },
    {
      id: 2,
      title: "Top",
      subtitle: "Bottom",
      link: "/current-inventory", // Subpage URL
      backgroundImage: "/img/cards/Current-Inventory.jpg", // Correct relative path
    },
    {
      id: 3,
      title: "Top",
      subtitle: "Bottom",
      link: "/trade-now", // Subpage URL
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
