import React from "react";
import "../../App.css";
import "./TokenomicsSection.css";

function TokenomicsSection() {
  return (
    <div id="tokenomics" className="tokenomics-container">
      <h3>TOKENOMICS</h3>
      <div className="tokenomics-section">
        {/* <div className="tokenomics-supply">
          SUPPLY CAP 1,000,000,000
          <div className="tokenomics-text">
            HiFi DeFi connects DeFi users and facilitates active participation
            in group-managed pools with game play, performance-based loot, and
            token-based fund governance. 
            It’s a combination of gaming and DeFi that’s never been available before now. Play a game to literally
            mine assets to your wallet! The product will require users to stake
            (deposit) tokens onto the platform to activate certain features.
            Users will stake HIFI tokens to: 
            <br></br><br></br>1) activate the actual gameplay (PLAY) 
            <br></br><br></br>2) activate the rewards you can earn for playing games (EARN)
            <br></br><br></br>3) and you can buy items for boosting rewards(BOOST)
          </div>
        </div> */}
        <div className="tokenomics-supply">Supply Cap. 1,000,000,000 $HIFI</div>
        <div className="tokenomics-img"><img src="/images/supply-cap.png" alt="toke" /></div>
        
      </div>
    </div>
  );
}

export default TokenomicsSection;
