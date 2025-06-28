import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';

function AdminDashboard() {
  return (
    <div className="d-flex flex-column" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Topbar Full Width */}
      <Topbar />

      {/* Main layout: sidebar + content */}
      <div className="d-flex" style={{ flexGrow: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow-1 p-3" style={{ overflowY: 'auto',backgroundColor:'#dffdff' }}>
          {/* Cards */}
          <div className="mb-2 p-4">
            <h4 className="fw-bold text-dark" style={{fontFamily:'sans-serif',fontSize:'35px',paddingLeft:'20px'}}>Today's Attendance Status</h4>
          </div>
          <div className="row text-center mb-4">
            <div className="col-md-4 mb-2">
              <div className="bg-white p-3 rounded-5 shadow-sm" style={{maxWidth:'400px'}}>
                <h3>1033</h3>
                <p>Total Students</p>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="bg-white p-3 rounded-5 shadow-sm" style={{maxWidth:'400px'}}>
                <h3>80</h3>
                <p>Total Teachers</p>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="bg-white p-3 rounded-5 shadow-sm" style={{maxWidth:'400px'}}>
                <h3>4</h3>
                <p>Pending Requests</p>
              </div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white p-4 rounded shadow-sm mb-4">
            <h5 className="mb-3">Today's Attendance Stats</h5>
            <img src="/bar-chart-placeholder.png" alt="chart" className="img-fluid" />
          </div>

          {/* Report Buttons */}
          <div className="text-center mb-3">
            <button className="btn btn-info me-3">Students Report</button>
            <button className="btn btn-info">Teachers Report</button>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
