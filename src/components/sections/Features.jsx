import React from "react";
import "../../App.css";
import "./Features.css";

function Features() {
  return (
    <div id="features" className="buyat-container">
      <h3>FEATURES</h3>
      <ul id="ul-features">
        <li
          id="games"
          className="feature-inside"
          onClick={() => {
            window.open("https://hifigamingsociety.org/browse-games", "_blank");
          }}
        >
          <p className="feature-text">
            P2E Gaming<br></br>Play, Earn, Boost
          </p>
        </li>
        <li
          id="nft"
          className="feature-inside"
          onClick={() => {
            window.open(
              "https://pancakeswap.finance/nfts/collections/0x3E8bb868753357be4492958A8f63dfa29432996D",
              "_blank"
            );
          }}
        >
          <p>
            NFTs<br></br>Into The HIFI-Verse
          </p>
        </li>
        <li
          id="tv"
          className="feature-inside"
          onClick={() => {
            window.open("https://www.twitch.tv/hifigamingsociety", "_blank");
          }}
        >
          <p>
            HiFi TV<br></br>Video Streaming
          </p>
        </li>
        <li
          id="compete"
          className="feature-inside"
          onClick={() => {
            window.open("https://hifigamingsociety.org/competitions", "_blank");
          }}
        >
          <p>Compete</p>
        </li>
        {/* <li id="soon" className="feature-inside">
          <p>Coming soon...</p>
        </li> */}
      </ul>
    </div>
  );
}

export default Features;
