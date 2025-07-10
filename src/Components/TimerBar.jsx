import React from 'react';
import './TimerBar.css';

const TimerBar = ({ timer, onStart, onStop, isRunning }) => (
  <div className="timerbar">
    <button onClick={isRunning ? onStop : onStart} className="timerbar-btn">
      {isRunning ? '⏹️ Stop' : '▶️ Start'}
    </button>
    <span className="timerbar-time">{timer}</span>
  </div>
);

export default TimerBar; 