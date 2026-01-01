import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sidebarsmall() {
  const navigate = useNavigate();

  const navItems = [
    { icon: 'bi-house-door-fill', label: 'Home', path: '/dashboard' },
    { icon: 'bi-people-fill', label: 'Users', path: '/add-edit-user' },

    // ✅ NEW
    { icon: 'bi-send-fill', label: 'Send Leave', path: '/send-leave-request' },

    { icon: 'bi-calendar-check-fill', label: 'Leave Requests', path: '/leave-requests' },
    { icon: 'bi-bar-chart-fill', label: 'Reports', path: '/admin-report' },
  ];

  const handleLogout = () => {
    navigate('/login');
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
      <div className="nav flex-column">
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

      <button className="btn btn-sm btn-outline-danger" onClick={handleLogout}>
        <i className="bi bi-box-arrow-right fs-5"></i>
      </button>
    </div>
  );
}

export default Sidebarsmall;
