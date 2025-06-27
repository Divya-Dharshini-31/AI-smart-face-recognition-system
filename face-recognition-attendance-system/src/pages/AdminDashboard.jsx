import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import '../styles/Dashboard.css';

function AdminDashboard() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content flex-grow-1 bg-light px-4 py-3">
        {/* Topbar */}
        <Topbar />

        {/* Summary Cards */}
        <div className="row text-center mb-4">
          <div className="col-md-4 mb-3">
            <div className="bg-white p-3 rounded shadow-sm">
              <h3>1033</h3>
              <p>Total Students</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="bg-white p-3 rounded shadow-sm">
              <h3>80</h3>
              <p>Total Teachers</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="bg-white p-3 rounded shadow-sm">
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

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default AdminDashboard;
