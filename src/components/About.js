import React from "react";
import styled from "styled-components";

// Styled Components
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  //z  background-color: #000; /* Black background */
  color: white; /* White text for contrast */
  min-height: 7vh;
  text-align: center;

  /* Responsive styling for mobile */
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const AboutTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 1%;
  margin-top: 1%;
  text-shadow: 0 0 80px rgb(192, 219, 255 / 75%),
    0 0 32px rgb(65, 120, 255 / 24%);
  background: linear-gradient(to right, #debb68, #debb68);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Responsive text size */
  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const AboutText = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  margin-bottom: 30px;

  /* Responsive text size */
  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const AboutHighlight = styled.span`
  font-weight: bold;
  background: linear-gradient(to right, #debb68, #debb68);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>
        <span className="text-gradient">Real World Assets traded on web3</span>
      </AboutTitle>
      <AboutText>
        Platform for trading <AboutHighlight>PCG Slabs</AboutHighlight> rated 9,
        9.5, &<AboutHighlight>10</AboutHighlight> minted on Neoxa
      </AboutText>
    </AboutContainer>
  );
};

export default About;
