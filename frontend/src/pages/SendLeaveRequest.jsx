// src/pages/SendLeaveRequest.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './LeaveApproval.css';

export default function SendLeaveRequest() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    role: 'Student',
    from_date: '',
    to_date: '',
    reason: '',
    document: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/api/leaves/create/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if(res.status === 201){
        alert("Leave request submitted!");
        navigate('/dashboard'); // redirect to home
      } else {
        alert(data.error || "Error submitting leave");
      }
    } catch(err) {
      console.error(err);
      alert("Server error!");
    }
  };

  return (
    <div className="d-flex flex-column" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Topbar />
      <div className="d-flex" style={{ flexGrow: 1, overflow: 'hidden' }}>
        <Sidebar active="leave" />
        <div className="flex-grow-1 p-4" style={{ overflowY: 'auto', backgroundColor: '#dffdff' }}>
          <div className="text-center mb-4">
            <h2 className="fw-bold">Send Leave Request</h2>
          </div>

          <form onSubmit={handleSubmit} className="p-4 rounded-4 shadow-sm bg-white" style={{ maxWidth: 600, margin: 'auto' }}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input name="name" className="form-control" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Role</label>
              <select name="role" className="form-select" value={formData.role} onChange={handleChange}>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
              </select>
            </div>
            <div className="mb-3 d-flex gap-2">
              <div className="flex-grow-1">
                <label className="form-label">From Date</label>
                <input type="date" name="from_date" className="form-control" value={formData.from_date} onChange={handleChange} required />
              </div>
              <div className="flex-grow-1">
                <label className="form-label">To Date</label>
                <input type="date" name="to_date" className="form-control" value={formData.to_date} onChange={handleChange} required />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Reason</label>
              <input name="reason" className="form-control" value={formData.reason} onChange={handleChange} required />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">Submit Leave Request</button>
          </form>

          <div className="mt-4"><Footer /></div>
        </div>
      </div>
    </div>
  );
}
