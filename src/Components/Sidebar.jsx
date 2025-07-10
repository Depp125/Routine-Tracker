import React from 'react';
import './Sidebar.css';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-header">
      <span className="sidebar-logo">🕒</span>
      <span className="sidebar-title">Workspace</span>
    </div>
    <nav className="sidebar-nav">
      <div className="sidebar-section">
        <div className="sidebar-section-title">TRACK</div>
        <div className="sidebar-link active">Timer</div>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-section-title">ANALYZE</div>
        <div className="sidebar-link">Reports</div>
        <div className="sidebar-link">Approvals</div>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-section-title">MANAGE</div>
        <div className="sidebar-link">Projects</div>
        <div className="sidebar-link">Clients</div>
        <div className="sidebar-link">Members</div>
        <div className="sidebar-link">Billable rates</div>
        <div className="sidebar-link">Invoices</div>
        <div className="sidebar-link">Tags</div>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-section-title">ADMIN</div>
        <div className="sidebar-link">Subscription</div>
        <div className="sidebar-link">Organization</div>
        <div className="sidebar-link">Settings</div>
        <div className="sidebar-link">Admin Console</div>
      </div>
    </nav>
    <div className="sidebar-profile">
      <span role="img" aria-label="profile">🧑‍💻</span>
      <span>PROFILE</span>
    </div>
  </aside>
);

export default Sidebar; 