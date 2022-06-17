import React from 'react';
import Devs from '../../lotties/developers.json';
import './home.css';

function HomePage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Devs,
  };

  return (
    <div className="home-page">
      <div>
        <button id="addPlinko">Add Plinko</button>

      </div>
    </div>
  );
}

export default HomePage;
