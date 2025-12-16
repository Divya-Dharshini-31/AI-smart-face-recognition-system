import React from "react";
import Footer from "../components/Footer";
import Sidebarsmall from "../components/Sidebarsmall";
import Topbar from "../components/Topbar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const barData = [
  { name: "Week 1", Present: 5, Absent: 2 },
  { name: "Week 2", Present: 6, Absent: 1 },
  { name: "Week 3", Present: 5, Absent: 2 },
  { name: "Week 4", Present: 6, Absent: 1 },
];

const pieDataStudent = [
  { name: "Present", value: 75 },
  { name: "Absent", value: 25 },
];

const pieDataTeacher = [
  { name: "Present", value: 85 },
  { name: "Absent", value: 15 },
];

const COLORS = ["#00C49F", "#FF8042"];

function AdminReportPage() {
  return (
    <div className="d-flex flex-column" style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* Topbar */}
      <Topbar />

      {/* Layout */}
      <div className="d-flex" style={{ flexGrow: 1, overflow: "hidden" }}>
        {/* Sidebar */}
        <Sidebarsmall />

        {/* Main Content */}
        <div className="flex-grow-1 d-flex flex-column p-3 overflow-auto" style={{ backgroundColor: "#e6f8fb" }}>
          {/* Month Selector */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <select className="form-select w-auto" style={{ minWidth: "200px" }}>
              <option>Select Month</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
            </select>
            <div className="text-end">
              <img src="/celebration.jpeg" alt="Fly" style={{ width: "50px", height: "50px" }} />
              <div className="small">Fly to the month</div>
            </div>
          </div>

          {/* Cards */}
          <div className="row g-3 mb-3">
            <div className="col-4">
              <div className="bg-light text-center p-2 rounded shadow">
                <h6>Total Days</h6>
                <div className="fw-bold">30</div>
              </div>
            </div>
            <div className="col-4">
              <div className="bg-success-subtle text-center p-2 rounded shadow">
                <h6>Present</h6>
                <div className="fw-bold">27</div>
              </div>
            </div>
            <div className="col-4">
              <div className="bg-danger-subtle text-center p-2 rounded shadow">
                <h6>Absent</h6>
                <div className="fw-bold">3</div>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="row g-3">
            <div className="col-6">
              <div className="bg-white p-2 rounded shadow">
                <h6 className="text-center">Weekly Attendance</h6>
                <div style={{ width: "100%", height: 180 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="Present" fill="#00C49F" />
                      <Bar dataKey="Absent" fill="#FF8042" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="text-center fw-bold mb-2">Student-wise</div>
              <div style={{ width: "100%", paddingTop: "100%", position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieDataStudent}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                      >
                        {pieDataStudent.map((entry, index) => (
                          <Cell
                            key={`student-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="text-center fw-bold mb-2">Teacher-wise</div>
              <div style={{ width: "100%", paddingTop: "100%", position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieDataTeacher}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                      >
                        {pieDataTeacher.map((entry, index) => (
                          <Cell
                            key={`teacher-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-auto d-flex justify-content-end align-items-center">
            <button className="btn btn-outline-secondary d-flex align-items-center">
              <img
                src="/download-icon.png"
                alt="Download"
                style={{ width: "20px", height: "20px", marginRight: "8px" }}
              />
              Download Report
            </button>
          </div>

          {/* Footer */}
          <div className="mt-3">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminReportPage;
