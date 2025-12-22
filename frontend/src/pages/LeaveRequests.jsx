import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function LeaveRequests() {
  const [leaves, setLeaves] = useState([]);
  const navigate = useNavigate();

  // Fetch all leaves from backend
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/admin/leaves/')
      .then(res => res.json())
      .then(data => setLeaves(data))
      .catch(err => console.error("Failed to load leave requests", err));
  }, []);

  const approved = leaves.filter(l => l.status === 'APPROVED').length;
  const rejected = leaves.filter(l => l.status === 'REJECTED').length;

  return (
    <div className="d-flex flex-column" style={{ width: '100vw', height: '100vh' }}>
      <Topbar />

      <div className="d-flex flex-grow-1">
        <Sidebar active="leave" />

        <div className="flex-grow-1 p-4" style={{ backgroundColor: '#eafcff' }}>
          <h2 className="text-center fw-bold mb-4">List of Leave Requests</h2>

          <div className="table-responsive">
            <table className="table table-bordered text-center bg-white">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {leaves.map(leave => (
                  <tr key={leave.id}>
                    <td>{leave.name}</td>
                    <td>{leave.from_date}</td>
                    <td>{leave.to_date}</td>
                    <td>{leave.leave_type}</td>
                    <td>
                      <span className={`badge 
                        ${leave.status === 'PENDING' ? 'bg-warning' :
                          leave.status === 'APPROVED' ? 'bg-success' : 'bg-danger'}`}>
                        {leave.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-info text-white rounded-pill px-3"
                        onClick={() => navigate(`/leave-approval/${leave.id}`)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <div className="p-4 rounded-3 bg-light">
              <p>Total Requests: {leaves.length}</p>
              <p>Approved: {approved}</p>
              <p>Rejected: {rejected}</p>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
