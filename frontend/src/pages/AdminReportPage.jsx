import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Sidebarsmall from "../components/Sidebarsmall";
import Topbar from "../components/Topbar";
import { useNavigate } from "react-router-dom";

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

const COLORS = ["#00C49F", "#FF8042"];

function AdminReportPage() {
  const [month, setMonth] = useState(7); // July default
  const [year] = useState(2025);
  const navigate = useNavigate();


  const [summary, setSummary] = useState({
    total_days: 0,
    present: 0,
    absent: 0,
  });

  const [barData, setBarData] = useState([]);
  const [pieStudent, setPieStudent] = useState([]);
  const [pieTeacher, setPieTeacher] = useState([]);

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/api/admin-report/?month=${month}&year=${year}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSummary(data.summary);
        setBarData(data.weekly);
        setPieStudent(data.studentPie);
        setPieTeacher(data.teacherPie);
      })
      .catch((err) => console.error("API Error:", err));
  }, [month, year]);

  return (
    <div
      className="d-flex flex-column"
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      <Topbar />

      <div className="d-flex" style={{ flexGrow: 1 }}>
        <Sidebarsmall />

        <div
          className="flex-grow-1 d-flex flex-column p-3 overflow-auto"
          style={{ backgroundColor: "#e6f8fb" }}
        >
          {/* Month Selector */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <select
              className="form-select w-auto"
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
            >
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
            </select>

            <div className="text-end">
              <img
                src="/celebration.jpeg"
                alt="Fly"
                style={{ width: "50px", height: "50px" }}
              />
              <div className="small">Fly to the month</div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="row g-3 mb-3">
            <div className="col-4">
              <div className="bg-light text-center p-2 rounded shadow">
                <h6>Total Days</h6>
                <div className="fw-bold">{summary.total_days}</div>
              </div>
            </div>
            <div className="col-4">
              <div className="bg-success-subtle text-center p-2 rounded shadow">
                <h6>Present</h6>
                <div className="fw-bold">{summary.present}</div>
              </div>
            </div>
            <div className="col-4">
              <div className="bg-danger-subtle text-center p-2 rounded shadow">
                <h6>Absent</h6>
                <div className="fw-bold">{summary.absent}</div>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="row g-3">
            {/* Bar Chart */}
            <div className="col-6">
              <div className="bg-white p-2 rounded shadow">
                <h6 className="text-center">Weekly Attendance</h6>
                <div style={{ height: 200 }}>
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

            {/* Student Pie */}
            <div className="col-3 text-center">
              <h6>Student-wise</h6>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={pieStudent} dataKey="value" outerRadius={80}>
                    {pieStudent.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Teacher Pie */}
            <div className="col-3 text-center">
              <h6>Teacher-wise</h6>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={pieTeacher} dataKey="value" outerRadius={80}>
                    {pieTeacher.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

         <div className="mt-3 d-flex justify-content-end">
  <button
    className="btn btn-outline-secondary"
    style={{ color: "#0d6efd", borderColor: "#0d6efd" }}
    onClick={() =>
      navigate(`/admin/report-view?month=${month}&year=${year}`)
    }
  >
    Download Report
  </button>
</div>



          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AdminReportPage;
