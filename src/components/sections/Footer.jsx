import React from "react";
import "./Footer.css";
// import { Button } from "../Button";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className="footer-subscription">
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section> */}
      <section className="social-media">
        <div className="social-media-wrap">
          Copyright © HiFi Gaming Society
          {/* <div class="footer-logo social-logo">
            <img src="/images/hifi.png" alt="hifi-footer" width={60}></img>
          </div> */}
          {/* <div class="website-rights">Copyright © Hifi Gaming Society</div> */}
          {/* <div class="social-icons">
            <a
              href="https://t.me/HiFiGamingSocietyPlatform"
              target="_blank"
              rel="nofollow noreferrer"
              className="social-icon-link telegram"
            >
              <i class="fab fa-telegram" />
            </a>
            <a
              href="https://www.twitch.tv/hifigamingsociety"
              target="_blank"
              rel="nofollow noreferrer"
              className="social-icon-link twitch"
            >
              <i class="fab fa-twitch" />
            </a>
            <a
              href="https://discord.gg/PM8VGq9Q"
              target="_blank"
              rel="nofollow noreferrer"
              className="social-icon-link discord"
            >
              <i class="fab fa-discord" />
            </a>
            <a
              href="https://hifigamingsociety.medium.com/"
              target="_blank"
              rel="nofollow noreferrer"
              className="social-icon-link medium"
            >
              <i class="fab fa-medium" />
            </a>
            <a
              href="https://twitter.com/HiFiDeFi"
              target="_blank"
              rel="nofollow noreferrer"
              className="social-icon-link twitter"
            >
              <i class="fab fa-twitter" />
            </a>
            <a
              href="https://www.tiktok.com/@hifigamingsocietytv"
              target="_blank"
              rel="nofollow noreferrer"
              className="social-icon-link tiktok"
            >
              <i class="fab fa-tiktok" />
            </a>
            <a
              href="https://www.instagram.com/hifidefi"
              target="_blank"
              rel="nofollow noreferrer"
              className="social-icon-link instagram"
            >
              <i class="fab fa-instagram" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCLKLaa_XiXZ4uacfGkunMaw"
              target="_blank"
              rel="nofollow noreferrer"
              className="social-icon-link youtube"
            >
              <i class="fab fa-youtube" />
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Footer;
