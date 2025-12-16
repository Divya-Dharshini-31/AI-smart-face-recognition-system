import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar border-end p-3" style={{ width: '250px', minHeight: '100vh', backgroundColor: 'white' }}>
      <ul className="nav flex-column">
        <li className="nav-item mb-3">
          <a className="nav-link text-dark" href="#"><i className="bi bi-house me-2"></i>Home</a>
        </li>
        <li className="nav-item mb-3">
          <a className="nav-link text-dark" href="#"><i className="bi bi-person-plus me-2"></i>Add/Edit Users</a>
        </li>
        <li className="nav-item mb-3">
          <a className="nav-link text-dark" href="#"><i className="bi bi-calendar-check me-2"></i>View Leave Requests</a>
        </li>
        <li className="nav-item mb-3">
          <a className="nav-link text-dark" href="#"><i className="bi bi-clock-history me-2"></i>Attendance Logs</a>
        </li>
        <li className="nav-item mb-3">
          <a className="nav-link text-dark" href="#"><i className="bi bi-file-earmark-text me-2"></i>Generate Reports</a>
        </li>
        <li>
          <a className="nav-link text-danger mt-4" href="#"><i className="bi bi-box-arrow-right me-2"></i>Logout</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
