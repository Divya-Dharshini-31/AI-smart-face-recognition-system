import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const pieData = [
  { name: 'Present', value: 60 },
  { name: 'Absent', value: 10 },
  { name: 'On Leave', value: 10 },
  { name: 'Remaining', value: 20 },
];

const COLORS = ['#2ba3ae', '#e74c3c', '#f1c40f', '#95E4ED']; // Added grey for 'Remaining'

function AdminTeacher() {
  return (
    <div className="d-flex flex-column" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Topbar */}
      <Topbar />

      {/* Layout: Sidebar + Main */}
      <div className="d-flex" style={{ flexGrow: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow-1 p-4" style={{ backgroundColor: '#dffdff', overflowY: 'auto' }}>
          
          {/* Page Title */}
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

          {/* Chart and Right Panel */}
          <div className="d-flex flex-wrap justify-content-around">
            
            {/* Pie Chart Section */}
            <div className="bg-white p-4 rounded shadow-sm" style={{ width: '400px', height: '400px',position:'relative'}}>
              <h5 className="text-center fw-bold mb-3" style={{ fontFamily: 'sans-serif', fontSize: '30px' }}>Teachers Report</h5>

              {/* Pie Chart */}
              <PieChart width={350} height={250}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="40%"
                  labelLine={false}
                  outerRadius={100}
                  innerRadius={60}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
              <div style={{ display: 'flex', gap: '20px',paddingLeft:'30px',fontSize:'20px' }}>
                {['Present', 'Absent', 'On Leave'].map((label) => {
                const color = COLORS[pieData.findIndex(d => d.name === label)];
                return (
                    <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <div style={{ width: 15, height: 15, backgroundColor: color }}></div>
                        <span>{label}</span>
                    </div>
                );
                })}
            </div>

              {/* Center Label */}
              <div style={{
                position: 'absolute',
                top: '46%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                Present<br />60%
              </div>
            </div>

            {/* Right Panel */}
            <div style={{ width: '400px',paddingLeft:'-200px'}}>
              {/* Most Leave List */}
              <div className="bg-light p-3 rounded-5 mb-4 shadow-sm">
                <h6 className="fw-bold mb-2">Teachers with most leave:</h6>
                <ol>
                  <li>Emma John - 12</li>
                  <li>Johnes - 10</li>
                  <li>Lea Parker - 11</li>
                  <li>Parker - 15</li>
                </ol>
              </div>

              {/* Send Notification Button */}
              <div className="bg-light p-3 rounded-4 d-flex justify-content-between align-items-center mb-4 shadow-sm">
                <span className="fw-bold">Send Notification Alert</span>
                <i className="bi bi-bell-fill text-danger fs-5"></i>
              </div>

              {/* Pending Requests */}
              <div className="bg-light p-3 rounded-4 shadow-sm">
                <h6 className="fw-bold mb-2">
                  Pending Requests <span className="badge bg-secondary">5</span>
                </h6>
                <p className="mb-1 text-success">
                  <i className="bi bi-check-square-fill me-1"></i>Approved: 5
                </p>
                <p className="mb-0 text-danger">
                  <i className="bi bi-x-square-fill me-1"></i>Rejected: 3
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-4 ps-2">
            <p className="fw-bold text-dark" style={{paddingLeft:'120px',fontFamily:'sans-serif',fontSize:'25px'}}>Total No.of Teachers Present: 75</p>
            <p className="fw-bold text-dark" style={{paddingLeft:'120px',fontFamily:'sans-serif',fontSize:'25px'}}>Total No.of Teachers Absent: 5</p>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AdminTeacher;
