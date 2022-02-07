import React from "react";
import { Button } from "./Button";
import { Link } from "react-scroll";

import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/*    <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="her-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          <Link to="get">GET STARTED</Link>
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          <a
            href="https://www.youtube.com/watch?v=Pko9CVmfNdY"
            target="_blank"
            style={{ color: "#242424" }}
          >
            WATCH TRAILER <i className="far fa-play-circle" />
          </a>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
