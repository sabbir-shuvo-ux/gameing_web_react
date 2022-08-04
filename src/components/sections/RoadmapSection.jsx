import React from "react";
import "./HomeSection.css";
import "../../App.css";
import "./RoadmapSection.css";

function RoadmapSection() {
  return (
    <div id="roadmap" className="roadmap-container">
      <h3>ROADMAP</h3>
      {/* <div className="map-class">
        <img src="/images/castle-map.png" alt="castle" />
      </div> */}
      <div className="buy-flex" style={{ marginBottom: "0px" }}>
          <ul className="ul-buy">
            <li>
              <div
                className="buy-defis"
                onClick={() => {
                  window.open(
                    "https://l.facebook.com/l.php?u=https%3A%2F%2Fforms.gle%2FQWBj9vN1xCMTM6cGA%3Ffbclid%3DIwAR2u5zYdqO_ccFrHUSEcfXAKTs2oCsZrLbbzALKTH01g1CCi_nbJxa_9_AA&h=AT2LJLIr5bAFLi9iDXlztQP4wGdOijsUNvYi-jtpUgkhAEteBP1acC_fTGuDpkueMcZsngvSp2Dxm8s3kwOnmMuBWjG3TBcKF1kJFjqlAzVD0PakOVs130eTsynp-w",
                    "_blank"
                  );
                }}
              >
                <img alt="aps" src="/images/JMZ.png" />
                <div>List Game</div>
              </div>
            </li>
            <li>
              <div
                className="buy-defis"
                onClick={() => {
                  window.open(
                    "https://l.facebook.com/l.php?u=https%3A%2F%2Fforms.gle%2FH11ffEjNdU8nMfQE7%3Ffbclid%3DIwAR0AOUZw_nR1EJ88FGziW1YcKvvtz7eCBLdUoplj7-OcY4CvNaWkDt3qNj0&h=AT2LJLIr5bAFLi9iDXlztQP4wGdOijsUNvYi-jtpUgkhAEteBP1acC_fTGuDpkueMcZsngvSp2Dxm8s3kwOnmMuBWjG3TBcKF1kJFjqlAzVD0PakOVs130eTsynp-w",
                    "_blank"
                  );
                }}
              >
                <img alt="pcs" src="/images/game-removebg-preview.png" />
                <div>Launch Guild</div>
              </div>
            </li>
          </ul>
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
      <div className="roadmap-image">
        {/* <img src="/images/roadmap_1.png" alt="roadmap" /> */}
      </div>
      {/* <div className="cards-container">
        <div className="roadmap-card-width">
          <div className="map-icon">
            <img src="/images/q3-21.png" alt="q321" />
          </div>
          <div className="roadmap-card" style={{ border: "4px solid #ff55cc" }}>
            <div className="roadmap-title">Q3 2021</div>
            <ul className="card-content-list" style={{ listStyleType: "none" }}>
              <li>✅ Initial DEX Offering on ApeSwap</li>
              <li>✅ Audit Clearance</li>
              <li>✅ PLAY service launch</li>
              <li>✅ EARN service launch</li>
              <li>✅ Gameplay Statistics and Reward Analytics</li>
              <li>✅ Mobile Gameplay Activation</li>
            </ul>
          </div>
        </div>
        <div className="roadmap-card-width">
          <div className="map-icon">
            <img src="/images/q4-21.png" alt="q421" />
          </div>
          <div className="roadmap-card" style={{ border: "4px solid #f3a013" }}>
            <div className="roadmap-title">Q4 2021</div>
            <ul className="card-content-list" style={{ listStyleType: "none" }}>
              <li>✅ HiFi Ambassadors Program</li>
              <li>✅ Video Marketing Channels Activation</li>
              <li>✅ Expansion of HIFI Influencer Program</li>
              <li>✅ Mobile Gaming, MetaMask and Trust Wallet</li>
              <li>✅ HiFi TV Launch</li>
              <li>
                ✅ Release of NFT Collection Set 1 (Ongoing sets of NFTs are in
                development)
              </li>
            </ul>
          </div>
        </div>
        <div className="roadmap-card-width">
          <div className="map-icon">
            <img src="/images/q1-22.png" alt="q122" />
          </div>
          <div className="roadmap-card" style={{ border: "4px solid #00b7ff" }}>
            <div className="roadmap-title">Q1 2022</div>
            <ul className="card-content-list">
              <li>NFT Artcade Platform including Auction and Marketplace</li>
              <li>HiFi Treasury Buildout</li>
              <li>Gamified (Yield) Farms</li>
              <li>Website Revamp including outline of all HIFI properties</li>
              <li>3rd Party Developers Studio Portal</li>
              <li>Versus and Challenge Mode</li>
            </ul>
          </div>
        </div>
        <div className="roadmap-card-width">
          <div className="map-icon">
            <img src="/images/q2-22.png" alt="q222" />
          </div>
          <div className="roadmap-card" style={{ border: "4px solid #b042ff" }}>
            <div className="roadmap-title">Q2 2022</div>
            <ul className="card-content-list">
              <li>
                3rd Party Game Developer Rewards Infrastructure, Alpha Beta
                Testing and Ingest Automation
              </li>
              <li>R&D on Game Data/Blockchain Exchange</li>
              <li>HiFi Society VIP Portal / Mobile VIP App</li>
              <li>HiFi Gamers Lifestyle Brand Development</li>
              <li>Community Wagering on Versus Mode</li>
              <li>Governance Infrastructure</li>
              <li>HiFiver Video Game Creation</li>
              <li>Additional Game Creation Projects</li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default RoadmapSection;
