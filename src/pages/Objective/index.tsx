import React from "react";
import Lottie from "react-lottie";
import Navigate from "../../lotties/navigate.json";
import "./objective.css";

function ObjectivePage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Navigate,
  };

  return (
    <div className="objective-page">
      <Lottie options={defaultOptions} height={300} width={400} />
      <div>
        <h1 className="objective-title">OBJECTIVE</h1>
        <p className="objective-subtitle">
          Navigating an application can be hard for your users...It's your job
          to make it even HARDER
        </p>
        <p className="objective-subtitle">
          Design & Implement a new method for navigating this application
        </p>
        <p className="objective-subtitle">
          Throw convention out the window, think outside the box, and take BAD
          practices to the extreme!
        </p>
      </div>
    </div>
  );
}

export default ObjectivePage;
