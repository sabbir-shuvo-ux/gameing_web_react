import React from "react";
import "../../App.css";
import "./FollowUs.css";

function FollowUsSection() {
  return (
    <div id="followus" className="followus-container">
      <h3>FOLLOW US</h3>
      <div className="social-icons">
        <a
          href="https://t.me/HiFiGamingSocietyPlatform"
          target="_blank"
          rel="nofollow noreferrer"
          className="social-icon-link telegram"
        >
          <i className="fab fa-telegram" />
        </a>
        <a
          href="https://www.twitch.tv/hifigamingsociety"
          target="_blank"
          rel="nofollow noreferrer"
          className="social-icon-link twitch"
        >
          <i className="fab fa-twitch" />
        </a>
        <a
          href="https://discord.com/invite/agDmDC4wcp"
          target="_blank"
          rel="nofollow noreferrer"
          className="social-icon-link discord"
        >
          <i className="fab fa-discord" />
        </a>
        <a
          href="https://hifigamingsociety.medium.com/"
          target="_blank"
          rel="nofollow noreferrer"
          className="social-icon-link medium"
        >
          <i className="fab fa-medium" />
        </a>
        <a
          href="https://twitter.com/HiFiDeFi"
          target="_blank"
          rel="nofollow noreferrer"
          className="social-icon-link twitter"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          href="https://www.tiktok.com/@hifigamingsocietytv"
          target="_blank"
          rel="nofollow noreferrer"
          className="social-icon-link tiktok"
        >
          <i className="fab fa-tiktok" />
        </a>
        <a
          href="https://www.instagram.com/hifidefi"
          target="_blank"
          rel="nofollow noreferrer"
          className="social-icon-link instagram"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCLKLaa_XiXZ4uacfGkunMaw"
          target="_blank"
          rel="nofollow noreferrer"
          className="social-icon-link youtube"
        >
          <i className="fab fa-youtube" />
        </a>
      </div>
    </div>
  );
}

export default FollowUsSection;
