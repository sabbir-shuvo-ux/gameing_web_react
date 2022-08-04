import React from "react";
import { Button } from "../Button";
import { AutoPlaySilentVideo } from "../Video";
import "../../App.css";
import "./HomeSection.css";

function HomeSection() {
  return (
    <div>
      <AutoPlaySilentVideo />
      <div id="home" className="hero-container">

        <h1>HIFI GAMING SOCIETY</h1>
        <p>BEST GAMING PLATFORM TO PLAY GAMES, ENJOY, AND EARN</p>
        <p>JOIN US IN THIS JOURNEY!</p>

        <div className="hero-btns">
          <button
            className="new-button-design play"
            onClick={() => {
              window.open(
                "https://hifigamingsociety.org/browse-games",
                "_blank"
              );
            }}
          >
            PLAY
          </button>
          <button
            className="new-button-design whitepaper"
            onClick={() => {
              window.open(
                "https://hifi-gaming-society.gitbook.io/hifi-defi",
                "_blank"
              );
            }}
          >
            LITEPAPER
          </button>
        </div>
        <div className="buy-flex">
          <ul className="ul-buy">
            <li>
              <div
                className="buy-defis"
                onClick={() => {
                  window.open(
                    "https://app.apeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x0a38bc18022b0ccb043f7b730b354d554c6230f1",
                    "_blank"
                  );
                }}
              >
                <img alt="aps" src="/images/apeswap.png" />
                <div>Apeswap</div>
              </div>
            </li>
            <li>
              <div
                className="buy-defis"
                onClick={() => {
                  window.open(
                    "https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x0a38bc18022b0ccb043f7b730b354d554c6230f1",
                    "_blank"
                  );
                }}
              >
                <img alt="pcs" src="/images/pancakeswap.png" />
                <div>Pancakeswap</div>
              </div>
            </li>
          </ul>
        </div>

        {/* <div className="buy-flex">
          <ul className="ul-buy">
            <li>
              <a
                href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x0a38bc18022b0ccb043f7b730b354d554c6230f1"
                target="_blank"
                rel="nofollow noreferrer"
              >
                <img alt="pcs" src="/images/pancakeswap.png"></img>
              </a>
            </li>
            <li>
              <a
                href="https://app.apeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x0a38bc18022b0ccb043f7b730b354d554c6230f1"
                target="_blank"
                rel="nofollow noreferrer"
              >
                <img alt="aps" src="/images/apeswap.png"></img>
              </a>
            </li>
          </ul>
        </div> */}
        <div className="fumi">
          <img src="/images/dark_gradient.png" alt="bsc" className="fumi"/>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
