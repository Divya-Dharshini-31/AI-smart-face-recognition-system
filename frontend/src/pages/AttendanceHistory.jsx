import React, { useState, useEffect } from "react";
import Sidebarsmall from "../components/Sidebarsmall";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/CalendarStyles.css";

function AttendanceHistory() {
  const [date, setDate] = useState(new Date());
  const [attendance, setAttendance] = useState([]);
  const [attendanceMap, setAttendanceMap] = useState({});
  const [percentage, setPercentage] = useState(0);
  const [error, setError] = useState(null);

  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/api/my-attendance/?month=${month}&year=${year}`,
      {
        credentials: "include", // ensures session cookies are sent
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setAttendance(data.attendance || []);
        setPercentage(data.percentage || 0);

        // Map dates to status for calendar coloring
        const map = {};
        (data.attendance || []).forEach((item) => {
          map[item.date] = item.status;
        });
        setAttendanceMap(map);
      })
      .catch(() => {
        setError("Unable to load attendance");
        setAttendance([]);
        setPercentage(0);
      });
  }, [month, year]);

  return (
    <div className="d-flex flex-column" style={{ height: "100vh", width: "100vw" }}>
      <Topbar />

      <div className="d-flex flex-grow-1" style={{ width: "100%" }}>
        <Sidebarsmall />

        <div className="flex-grow-1 p-3" style={{ background: "#e6f8fb", minHeight: "100vh" }}>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="row g-3">
            {/* Calendar */}
            <div className="col-md-3">
              <div className="bg-white p-3 rounded shadow h-100">
                <h6 className="text-center mb-3">Attendance</h6>
                <Calendar
                  onChange={setDate}
                  value={date}
                  className="custom-calendar"
                  tileClassName={({ date, view }) => {
                    if (view === "month") {
                      const key = date.toISOString().split("T")[0];
                      if (attendanceMap[key] === "present") return "present-day";
                      if (attendanceMap[key] === "absent") return "absent-day";
                      if (attendanceMap[key] === "late") return "late-day";
                    }
                    return null;
                  }}
                />
              </div>
            </div>

            {/* Attendance Table */}
            <div className="col-md-9">
              <div className="bg-white p-3 rounded shadow h-100">
                <div className="d-flex justify-content-between mb-3">
                  <h4>My Attendance History</h4>
                  <span className="badge bg-success">{percentage}%</span>
                </div>

                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Status</th>
                        <th>Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendance.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="text-center">
                            No attendance data
                          </td>
                        </tr>
                      ) : (
                        attendance.map((item, idx) => (
                          <tr key={idx}>
                            <td>{item.date}</td>
                            <td>{item.check_in || "–"}</td>
                            <td>{item.check_out || "–"}</td>
                            <td>{item.status}</td>
                            <td>{item.note || "-"}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <Footer className="mt-3" />
        </div>
      </div>
    </div>
  );
}

export default AttendanceHistory;
