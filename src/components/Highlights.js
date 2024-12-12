import React from "react";
import styled from "styled-components";
import { getFeaturedCards } from "../data/CardPool";
import { useNavigate } from "react-router-dom"; // Assuming React Router is used for navigation

const HighlightsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  width: 200px;
  height: 300px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Highlights = () => {
  const featuredCards = getFeaturedCards(6); // Number of cards to display (can be dynamic based on screen size)
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/current-inventory"); // Navigate to /current-inventory
  };

  return (
    <HighlightsContainer>
      {featuredCards.map((card) => (
        <Card key={card.id} onClick={handleCardClick}>
          <CardImage src={card.image} alt={card.title} />
        </Card>
      ))}
    </HighlightsContainer>
  );
};

export default Highlights;
