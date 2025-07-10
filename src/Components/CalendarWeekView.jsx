import React from 'react';
import './CalendarWeekView.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const hours = Array.from({ length: 12 }, (_, i) => 8 + i); // 8am to 8pm

const CalendarWeekView = ({ entries, onAddEntry }) => (
  <div className="calendar-week-view">
    <div className="calendar-header">
      {days.map((day, idx) => (
        <div key={day} className="calendar-day-header">
          <div>{day}</div>
        </div>
      ))}
    </div>
    <div className="calendar-body">
      {hours.map((hour) => (
        <div key={hour} className="calendar-row">
          {days.map((day, dIdx) => {
            const entry = entries.find(e => e.day === dIdx && e.hour === hour);
            return (
              <div
                key={day + hour}
                className={`calendar-cell${entry ? ' has-entry' : ''}`}
                onClick={() => onAddEntry(day, hour, dIdx)}
              >
                {entry && <div className="calendar-entry">{entry.label} <span>{entry.duration}</span></div>}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  </div>
);

export default CalendarWeekView; 