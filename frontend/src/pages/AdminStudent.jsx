import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const barData = [
  { month: 'Jan', present: 220 },
  { month: 'Feb', present: 200 },
  { month: 'Mar', present: 240 },
  { month: 'Apr', present: 225 },
  { month: 'May', present: 180 },
  { month: 'Jun', present: 230 },
  { month: 'Jul', present: 250 },
  { month: 'Aug', present: 260 },
  { month: 'Sep', present: 240 },
  { month: 'Oct', present: 270 },
  { month: 'Nov', present: 230 },
  { month: 'Dec', present: 210 },
];

function AdminStudent() {
  return (
    <div className="d-flex flex-column" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Topbar />

      <div className="d-flex" style={{ flexGrow: 1, overflow: 'hidden' }}>
        <Sidebar />

        <div className="flex-grow-1 p-4" style={{ backgroundColor: '#dffdff', overflowY: 'auto' }}>
          <div className="d-flex align-items-center mb-4" style={{ fontSize: '40px', fontWeight: 'bold' }}>
            <span
              onClick={() => window.history.back()}
              style={{
                cursor: 'pointer',
                display: 'inline-block',
                width: '19px',
                height: '19px',
                marginRight: '20px',
                transform: 'rotate(45deg)',
                borderLeft: '3px solid black',
                borderBottom: '3px solid black',
                marginTop: '4px'
              }}
            ></span>
            Today’s Attendance Status
          </div>

          <div className="d-flex flex-wrap justify-content-around">
            <div className="bg-white mt-4 p-4 rounded shadow-sm" style={{ width: '700px', height: '360px' }}>
              <h5 className="text-center fw-bold mb-3" style={{ fontFamily: 'sans-serif', fontSize: '30px' }}>
                Students Attendance Overview
              </h5>

              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="present" fill="#2ba3ae" name="Students Present" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div style={{ width: '350px', marginRight: '100px' }}>
              <div className="p-3 rounded-5 mb-4 shadow-sm" style={{ backgroundColor: 'lightblue' }}>
                <h6 className="fw-bold mb-3" style={{ fontSize: '20px' }}>Students with Most Absences:</h6>
                <ol>
                  <li>Alice - 18</li>
                  <li>Bob - 15</li>
                  <li>Chris - 14</li>
                  <li>Diana - 13</li>
                </ol>
              </div>

              <div className="p-3 rounded-4 d-flex justify-content-between align-items-center mb-4 shadow-sm" style={{ backgroundColor: 'lightblue' }}>
                <span className="fw-bold" style={{ fontSize: '20px' }}>Send Notification Alert</span>
                <i className="bi bi-bell-fill text-primary fs-5"></i>
              </div>

              <div className="p-3 rounded-4 shadow-sm" style={{ backgroundColor: 'lightblue', height: '115px' }}>
                <h6 className="fw-bold mb-2" style={{ fontSize: '20px' }}>
                  Pending Requests <span className="badge bg-secondary">8</span>
                </h6>
                <p className="mb-1 text-success">
                  <i className="bi bi-check-square-fill me-1"></i>Approved: 6
                </p>
                <p className="mb-0 text-danger">
                  <i className="bi bi-x-square-fill me-1"></i>Rejected: 2
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 ps-2">
            <p className="fw-bold text-dark" style={{ paddingLeft: '150px', fontFamily: 'sans-serif', fontSize: '25px' }}>
              Total No. of Students Present: 260
            </p>
            <p className="fw-bold text-dark" style={{ paddingLeft: '160px',fontFamily: 'sans-serif', fontSize: '25px' }}>
              Total No. of Students Absent: 40
            </p>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AdminStudent;
