import React from 'react';
import './Topbar.css';

const Topbar = ({ timer, onStart, onStop, isRunning }) => (
  <header className="topbar">
    <div className="topbar-title">What are you working on?</div>
    <div className="topbar-controls">
      <div className="topbar-timer">
        <span role="img" aria-label="timer">⏱️</span>
        <span>{timer}</span>
        <button onClick={isRunning ? onStop : onStart} className="timer-btn">
          {isRunning ? 'Stop' : 'Start'}
        </button>
      </div>
      <div className="topbar-profile">
        <span role="img" aria-label="profile">🧑‍💻</span>
      </div>
    </div>
  </header>
);

export default Topbar; 