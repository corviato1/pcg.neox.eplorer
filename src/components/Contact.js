import React from "react";

const Contact = () => (
  <div className="contact-container">
    <a
      href="https://ipfs.io/ipfs/QmeySH9R9wDHfNfVGhVYNJTqBLBC3eJQENLuwx2UdApW6J"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`${process.env.PUBLIC_URL}/img/exchange.png`}
        alt="Exchange"
        className="contact-image"
      />
    </a>
    <a
      href="https://ipfs.io/ipfs/QmYpqRZeGFLUTrrNzjW5LdUjHgFWonvmjjhaxyWxLd6CKF"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`${process.env.PUBLIC_URL}/img/neoxa.png`}
        alt="Neoxa"
        className="contact-image"
      />
    </a>
    <a
      href="https://ipfs.io/ipfs/QmS3W2FwFPv444ftyEp6xJUjAXRNuzELtcGPz2UzZe7Zpe"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`${process.env.PUBLIC_URL}/img/pcg.png`}
        alt="Premier Card Grading"
        className="contact-image"
      />
    </a>
    <a
      href="https://ipfs.io/ipfs/QmZMwUZka3ssmU3BgFBvB257SEjAR37qD8oCRGgMfPGsJk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`${process.env.PUBLIC_URL}/img/trader.png`}
        alt="Trader"
        className="contact-image"
      />
    </a>
  </div>
);

export default Contact;
