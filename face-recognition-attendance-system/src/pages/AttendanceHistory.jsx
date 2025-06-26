import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/CalendarStyles.css";

function AttendanceHistory() {
  const [date, setDate] = useState(new Date());
  const [percentage, setPercentage] = useState(0);

  const attendanceMap = {
    "2024-05-23": "present",
    "2024-05-22": "absent",
    "2024-05-21": "late",
  };

  useEffect(() => {
    const total = Object.keys(attendanceMap).length;
    const presentDays = Object.values(attendanceMap).filter(
      (v) => v === "present" || v === "late"
    ).length;
    setPercentage(Math.round((presentDays / total) * 100));
  }, []);

  return (
    <div
      className="container-fluid vh-100 vw-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#e6f8fb" }}
    >
      <div
        className="row shadow bg-white rounded-4 overflow-hidden"
        style={{ width: "95%", height: "90vh" }}
      >
        <div
          className="d-flex flex-grow-1 overflow-hidden"
          style={{ height: "100%" }}
        >
          {/* Sidebar */}
          <div
            className="d-flex flex-column justify-content-between align-items-center py-3"
            style={{
              width: "80px",
              backgroundColor: "#ffffff",
              boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <div className="text-center">
              <img
                src="/logo.jpeg"
                alt="logo"
                style={{ width: "50px", height: "50px" }}
              />
              <div className="fw-bold small mt-3">VISIONTRACK</div>
              <div className="nav flex-column mt-3">
                <i className="bi bi-house-door-fill my-3" title="Home"></i>
                <i className="bi bi-people-fill my-3" title="Users"></i>
                <i className="bi bi-calendar-event my-3" title="Calendar"></i>
                <i className="bi bi-list-ul my-3" title="History"></i>
                <i className="bi bi-journal-text my-3" title="Reports"></i>
              </div>
            </div>

            <div className="mb-2">
              <button
                className="btn btn-sm btn-outline-danger"
                title="Logout"
              >
                <i className="bi bi-box-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow-1 d-flex flex-column p-3 overflow-auto">
            {/* Top Navbar */}
            <div className="d-flex justify-content-between align-items-center mb-4 px-2">
              <div className="d-flex align-items-center">
                <img
                  src="/eyelogo.jpeg"
                  alt="VisionTrack"
                  style={{ width: "40px", height: "40px" }}
                  className="me-2"
                />
                <h5 className="mb-0 text-primary fw-bold">VisionTrack</h5>
              </div>

              <div className="flex-grow-1 px-4">
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <i className="bi bi-search text-muted"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search.."
                  />
                </div>
              </div>

              <div className="d-flex align-items-center">
                <i className="bi bi-bell fs-5 me-3 text-secondary"></i>
                <i className="bi bi-person-circle fs-5 me-1 text-secondary"></i>
                <span className="text-muted fw-semibold">Mr. Thomson</span>
                <i className="bi bi-caret-down-fill ms-1 text-muted"></i>
              </div>
            </div>

            {/* Calendar + Table */}
            <div className="row">
              <div className="col-md-3">
                <div className="bg-white p-3 rounded shadow" style={{ transform: "scale(0.85)", transformOrigin: "top left" }}>
                  <h6 className="text-center">Attendance</h6>
                  <div className="text-center fw-bold mb-2">{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
                  <Calendar
                    onChange={setDate}
                    value={date}
                    tileClassName={({ date, view }) => {
                      if (view === 'month') {
                        const key = date.toISOString().split('T')[0];
                        if (attendanceMap[key] === "present") return "present-day";
                        if (attendanceMap[key] === "absent") return "absent-day";
                        if (attendanceMap[key] === "late") return "late-day";
                      }
                      return null;
                    }}
                  />
                </div>
              </div>
              <div className="col-md-9">
                <div className="rounded shadow p-3" style={{ backgroundColor: "#e6f8fb" }}>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="fw-bold mb-0">My Attendance History</h4>
                    <div className="badge rounded-circle bg-success text-white p-3">{percentage}%</div>
                  </div>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-calendar"></i>
                      <span>01/05/2024 - 23/05/2024</span>
                    </div>
                    <select className="form-select w-auto">
                      <option>Daily</option>
                      <option>Weekly</option>
                    </select>
                    <select className="form-select w-auto">
                      <option>All</option>
                      <option>On Time</option>
                      <option>Late</option>
                      <option>Leave</option>
                    </select>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Check-In Time</th>
                        <th>Check-Out Time</th>
                        <th>Status</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>23 May</td>
                        <td>9:04 AM</td>
                        <td>4:56 PM</td>
                        <td><i className="bi bi-check-circle-fill text-success"></i></td>
                        <td>On time</td>
                      </tr>
                      <tr>
                        <td>22 May</td>
                        <td>–</td>
                        <td>–</td>
                        <td><i className="bi bi-x-circle-fill text-danger"></i></td>
                        <td>Leave</td>
                      </tr>
                      <tr>
                        <td>21 May</td>
                        <td>9:17 AM</td>
                        <td>4:40 PM</td>
                        <td><i className="bi bi-check-circle-fill text-success"></i></td>
                        <td>Late-entry</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-3">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceHistory;
