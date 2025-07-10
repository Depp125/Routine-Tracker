import React, { useState, useRef } from 'react';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import TimerBar from './Components/TimerBar';
import CalendarWeekView from './Components/CalendarWeekView';
import GoalsFavorites from './Components/GoalsFavorites';
import './App.css';

function formatTime(sec) {
  const h = String(Math.floor(sec / 3600)).padStart(2, '0');
  const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function App() {
  // Timer state
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Calendar entries state
  const [entries, setEntries] = useState([
    { day: 3, hour: 10, label: 'IND PROJECT', duration: '00:00:08' }, // Example entry for Thursday 10am
  ]);

  // Timer logic
  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    // Add entry to Thursday 10am for demo (you can enhance this logic)
    setEntries((prev) => [
      ...prev,
      { day: 3, hour: 10, label: 'IND PROJECT', duration: formatTime(timer) },
    ]);
    setTimer(0);
  };

  // Add/Edit time entry in calendar
  const handleAddEntry = (day, hour, dIdx) => {
    const label = prompt('Enter task label:', 'New Task');
    if (label) {
      setEntries((prev) => [
        ...prev,
        { day: dIdx, hour, label, duration: '01:00:00' },
      ]);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8f0f6' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Topbar timer={formatTime(timer)} onStart={handleStart} onStop={handleStop} isRunning={isRunning} />
        <TimerBar timer={formatTime(timer)} onStart={handleStart} onStop={handleStop} isRunning={isRunning} />
        <div style={{ display: 'flex', flex: 1, alignItems: 'flex-start' }}>
          <div style={{ flex: 3 }}>
            <CalendarWeekView entries={entries} onAddEntry={handleAddEntry} />
          </div>
          <div style={{ flex: 1 }}>
            <GoalsFavorites />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
