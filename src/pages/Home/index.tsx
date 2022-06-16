import React from "react";
import Lottie from "react-lottie";
import Devs from "../../lotties/developers.json";
import "./home.css";

function HomePage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Devs,
  };

  return (
    <div className="home-page">
      <Lottie options={defaultOptions} height={500} width={500} />
      <div>
        <h1 className="home-title">NAILED IT!</h1>
        <p className="home-subtitle">
          Welcome to XD Creative Field Day | "NAILED IT"... A chance for
          designers and developers to collaborate on something fun and creative
          for the day. It’s like a casual hackathon but with a twist.
        </p>
        <p className="home-subtitle">
          It’s like a casual hackathon but with a TWIST.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
