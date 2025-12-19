import React, { useState, useEffect } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Settings() {
  const defaultProfile = {
    name: "Mr. Thomson",
    email: "admin@visiontrack.com",
    role: "Admin",
    phone: "9876543210",
    department: "Administration",
  };

  const [profile, setProfile] = useState(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);

  // Load from localStorage on page load
  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  // Save to localStorage
  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    setIsEditing(false);
  };

  return (
    <div className="d-flex flex-column" style={{ width: "100vw", height: "100vh" }}>
      <Topbar />

      <div className="d-flex flex-grow-1">
        <Sidebar />

        <div className="flex-grow-1 p-4" style={{ backgroundColor: "#dffdff" }}>
          <h4 className="fw-bold mb-4">Settings</h4>

          <div className="row">
            {/* Left menu */}
            <div className="col-md-3">
              <div className="list-group">
                <button className="list-group-item list-group-item-action active">
                  Profile
                </button>
              </div>
            </div>

            {/* Right content */}
            <div className="col-md-9">
              <div className="bg-white p-4 rounded shadow-sm">
                <h5 className="fw-semibold mb-4">Profile Information</h5>

                {/* Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={profile.name}
                    disabled={!isEditing}
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                  />
                </div>

                {/* Email (read-only) */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={profile.email}
                    disabled
                  />
                </div>

                {/* Role (read-only) */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Role</label>
                  <input
                    type="text"
                    className="form-control"
                    value={profile.role}
                    disabled
                  />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    value={profile.phone}
                    disabled={!isEditing}
                    onChange={(e) =>
                      setProfile({ ...profile, phone: e.target.value })
                    }
                  />
                </div>

                {/* Department */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Department</label>
                  <input
                    type="text"
                    className="form-control"
                    value={profile.department}
                    disabled={!isEditing}
                    onChange={(e) =>
                      setProfile({ ...profile, department: e.target.value })
                    }
                  />
                </div>

                {/* Action Buttons */}
                {!isEditing ? (
                  <button
                    className="btn btn-info px-4"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </button>
                ) : (
                  <div className="d-flex gap-3">
                    <button
                      className="btn btn-success px-4"
                      onClick={handleSave}
                    >
                      Save & Continue
                    </button>
                    <button
                      className="btn btn-outline-secondary px-4"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
