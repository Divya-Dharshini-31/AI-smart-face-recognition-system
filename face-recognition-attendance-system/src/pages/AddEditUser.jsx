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
    <div className="container-fluid vh-100 vw-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#e6f8fb" }}>
      <div className="row shadow bg-white rounded-4 overflow-hidden" style={{ width: "95%", height: "90vh" }}>
        <div className="d-flex flex-grow-1 overflow-hidden" style={{ height: "100%" }}>
          {/* Sidebar */}
          <div className="d-flex flex-column justify-content-between align-items-center py-3" style={{ width: "80px", backgroundColor: "#ffffff", boxShadow: "2px 0 10px rgba(0,0,0,0.1)" }}>
            <div className="text-center">
              <img src="/logo.jpeg" alt="logo" style={{ width: "50px", height: "50px" }} />
              <div className="fw-bold small mt-2">VISIONTRACK</div>
              <div className="nav flex-column mt-3">
                <i className="bi bi-house-door-fill my-3" title="Home"></i>
                <i className="bi bi-speedometer2 my-3" title="Dashboard"></i>
                <i className="bi bi-people-fill my-3" title="Users"></i>
                <i className="bi bi-calendar-event my-3" title="Calendar"></i>
                <i className="bi bi-gear-fill my-3" title="Settings"></i>
              </div>
            </div>
            <div className="mb-2">
              <button className="btn btn-sm btn-outline-danger" title="Logout">
                <i className="bi bi-box-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow-1 d-flex flex-column p-3 overflow-auto">
            {/* Top Navbar */}
            <div className="d-flex justify-content-between align-items-center mb-4 px-2">
              <div className="d-flex align-items-center">
                <img src="/eyelogo.jpeg" alt="VisionTrack" style={{ width: "40px", height: "40px" }} className="me-2" />
                <h5 className="mb-0 text-primary fw-bold">VisionTrack</h5>
              </div>
              <div className="flex-grow-1 px-4">
                <div className="input-group">
                  <span className="input-group-text bg-white"><i className="bi bi-search text-muted"></i></span>
                  <input type="text" className="form-control" placeholder="Search.." />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-bell fs-5 me-3 text-secondary"></i>
                <i className="bi bi-person-circle fs-5 me-1 text-secondary"></i>
                <span className="text-muted fw-semibold">Mr. Thomson</span>
                <i className="bi bi-caret-down-fill ms-1 text-muted"></i>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-4 shadow p-4 mx-auto" style={{ width: "100%", maxWidth: "1000px", height: "auto" }}>
              <h3 className="text-center fw-bold mb-4">Add / Edit User</h3>
              <div className="row">
                {/* Left Form */}
                <div className="col-md-6 pe-md-4 border-end">
                  <div className="text-center mb-3">
                    <div className="rounded-circle bg-secondary d-flex justify-content-center align-items-center mx-auto" style={{ width: "100px", height: "100px" }}>
                      <i className="bi bi-person-fill text-white" style={{ fontSize: "2rem" }}></i>
                    </div>
                    <input type="file" name="profileImg" onChange={handleChange} accept="image/*" className="form-control mt-2" />
                  </div>
                  <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="form-control mb-2 bg-info-subtle" />
                  <select name="gender" value={formData.gender} onChange={handleChange} className="form-control mb-2 bg-info-subtle">
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="form-control mb-2 bg-info-subtle" />
                </div>

                {/* Right Form */}
                <div className="col-md-6 ps-md-4 mt-4 mt-md-0">
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="form-control mb-2 bg-info-subtle" />
                  <input type="text" name="registerNo" placeholder="Register Number" value={formData.registerNo} onChange={handleChange} className="form-control mb-2 bg-info-subtle" />
                  <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} className="form-control mb-2 bg-info-subtle" />
                  <textarea name="address" rows="2" placeholder="Address" value={formData.address} onChange={handleChange} className="form-control mb-2 bg-info-subtle" />
                  <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="form-control mb-2 bg-info-subtle" />
                  <div className="text-center mt-3">
                    <button type="button" onClick={handleSubmit} className="btn btn-info fw-bold px-4">DONE</button>
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
      </div>
    </div>
  );
}

export default AddEditUser;