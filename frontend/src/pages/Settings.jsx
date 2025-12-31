import React, { useState, useEffect, useRef } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Settings() {
  const fileInputRef = useRef(null);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    registerNo: "",
    department: "",
    gender: "",
    profilePreview: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Load user data
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setProfile({
        name: `${user.first_name || ""} ${user.last_name || ""}`.trim(),
        email: user.email || "",
        role: user.role || "",
        phone: user.phone || "",
        registerNo: user.registerNo || "",
        department: user.department || "",
        gender: user.gender || "",
        profilePreview: user.profilePreview || "",
      });
    }
  }, []);

  // Image upload handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, profilePreview: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // Save profile
  const handleSave = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const updatedUser = {
      ...storedUser,
      first_name: profile.name.split(" ")[0] || "",
      last_name: profile.name.split(" ").slice(1).join(" ") || "",
      phone: profile.phone,
      registerNo: profile.registerNo,
      department: profile.department,
      gender: profile.gender,
      profilePreview: profile.profilePreview,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsEditing(false);
  };

  return (
    <div className="d-flex flex-column" style={{ width: "100vw", height: "100vh", overflow: "hidden"}}>
      <Topbar />

      <div className="d-flex" style={{ flexGrow: 1, overflow: "hidden" }}>

        <div style={{ width: "250px", flexShrink: 0 }}>
  <Sidebar />
</div>


        <div className="flex-grow-1 p-4" style={{ backgroundColor: "#dffdff", overflowY: "auto" }}>
          <h4 className="fw-bold mb-4">Settings</h4>

          <div className="row">
            <div className="col-lg-3 col-md-4 mb-3">
              <div className="list-group shadow-sm rounded">
                <button className="list-group-item list-group-item-action active">
                  Profile
                </button>
              </div>
            </div>

            <div className="col-lg-7 col-md-8">
              <div className="bg-white p-4 rounded-4 shadow-sm">

                {/* Profile Header */}
                <div className="row mb-4">
                  <div className="col-md-4 text-center">
                    <img
                      src={profile.profilePreview || "/default-avatar.png"}
                      alt="Profile"
                      className="rounded-circle"
                      style={{
                        width: "140px",
                        height: "140px",
                        objectFit: "cover",
                        border: "3px solid #0dcaf0",
                      }}
                    />

                    {isEditing && (
                      <>
                        <button
                          className="btn btn-outline-info btn-sm mt-3"
                          onClick={() => fileInputRef.current.click()}
                        >
                          Upload Profile Photo
                        </button>

                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          hidden
                          onChange={handleImageChange}
                        />
                      </>
                    )}
                  </div>
                  <div style={{ marginTop: "-10px", marginLeft: "-6px"}} className="col-md-8 d-flex flex-column justify-content-center">
                    <h3 className="fw-bold mb-1">
                      {profile.name || "User Name"}
                    </h3>
                    <p className="text-secondary fs-5 mb-0">
                      {profile.role}
                    </p>
                  </div>

                </div>


                {/* Form */}
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      className="form-control"
                      value={profile.name}
                      disabled={!isEditing}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email</label>
                    <input className="form-control" value={profile.email} disabled />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Role</label>
                    <input className="form-control" value={profile.role} disabled />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Phone</label>
                    <input
                      className="form-control"
                      value={profile.phone}
                      disabled={!isEditing}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Register Number</label>
                    <input
                      className="form-control"
                      value={profile.registerNo}
                      disabled={!isEditing}
                      onChange={(e) => setProfile({ ...profile, registerNo: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Department</label>
                    <input
                      className="form-control"
                      value={profile.department}
                      disabled={!isEditing}
                      onChange={(e) => setProfile({ ...profile, department: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Gender</label>
                    <select
                      className="form-select"
                      value={profile.gender}
                      disabled={!isEditing}
                      onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                    >
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4">
                  {!isEditing ? (
                    <button className="btn btn-info px-4" onClick={() => setIsEditing(true)}>
                      Edit Profile
                    </button>
                  ) : (
                    <div className="d-flex gap-3">
                      <button className="btn btn-success px-4" onClick={handleSave}>
                        Save & Continue
                      </button>
                      <button className="btn btn-outline-secondary px-4" onClick={() => setIsEditing(false)}>
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

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
