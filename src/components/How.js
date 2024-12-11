import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #transparent;
  color: white;
  min-height: 100vh;
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

const Section = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  text-shadow: 0 0 80px rgb(192, 219, 255 / 75%),
    0 0 32px rgb(65, 120, 255 / 24%);
  margin-bottom: 10px;
`;

const SectionText = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const List = styled.ul`
  font-size: 1.2em;
  line-height: 1.8;
  padding-left: 20px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Footer = styled.div`
  margin-top: 20px;
  font-size: 1em;
  text-align: center;
  color: #bbb;
`;

// How Component
const How = () => {
  return (
    <Container>
      <Title>How the Service Works</Title>

      {/* Section 1 */}
      <Section>
        <SectionTitle>The Collection</SectionTitle>
        <SectionText>
          Our platform offers a curated selection of professionally graded cards
          (PCG slabs) from iconic trading card games: Magic: The Gathering
          (MTG), Pokémon, and Yu-Gi-Oh! Each card is graded at 9, 9.5, or 10,
          ensuring only top-tier collectibles are listed.
        </SectionText>
      </Section>

      {/* Section 2 */}
      <Section>
        <SectionTitle>NFT Marketplace</SectionTitle>
        <SectionText>
          Every card is listed on our decentralized exchange (DEX) as a
          non-fungible token (NFT). These NFTs can be:
        </SectionText>
        <List>
          <ListItem>Traded for platform currencies (or combinations).</ListItem>
          <ListItem>Swapped for other NFTs.</ListItem>
          <ListItem>
            Exchanged using any combination of NFTs and platform currencies.
          </ListItem>
        </List>
      </Section>

      {/* Section 3 */}
      <Section>
        <SectionTitle>Claiming Your NFT</SectionTitle>
        <SectionText>
          To claim a physical card, NFT holders must complete the following
          steps:
        </SectionText>
        <List>
          <ListItem>Hold the NFT in their account.</ListItem>
          <ListItem>
            Create a profile with Know Your Customer (KYC) verification.
          </ListItem>
          <ListItem>Submit a claim ticket to initiate the process.</ListItem>
        </List>
      </Section>

      {/* Section 4 */}
      <Section>
        <SectionTitle>Claim Ticket Details</SectionTitle>
        <List>
          <ListItem>
            <strong>Pricing:</strong> USD values for transactions.
          </ListItem>
          <ListItem>
            <strong>Minimum Claim:</strong> Total claims must exceed a set
            amount (excluding slab fees).
          </ListItem>
          <ListItem>
            <strong>Geographic Restriction:</strong> Claims are valid for the
            United States only.
          </ListItem>
          <ListItem>
            <strong>KYC Information:</strong> Includes full name, address,
            email, and phone number.
          </ListItem>
          <ListItem>
            <strong>Unique Receipt:</strong> Each slab claimed generates a
            unique digital asset as proof of ownership.
          </ListItem>
          <ListItem>
            <strong>Fee:</strong> $25 per slab claimed.
          </ListItem>
          <ListItem>
            <strong>Minimum Claim Amount:</strong> Total must exceed a minimum
            threshold (slab fees of $25 per slab are deducted from this amount).
          </ListItem>
        </List>
      </Section>

      <Footer>
        Experience the future of trading card collectibles with NFTs and PCG
        slabs!
      </Footer>
    </Container>
  );
};

export default How;
