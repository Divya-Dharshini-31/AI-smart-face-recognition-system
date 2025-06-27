import React from 'react';

function Topbar() {
  return (
    <div className="topbar w-100 d-flex justify-content-between align-items-center px-4 py-2 shadow-sm bg-white" style={{ height: '70px' }}>
      
      {/* Search Bar */}
      <input
        type="text"
        className="form-control"
        placeholder="Search.."
        style={{ maxWidth: '500px', width: '100%' }}
      />

      {/* Notification + User */}
      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-bell fs-5"></i>

        {/* User Dropdown */}
        <div className="dropdown">
          <span
            className="dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Mr. Thomson
          </span>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
