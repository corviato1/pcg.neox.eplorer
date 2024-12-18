## To Do

- For How.js: with color change, new tab link "PCG" and "Premier Card Grading" to https://premiercardgrading.com/
- For How.js: with color change, new tab link "The Gathering", "MTG", "Pokémon", and "Yu-Gi-Oh!", to https://pcgslabs.com/
- For How.js: without color change, new tab link: "DEX", "NFT", and "Know Your Customer (KYC) verification", to https://pcgslabs.com/
- For How.js: add a section above the collection titled The Process
- For How.js: review and rewrite text
- For Contact.js: without color change, new tab link "NFTs" to https://pcgslabs.com/
- For Contact.js: without color change, new tab link "PCG" to https://premiercardgrading.com/
<!-- - For Contact.js: Change image for neoxa.app -->
- Add components/RoadMap.js
- For RoadMap.js: components within: current status, milestones & how to reach, white paper
- Build out Login.js
- Write pages/UserProfile.js
- Write pages/Claim.js
- Update pages/CurrentInventory.js
- Update pages/PastInventory.js
- Write nft.html file for NFT IPFS hash.  Include, digitial image of card, image of the slab, basic bio of that specific card, claim process, date info
- Connect backend


## Backend
### Used for
- User profile
- Past inventory
- Current inventory

# About

- Slabs rated 9, 9.5, and 10 tokenized on web3

# Platforms leveraged

- Neoxa
- Netlify
- TCG Player
- Premier Card Grading

# Multi url clones

- https://pcgonneoxa.com/
- https://pcgonneox.com/
- https://pcgslabs.com/

## Simple site

## Third party exchagne

## Inventory information

- List ins and outs of inventroy, and how to claim

### features

- Indexed [A to Z, Z to A, Viewed item high to low, viewed item low to high] search
- Low profile carousel slider
-

## Claim policy

- USD pricing.
- Total claim must exceed $<>.
- United States only.
- KYC (Name, Address, Email, Phone).
- Each slab claimed comes with a unique asset as receipt.
- $25 fee per slab
- Minimum claim = $x - slab fees ($25 per slab)

# Pages

- Home
- Past Inventory
- Current Inventory
- Login

## Landing

### App.js

#### Cards.

- Quantity = 3.
- Card names = One, Two, and Three.
- Three cards horizontal to eachother.
- Space between each card is equal to one another.
- Cards are named One, Two, and Three, from left to right.
- Space between left side of card One and the left side of screen is 20% of card One width.
- Space between right side of card Three and the right side of screen is 20% of card One width.
- Card height is 1.3x width.
- If screen width shrinks greater than 55%, switch to vertical card placement.
- If mobile make card display default vertical.
- Cards will have boarder, and slowly moving background glow.
- Each card background is a different image

#### About

- Reactive font size
- Title
- One sentence explainer
- One quote.
- Quote text is 42% One sentence explainer text
- Title is 58% larger than One sentene explainer text

#### Highlights

#### Contact

- Small social media like links, but for Neoxa.app [exchange], Neoxa.net, premiercardgrading.com [pcg], and tcgtrader.com [trader]
- Contact links need to be in a new tab and must be an ipfs gateway redirect.
- IPFS .html code links can be found at src/ipfs/pcg.html, exchange.html, neoxa.html, and trader.html

#### Login

### App.css (contains landing page framework, and login framework)

## About

- src/component/About.js
- src/component/Components.css
- Not it's own page

## Highlights

- src/component/Highlights.js
- src/component/Components.css
- Own page, and fractional display for landing page

## Contact

- src/component/Contact.js
- src/component/Components.css
- Not it's own page
- Includes
- - x

## Login

- Login.js
- App.css (contains landing page framework, and login framework)
- Own page, and fractional display for landing page

## Dashboard

- Serves as backend remote access.
- Read only.
- Displays Stats. _write full list_

# Backend stuff

# Server side

# IPFS

    - Open terminal.
    - $ipfs daemon
    - Open new terminal
    - $ <path to file> ipfs add -r <file name>.html

# Commands ran

- npx create-react-app <name>
- npm install web-vitals
- npm install styled-components
- npm install react-router-dom
