import React, { useState, useEffect } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Settings() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Load user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setProfile({
        name: `${user.first_name || ""} ${user.last_name || ""}`.trim(),
        email: user.email || "",
        role: user.role || "",
        phone: user.phone || "",
      });
    }
  }, []);

  // Save updated profile
  const handleSave = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    const updatedUser = {
      ...storedUser,
      first_name: profile.name.split(" ")[0] || "",
      last_name: profile.name.split(" ").slice(1).join(" ") || "",
      phone: profile.phone,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsEditing(false);
  };

  return (
    <div
      className="d-flex flex-column"
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      {/* Topbar */}
      <Topbar />

      {/* Layout */}
      <div className="d-flex flex-grow-1" style={{ overflow: "hidden" }}>
        <Sidebar />

        {/* Main Content */}
        <div
          className="flex-grow-1 p-4"
          style={{ backgroundColor: "#dffdff", overflowY: "auto" }}
        >
          <h4 className="fw-bold mb-4">Settings</h4>

          <div className="row">
            {/* Left Menu */}
            <div className="col-lg-3 col-md-4">
              <div className="list-group shadow-sm rounded">
                <button className="list-group-item list-group-item-action active">
                  Profile
                </button>
              </div>
            </div>

            {/* Profile Content */}
            <div className="col-lg-6 col-md-8 ms-lg-2">
              <div className="bg-white p-4 rounded-4 shadow-sm">
                <h5 className="fw-semibold mb-4">
                  Profile Information
                </h5>

                {/* Full Name */}
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

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={profile.email}
                    disabled
                  />
                </div>

                {/* Role */}
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
                <div className="mb-4">
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

                {/* Actions */}
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
