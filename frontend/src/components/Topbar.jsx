import React from 'react';

function Topbar() {
  return (
    <div
      className="d-flex align-items-center justify-content-between bg-white shadow-sm"
      style={{ height: '70px', width: '100%', padding: '0 24px' }}
    >
      {/* Left: Logo + VisionTrack */}
      <div className="d-flex align-items-center gap-2">
        <img src="/eyelogo.jpeg" alt="logo" width="35" />
        <span className="fw-bold text-primary fs-5">VisionTrack</span>
      </div>

      {/* Middle: Search Bar */}
      <div className="flex-grow-1 d-flex justify-content-left px-5">
        <div className="position-relative" style={{ maxWidth: '500px', width: '100%',paddingLeft:'50px' }}>
          <i
            className="bi bi-search position-absolute"
            style={{
              top: '50%',
              left: '62px',
              transform: 'translateY(-50%)',
              color: '#6c757d'
            }}
          ></i>
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Search..."
          />
        </div>
      </div>


      {/* Right: Notifications + Profile */}
      <div className="d-flex align-items-center gap-3"style={{paddingRight:'10px'}}>
        <i className="bi bi-bell fs-5"></i>
          {/* User Dropdown with icon */}
        <div className="dropdown d-flex align-items-center">
          <i className="bi bi-person-circle fs-5 me-2"></i> {/* 👤 User Icon */}
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
