import Button from "components/Button";
import React from "react";
import "../../App.css";
import "./styles.css";
import video from "../../assets/video/video-1.mp4";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={video} muted autoPlay loop />
      <h1 className="hero-title">ADVENTURE AWAITS</h1>
      <p className="hero-text">What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
