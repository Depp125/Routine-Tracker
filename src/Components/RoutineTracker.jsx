import React, { useState } from "react";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import "./RoutineTracker.css";

const RoutineTracker = () => {
  const [routine, setRoutine] = useState("");
  const [date, setDate] = useState(new Date());
  const [completion, setCompletion] = useState(40);
  const [duration, setDuration] = useState(60);

  return (
    <div className="routine-tracker p-4">
      {/* Header */}
      <div className="header flex justify-content-between align-items-center mb-4">
        <h2 className="text-white">Noblest Being</h2>
        <div className="flex gap-2">
          <Button label="Home" className="p-button-text text-white" />
          <Button label="Profile Board" className="p-button-text text-white" />
          <Button label="History" className="p-button-text text-white" />
          <Button
            label="Routine Tracker"
            className="p-button-text text-white"
          />
        </div>
      </div>

      {/* Summary */}
      <div className="summary grid text-white text-center mb-4">
        <div className="col">
          <h4>Current Streak</h4>
          <p>5</p>
        </div>
        <div className="col">
          <h4>Max Streak</h4>
          <p>5</p>
        </div>
        <div className="col">
          <h4>Total Completions</h4>
          <p>3</p>
        </div>
        <div className="col">
          <h4>Total Time Spent</h4>
          <p>23h:15m:30s</p>
        </div>
      </div>

      {/* Date Picker */}
      {/* <div className="mb-3 text-center">
        <Calendar
          value={date}
          onChange={(e) => setDate(e.value)}
          dateFormat="mm/dd/yy"
          showIcon
        />
      </div> */}
      <div className="mb-3 text-center">
        <Calendar
          value={date}
          onChange={(e) => setDate(e.value)}
          dateFormat="mm/dd/yy"
        />
      </div>

      {/* Timeline */}
      <div className="timeline text-white mb-4">
        <h5>24-Hour-Timeline</h5>
        {[...Array(24)].map((_, hour) => (
          <div key={hour} className="hour-line">
            {hour === 0
              ? "12 AM"
              : hour < 12
              ? `${hour} AM`
              : hour === 12
              ? "12 PM"
              : `${hour - 12} PM`}
          </div>
        ))}
      </div>

      {/* Routine Input */}
      <div className="mb-2">
        <h5 className="text-white mb-2">Your Routine</h5>
        <div className="routine-input flex align-items-center gap-3 mb-4">
          <InputText
            placeholder="e.g Workout"
            value={routine}
            onChange={(e) => setRoutine(e.target.value)}
          />
          <div className="flex align-items-center">
            <InputNumber
              value={duration}
              onValueChange={(e) => setDuration(e.value)}
              min={1}
              max={300}
              placeholder="Time"
            />
            <span className="ml-2 text-white">min</span>
          </div>
          <Button label="ADD" />
        </div>
      </div>

      {/* Progress Bar */}
      <div>
        <h5 className="text-white">Completions Task</h5>
        <ProgressBar value={completion}></ProgressBar>
      </div>
    </div>
  );
};

export default RoutineTracker;
