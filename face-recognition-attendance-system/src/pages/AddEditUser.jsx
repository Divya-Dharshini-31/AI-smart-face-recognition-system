import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "../components/Footer";

function AddEditUser() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    phone: "",
    email: "",
    registerNo: "",
    department: "",
    address: "",
    dob: "",
    profileImg: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = () => {
    console.log("Submitted:", formData);
  };

  return (
    <div className="d-flex justify-content-center" style={{ minHeight: "100vh", backgroundColor: "#b7e6ec" }}>
      {/* Sidebar */}
      <div
        className="d-flex flex-column align-items-center py-4"
        style={{
          width: "80px",
          backgroundColor: "#ffffff",
          boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="/logo.jpeg"
          alt="logo"
          className="mb-3"
          style={{ width: "60px", height: "60px", objectFit: "contain" }}
        />
        <div className="text-center mb-4 fw-bold" style={{ fontSize: "0.8rem" }}>VISIONTRACK</div>

        {/* Sidebar icons */}
        <div className="nav flex-column text-center">
          <i className="bi bi-house-door-fill my-3" title="Home"></i>
          <i className="bi bi-speedometer2 my-3" title="Dashboard"></i>
          <i className="bi bi-people-fill my-3" title="Users"></i>
          <i className="bi bi-calendar-event my-3" title="Calendar"></i>
          <i className="bi bi-gear-fill my-3" title="Settings"></i>
        </div>
      </div>

      {/* Main Form Area */}
      <div className="d-flex flex-column p-4" style={{ maxWidth: "1100px", width: "100%" }}>
        <div
          className="bg-white rounded-4 shadow p-4 mx-auto"
          style={{ width: "100%", maxWidth: "1000px", height: "auto" }}
        >
          <h3 className="text-center fw-bold mb-4">Add / Edit User</h3>
          <div className="row">
            {/* Left Form */}
            <div className="col-md-6 pe-md-4 border-end">
              <div className="text-center mb-3">
                <div
                  className="rounded-circle bg-secondary d-flex justify-content-center align-items-center mx-auto"
                  style={{ width: "100px", height: "100px" }}
                >
                  <i className="bi bi-person-fill text-white" style={{ fontSize: "2rem" }}></i>
                </div>
                <input
                  type="file"
                  name="profileImg"
                  onChange={handleChange}
                  accept="image/*"
                  className="form-control mt-2"
                />
              </div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="form-control mb-2 bg-info-subtle"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-control mb-2 bg-info-subtle"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="form-control mb-2 bg-info-subtle"
              />
            </div>

            {/* Right Form */}
            <div className="col-md-6 ps-md-4 mt-4 mt-md-0">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="form-control mb-2 bg-info-subtle"
              />
              <input
                type="text"
                name="registerNo"
                placeholder="Register Number"
                value={formData.registerNo}
                onChange={handleChange}
                className="form-control mb-2 bg-info-subtle"
              />
              <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
                className="form-control mb-2 bg-info-subtle"
              />
              <textarea
                name="address"
                rows="2"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="form-control mb-2 bg-info-subtle"
              />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="form-control mb-2 bg-info-subtle"
              />
              <div className="text-center mt-3">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn btn-info fw-bold px-4"
                >
                  DONE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AddEditUser;
