import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getFeaturedCards } from "../data/CardPool";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #white;
  color: white;
  min-height: 10vh;
`;

const Title = styled.h1`
  font-size: 2.5em;
  text-shadow: 0 0 80px rgb(192, 219, 255 / 75%),
    0 0 32px rgb(65, 120, 255 / 24%);
  background: linear-gradient(to right, #30cfd0, #c43ad6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
`;

const CardGrid = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-items: center;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Card = styled.div`
  position: relative;
  background: transparent;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: gimbal 5s infinite linear;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @keyframes gimbal {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(2deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const Highlights = () => {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [cardsToDisplay, setCardsToDisplay] = useState(3); // Default to minimum of 3 cards

  useEffect(() => {
    // Function to calculate the number of cards that fit in the viewport
    const calculateVisibleCards = () => {
      const containerWidth = window.innerWidth;
      const cardWidth = 150; // Minimum card width in pixels
      const gapWidth = 20; // Gap between cards
      const totalCardWidth = cardWidth + gapWidth;

      const maxCards = Math.floor(containerWidth / totalCardWidth);
      setCardsToDisplay(Math.max(maxCards, 3)); // Ensure at least 3 cards are shown
    };

    // Initial calculation and on resize
    calculateVisibleCards();
    window.addEventListener("resize", calculateVisibleCards);

    // Cleanup event listener
    return () => window.removeEventListener("resize", calculateVisibleCards);
  }, []);

  useEffect(() => {
    // Fetch featured cards from secondary file
    const cards = getFeaturedCards(cardsToDisplay); // Adjust quantity based on visible cards
    setFeaturedCards(cards);
  }, [cardsToDisplay]);

  return (
    <Container>
      <Title>Featured Graded Cards</Title>
      <CardGrid>
        {featuredCards.map((card, index) => (
          <Card key={index}>
            <img src={card.image} alt={card.title} />
          </Card>
        ))}
      </CardGrid>
    </Container>
  );
};

export default Highlights;
