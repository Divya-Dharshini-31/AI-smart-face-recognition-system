import React from 'react';
import { useNavigate } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

function AdminDashboard() {
  const data = [
    { status: 'Present', students: 750, teachers: 68 },
    { status: 'Absent', students: 120, teachers: 10 },
  ];
const navigate = useNavigate();
  return (
    <div className="d-flex flex-column" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Topbar */}
      <Topbar />

      {/* Layout */}
      <div className="d-flex" style={{ flexGrow: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow-1 p-3" style={{ overflowY: 'auto', backgroundColor: '#dffdff' }}>
          {/* Attendance Heading */}
          <div className="mb-2 p-4 text-center">
            <h4 className="fw-bold text-dark " style={{ fontFamily: 'sans-serif', fontSize: '40px'}}>
              Today's Attendance Status
            </h4>
          </div>

          {/* Cards */}
          <div className="row text-center mb-3" style={{paddingLeft:'100px'}}>
            <div className="col-md-4 mb-2">
              <div className="bg-white p-3 rounded-5 shadow-sm" style={{ maxWidth: '280px', border: '2px solid grey' }}>
                <h3 style={{ fontSize: '35px' }}>1033</h3>
                <p className="fw-bold text-dark">Total Students</p>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="bg-white p-3 rounded-5 shadow-sm" style={{ maxWidth: '280px', border: '2px solid grey' }}>
                <h3 style={{ fontSize: '35px' }}>80</h3>
                <p className="fw-bold text-dark">Total Teachers</p>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="bg-white p-3 rounded-5 shadow-sm" style={{ maxWidth: '280px', border: '2px solid grey' }}>
                <h3 style={{ fontSize: '35px' }}>4</h3>
                <p className="fw-bold text-dark">Pending Requests</p>
              </div>
            </div>
          </div>

          {/* Chart Section with Recharts code inside */}
          <div className="bg-white p-4 rounded shadow-sm mb-4 text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h5 className="fw-bold text-dark mb-3 ">Today's Attendance Stats</h5>
            <ResponsiveContainer width="100%" height={214}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="status" label={{ value: 'Status', position: 'insideBottom', offset: -5 }} />
                <YAxis
                  label={{ value: 'Count', angle: -90, position: 'insideLeft' }}
                  tickCount={5}
                  domain={[0, 800]}
                  interval={0}
                />
                <Tooltip />
                <Bar dataKey="students" fill="#0d6efd" name="Students" radius={[6, 6, 0, 0]} />
                <Bar dataKey="teachers" fill="#6c757d" name="Teachers" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Report Buttons */}
          <div className="text-center mb-3">
            <button className="btn btn-info me-3" onClick={() => navigate("/students")}>Students Report</button>
            <button className="btn btn-info" onClick={() => navigate("/teachers")}>Teachers Report</button>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
