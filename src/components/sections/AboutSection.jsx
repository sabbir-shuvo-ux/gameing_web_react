import React, { useState } from "react";
import "../../App.css";
import "./AboutSection.css";

function AboutSection() {
  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);

  const handleClick1 = () => {
    setClick1(true);
    setClick2(false);
    setClick3(false);
    setClick4(false);
    setClick5(false);
  };

  const handleClick2 = () => {
    setClick1(false);
    setClick2(true);
    setClick3(false);
    setClick4(false);
    setClick5(false);
  };

  const handleClick3 = () => {
    setClick1(false);
    setClick2(false);
    setClick3(true);
    setClick4(false);
    setClick5(false);
  };

  const handleClick4 = () => {
    setClick1(false);
    setClick2(false);
    setClick3(false);
    setClick4(true);
    setClick5(false);
  };

  const handleClick5 = () => {
    setClick1(false);
    setClick2(false);
    setClick3(false);
    setClick4(false);
    setClick5(true);
  };

  return (
    <div
      id="about"
      className="about-container"
      style={{ backgroundImage: "url(/images/games-bg.png)" }}
    >
      <div className="blur-about">
        <div className="about-us-info">
          <h3>ABOUT US</h3>
          <div className="design-center">
            <div id="about-us">
              <ul id="about-menu">
                <li
                  className={click1 ? "menu active" : "menu"}
                  onClick={handleClick1}
                >
                  About us
                </li>
                <li
                  className={click2 ? "menu active" : "menu"}
                  onClick={handleClick2}
                >
                  Gamers
                </li>
                <li
                  className={click3 ? "menu active" : "menu"}
                  onClick={handleClick3}
                >
                  Investors
                </li>
                <li
                  className={click4 ? "menu active" : "menu"}
                  onClick={handleClick4}
                >
                  Creators
                </li>
                <li
                  className={click5 ? "menu active" : "menu"}
                  onClick={handleClick5}
                >
                  Game Devs
                </li>
              </ul>
              <div id="about-content">
                <div style={click1 ? { display: "" } : { display: "none" }} className="img-desc">
                  {/* <h4>1</h4> */}
                  <p>
                    HIFI’s mission is to create value-driven pathways for our
                    community into web 3.0 ecosystems. Our GameFi P2E platform
                    gives passionate gamers the ability to earn $HIFI through
                    gameplay and competitions in sponsored leagues and
                    tournaments. Simultaneously, we’re attracting gaming
                    developers/studios to build games and activate revenue
                    utilizing HIFI’s reward engine. Investors use our
                    decentralized financial (DeFi) engine by staking $HIFI to
                    yield earnings from pooled funds. Soon, investors can
                    support gamers by wagering on the outcomes of player matches
                    in gaming tournaments. HiFi Gaming Society serves a vibrant
                    and diverse investor community passionate about competitive
                    gaming and NFT innovation. Our HiFi TV streaming showcases
                    NFT-based products enabling viewers to learn how to journey
                    onto the blockchain into the Metaverse in a meaningful way.
                    We build landmark properties serving our gamers, NFT
                    enthusiasts, and investors leading to our ultimate metaverse
                    journey, the HIFI-Verse experience.
                  </p>
                  <img src="/images/about_boost.png" alt="1"/>
                </div>
                <div style={click2 ? { display: "" } : { display: "none" }} className="img-desc">
                  {/* <h4>2</h4> */}
                  <p>
                    Our GameFi P2E platform gives passionate gamers the ability
                    to earn $HIFI through gameplay and competitions in sponsored
                    leagues and tournaments HiFi GameFi is more than just a
                    single game. We understand that not everyone enjoys the same
                    genre or style, at HiFi we provide the opportunity for you
                    to earn exactly the way you like. Pick from over 25 games
                    with more being added weekly. Think you’re top dog on a
                    game? Prove it! Put your money where your mouth is and
                    challenge a friend to a game, top score claims the pot! At
                    HiFi, the standard P2E gaming system has been
                    revolutionised, earn your way.
                  </p>
                  <img src="/images/about_earn.png" alt="1"/>
                </div>
                <div style={click3 ? { display: "" } : { display: "none" }} className="img-desc">
                  {/* <h4>3</h4> */}
                  <p>
                    Using standard DeFi practices with a twist, investors can
                    sit back and watch their portfolio’s grow with our pools and
                    vaults. Playing games not your thing? Then let others play
                    the game whilst you profit on their success, wager allows
                    you to bet on the outcome of challenges
                  </p>
                  <img src="/images/about_play.png" alt="1"/>
                </div>
                <div style={click4 ? { display: "" } : { display: "none" }} className="img-desc">
                  {/* <h4>4</h4> */}
                  <p>
                    Artists, Influencer or Game Designer, HiFi provides a
                    platform to engage with your audience or increase your
                    presence. Showcase your work on our NFT marketplace, allow
                    collectors to compete to have the largest collection of your
                    work. Broadcast your work on our HiFi TV streaming platform,
                    our weekly shows allow artists or creators another platform
                    on which to announce their work to the world.
                  </p>
                  <img src="/images/about_nft.png" alt="1"/>
                </div>
                <div style={click5 ? { display: "" } : { display: "none" }} className="img-desc">
                  {/* <h4>5</h4> */}
                  <p>
                    We are more than just our own collection of games, where
                    would we be without game developers? They allowed all this
                    to be possible. We’re attracting gaming developers/studios
                    to build games and activate revenue utilizing HIFI’s reward
                    engine. Where once there was a barrier for game developers
                    that were looking to branch into the web 3.0 world, HiFi
                    provides a user-friendly wrapper for game developers to
                    publish their work to a whole new audience of gamers.
                  </p>
                  <img src="/images/about_hifi.png" alt="1"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
