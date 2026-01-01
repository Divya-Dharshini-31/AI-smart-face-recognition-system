// src/pages/LeaveApproval.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './LeaveApproval.css';

export default function LeaveApproval() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [leave, setLeave] = useState(null);

  const fetchLeave = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/leaves/${id}/`);
      const data = await res.json();
      if(res.status === 200) setLeave(data);
      else alert(data.error);
    } catch(err) {
      console.error(err);
      alert("Failed to fetch leave");
    }
  };

  useEffect(() => { fetchLeave(); }, [id]);

  const handleStatusChange = async (action) => {
    try {
      const res = await fetch(`http://localhost:8000/api/leaves/${id}/${action}/`, { method: 'PUT' });
      const data = await res.json();
      if(res.status === 200){
        alert(data.message);
        navigate('/leave-requests'); // go back to list
      } else alert(data.error);
    } catch(err) {
      console.error(err);
      alert("Failed to update leave status");
    }
  };

  if(!leave) return <div>Loading...</div>;

  return (
    <div className="d-flex flex-column" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Topbar />
      <div className="d-flex" style={{ flexGrow: 1, overflow: 'hidden' }}>
        <Sidebar />
        <div className="flex-grow-1 p-3" style={{ overflowY: 'auto', backgroundColor: '#dffdff' }}>
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80%' }}>
            <div className="p-4 rounded-4 shadow-sm position-relative" style={{ backgroundColor: '#6ba9cc', width: 700 }}>
              <div className="bg-opacity-25 bg-white rounded-4 p-4">
                <div className="mb-3 d-flex align-items-center gap-3">
                  <strong style={{ width: 100 }}>Name:</strong>
                  <input className="form-control form-control-sm" value={leave.name} disabled />
                </div>
                <div className="mb-3 d-flex align-items-center gap-3">
                  <strong style={{ width: 100 }}>Role:</strong>
                  <input className="form-control form-control-sm" value={leave.role} disabled />
                </div>
                <div className="mb-3 d-flex align-items-center gap-3">
                  <strong style={{ width: 100 }}>From Date:</strong>
                  <input className="form-control form-control-sm" value={leave.from_date} disabled />
                </div>
                <div className="mb-3 d-flex align-items-center gap-3">
                  <strong style={{ width: 100 }}>To Date:</strong>
                  <input className="form-control form-control-sm" value={leave.to_date} disabled />
                </div>
                <div className="mb-3 d-flex align-items-center gap-3">
                  <strong style={{ width: 100 }}>Reason:</strong>
                  <input className="form-control form-control-sm" value={leave.reason} disabled />
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center gap-4 py-4">
            <button className="btn btn-success px-4 py-2 fw-bold rounded-pill" onClick={() => handleStatusChange('approve')}>Approve</button>
            <button className="btn btn-danger px-4 py-2 fw-bold rounded-pill" onClick={() => handleStatusChange('reject')}>Reject</button>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
