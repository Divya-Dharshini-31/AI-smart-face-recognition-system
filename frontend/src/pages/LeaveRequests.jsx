// src/pages/LeaveRequests.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function LeaveRequests() {
  const navigate = useNavigate();
  const [leaveRows, setLeaveRows] = useState([]);

  const fetchLeaves = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/leaves/');
      const data = await res.json();
      setLeaveRows(data);
    } catch(err) {
      console.error(err);
      alert("Failed to fetch leave requests");
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  const handleView = (id) => {
    navigate(`/leave-approval/${id}`);
  };

  const approvedCount = leaveRows.filter(l => l.status === 'APPROVED').length;
  const rejectedCount = leaveRows.filter(l => l.status === 'REJECTED').length;

  return (
    <div className="d-flex flex-column" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Topbar />
      <div className="d-flex" style={{ flexGrow: 1, overflow: 'hidden' }}>
        <Sidebar active="leave" />
        <div className="flex-grow-1 p-4" style={{ overflowY: 'auto', backgroundColor: '#eafcff' }}>
          <div className="text-center mb-4">
            <h2 className="fw-bold">List of Leave Requests</h2>
          </div>

          <div className="table-responsive mb-5">
            <table className="table table-bordered text-center align-middle bg-white">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {leaveRows.map((row) => (
                  <tr key={row.id}>
                    <td>{row.name}</td>
                    <td>{row.role}</td>
                    <td>{row.from_date}</td>
                    <td>{row.to_date}</td>
                    <td>{row.reason}</td>
                    <td>{row.status}</td>
                    <td>
                      <button className="btn btn-info text-white rounded-pill px-4 py-1"
                        onClick={() => handleView(row.id)}>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-center">
            <div className="p-4 rounded-3" style={{ backgroundColor: '#d7eef5', minWidth: '250px' }}>
              <p className="mb-1 fw-semibold">
                Total <span className="float-end">{leaveRows.length}</span>
              </p>
              <p className="mb-1 fw-semibold">
                Approved <span className="float-end">{approvedCount}</span>
              </p>
              <p className="mb-0 fw-semibold">
                Rejected <span className="float-end">{rejectedCount}</span>
              </p>
            </div>
          </div>

          <div className="mt-4"><Footer /></div>
        </div>
      </div>
    </div>
  );
}
