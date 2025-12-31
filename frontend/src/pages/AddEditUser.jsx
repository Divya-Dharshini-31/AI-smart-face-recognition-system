import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function AddEditUser() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    registerNo: "",
    phone: "",
    department: "",
    tempPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("New User Created:", formData);
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
          className="flex-grow-1 d-flex justify-content-center align-items-start p-4"
          style={{ backgroundColor: "#dffdff", overflowY: "auto" }}
        >
          <div style={{ width: "100%", maxWidth: "900px" }}>
            {/* Page Heading */}
            <h4 className="fw-bold mb-4 text-center">Add User</h4>

            {/* Form Card */}
            <div className="bg-white p-4 rounded-4 shadow-sm">
              <h5 className="fw-semibold mb-4 text-center">
                User Information
              </h5>

              <div className="row">
                {/* Left Column */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Official Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@institution.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Role</label>
                    <select
                      name="role"
                      className="form-control"
                      value={formData.role}
                      onChange={handleChange}
                    >
                      <option value="">Select Role</option>
                      <option>Student</option>
                      <option>Teacher</option>
                    </select>
                  </div>
                </div>

                {/* Right Column */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Register Number / Employee ID
                    </label>
                    <input
                      type="text"
                      name="registerNo"
                      className="form-control"
                      value={formData.registerNo}
                      onChange={handleChange}
                      placeholder="Unique ID"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Contact number"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Department
                    </label>
                    <input
                      type="text"
                      name="department"
                      className="form-control"
                      value={formData.department}
                      onChange={handleChange}
                      placeholder="Department name"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 d-flex justify-content-center gap-3">
                <button
                  className="btn btn-info px-5"
                  onClick={handleSubmit}
                >
                  Create User
                </button>
                <button className="btn btn-outline-secondary px-5">
                  Created Records
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEditUser;
