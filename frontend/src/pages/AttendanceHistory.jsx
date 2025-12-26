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
    fetch(`http://127.0.0.1:8000/api/my-attendance/?month=${month}&year=${year}`)
      .then((res) => res.json())
      .then((data) => {
        setAttendance(data.attendance || []);
        setPercentage(data.percentage || 0);

        const map = {};
        (data.attendance || []).forEach((item) => {
          map[item.date] = item.status;
        });
        setAttendanceMap(map);
      })
      .catch(() => {
        setError("Unable to load attendance");
      });
  }, [month, year]);

  return (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
      <Topbar />

      <div className="d-flex flex-grow-1">
        <Sidebarsmall />

        <div className="flex-grow-1 p-3" style={{ background: "#e6f8fb" }}>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="row">
            {/* Calendar */}
            <div className="col-md-3">
              <div className="bg-white p-3 rounded shadow">
                <h6 className="text-center">Attendance</h6>
                <Calendar
                  onChange={setDate}
                  value={date}
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

            {/* Table */}
            <div className="col-md-9">
              <div className="bg-white p-3 rounded shadow">
                <div className="d-flex justify-content-between mb-3">
                  <h4>My Attendance History</h4>
                  <span className="badge bg-success">{percentage}%</span>
                </div>

                <table className="table">
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

          <Footer className="mt-3" />
        </div>
      </div>
    </div>
  );
}

export default AttendanceHistory;
