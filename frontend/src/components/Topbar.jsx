import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");

  // Load user name from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      const fullName = `${user.first_name || ""} ${user.last_name || ""}`.trim();
      setUserName(fullName || "User");
    }
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-between bg-white shadow-sm"
      style={{ height: "70px", width: "100%", padding: "0 24px" }}
    >
      {/* Left: Logo */}
      <div className="d-flex align-items-center gap-2">
        <img src="/eyelogo.jpeg" alt="logo" width="35" />
        <span className="fw-bold text-primary fs-5">VisionTrack</span>
      </div>

      {/* Middle: Search */}
      <div className="flex-grow-1 d-flex justify-content-left px-5">
        <div
          className="position-relative"
          style={{ maxWidth: "500px", width: "100%", paddingLeft: "50px" }}
        >
          <i
            className="bi bi-search position-absolute"
            style={{
              top: "50%",
              left: "62px",
              transform: "translateY(-50%)",
              color: "#6c757d",
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
      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-bell fs-5"></i>

        {/* Profile Dropdown */}
        <div className="dropdown">
          <div
            className="d-flex align-items-center gap-2 dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-person-circle fs-5"></i>
            <span className="fw-semibold">{userName}</span>
          </div>

          <ul className="dropdown-menu dropdown-menu-end mt-2">
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => navigate("/settings")}
              >
                Settings
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
