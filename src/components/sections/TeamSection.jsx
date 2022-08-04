import React from "react";
import "../../App.css";
import "./TeamSection.css";

function TeamSection() {
  return (
    <div id="team" className="team-container">
      <h3>TEAM</h3>
      <ul className="ul-team">
        <li>
          <img src="/images/team/jm.jpg" alt="pos1"></img>
          <span className="name-team">JM</span>
          <span className="position-team">Founder, CEO</span>
          <div className="profile-icons">
            <a
              href="https://www.linkedin.com/in/techstardust/"
              target="_blank"
              rel="noreferrer"
              className="social social-icon-link linkedin"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://twitter.com/JMZHiFiver"
              target="_blank"
              rel="noreferrer"
              className="social social-icon-link twitter"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </li>
        <li>
          <img src="/images/team/royan.jpg" alt="pos1"></img>
          <span className="name-team">Royan</span>
          <span className="position-team">Designer</span>
        </li>
        <li>
          <img src="/images/team/bryan.jpg" alt="pos1"></img>
          <span className="name-team">Bryan</span>
          <span className="position-team">Creative Lead</span>
        </li>
        <li>
          <img src="/images/team/peter.jpg" alt="pos1"></img>
          <span className="name-team">Peter</span>
          <span className="position-team">Operations</span>
        </li>
        <li>
          <img src="/images/team/ming.jpg" alt="pos1"></img>
          <span className="name-team">Jamuraan</span>
          <span className="position-team">Quality Assurance</span>
        </li>
        <li>
          <img src="/images/team/bastart.jpg" alt="pos1"></img>
          <span className="name-team">BA Start</span>
          <span className="position-team">Video Game Writer</span>
        </li>
        <li>
          <img src="/images/team/valentyna.jpg" alt="pos1"></img>
          <span className="name-team">Valentyna</span>
          <span className="position-team">Cover Artist</span>
        </li>
        <li>
          <img src="/images/team/kuang.jpg" alt="pos1"></img>
          <span className="name-team">KW</span>
          <span className="position-team">Advisor</span>
          <div className="profile-icons">
            <a
              href="https://www.linkedin.com/in/kuangwei/"
              target="_blank"
              rel="noreferrer"
              className="social social-icon-link linkedin"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </li>
        <li>
          <img src="/images/team/anthony.jpg" alt="pos1"></img>
          <span className="name-team">Huble</span>
          <span className="position-team">Development Lead</span>
        </li>
        <li>
          <img src="/images/team/ricardo.jpg" alt="pos1"></img>
          <span className="name-team">Ricardo</span>
          <span className="position-team">Design Lead</span>
          <div className="profile-icons">
            <a
              href="https://www.instagram.com/sunlet_studio/"
              target="_blank"
              rel="noreferrer"
              className="social social-icon-link instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://twitter.com/sunlet_studio"
              target="_blank"
              rel="noreferrer"
              className="social social-icon-link twitter"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </li>
        <li>
          <img src="/images/team/eleazar.jpg" alt="pos1"></img>
          <span className="name-team">Eleazar</span>
          <span className="position-team">Full Stack Developer</span>
          <div className="profile-icons">
            <a
              href="https://www.linkedin.com/in/eleazar-pin-etchave-24a93b138/"
              target="_blank"
              rel="noreferrer"
              className="social social-icon-link linkedin"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://twitter.com/EleaTati"
              target="_blank"
              rel="noreferrer"
              className="social social-icon-link twitter"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </li>
        <li>
          <img src="/images/team/jacob.jpg" alt="pos1"></img>
          <span className="name-team">Jacob</span>
          <span className="position-team">CX, Process Design</span>
        </li>
        <li>
          <img src="/images/team/yannick.jpg" alt="pos1"></img>
          <span className="name-team">Yannick</span>
          <span className="position-team">Sales</span>
        </li>
        <li>
          <img src="/images/team/mark.jpg" alt="pos1"></img>
          <span className="name-team">Mark</span>
          <span className="position-team">Guild Manager</span>
        </li>
        <li>
          <img src="/images/team/faith.jpg" alt="pos1"></img>
          <span className="name-team">Faith</span>
          <span className="position-team">Guild Manager</span>
        </li>
        {/* <li>
          <img src="/images/team/stijn.jpg" alt="pos1"></img>
          <span className="name-team">Stijn</span>
          <span className="position-team">Marketing</span>
        </li> */}
        {/* <li>
          <img src="/images/team/jerry.jpg" alt="pos1"></img>
          <span className="name-team">Jerry</span>
          <span className="position-team">Program Director</span>
        </li> */}
      </ul>
      <div className="hiring">
        <button
          className="hiring-button-design hiring-btn"
          onClick={() => {
            window.open(
              "https://forms.gle/wQH1kx9MY19YhwbH7",
              "_blank"
            );
          }}
        >
          We are hiring!
        </button>
      </div>
    </div>
  );
}

export default TeamSection;
