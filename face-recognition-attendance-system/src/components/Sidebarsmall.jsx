import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sidebarsmall() {
  const navigate = useNavigate();

  const navItems = [
    { icon: 'bi-house-door-fill', label: 'Home', path: '/' },
    { icon: 'bi-speedometer2', label: 'Dashboard', path: '/dashboard' },
    { icon: 'bi-people-fill', label: 'Users', path: '/add-edit-user' },
    { icon: 'bi-calendar-event', label: 'Calendar', path: '/calendar' },
    { icon: 'bi-bar-chart-fill', label: 'Reports', path: '/admin-report' },
    { icon: 'bi-envelope-fill', label: 'Messages', path: '/messages' },
  ];

  const handleLogout = () => {
    alert("Logged out!");
    navigate("/login");
  };

  return (
    <div
      className="d-flex flex-column justify-content-between align-items-center py-4"
      style={{
        width: "90px",
        backgroundColor: "#ffffff",
        boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Icons */}
      <div className="nav flex-column mt-1" style={{ marginTop: "-10px" }}>
        {navItems.map((item, index) => (
          <i
            key={index}
            className={`bi ${item.icon} my-3 fs-4 text-dark`}
            title={item.label}
            onClick={() => navigate(item.path)}
            style={{ cursor: 'pointer' }}
          ></i>
        ))}
      </div>

      {/* Logout */}
      <div className="mb-2">
        <button className="btn btn-sm btn-outline-danger" title="Logout" onClick={handleLogout}>
          <i className="bi bi-box-arrow-right fs-5"></i>
        </button>
      </div>
    </div>
  );
}

export default Sidebarsmall;
