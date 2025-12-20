import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

function LeaveApproval() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [leave, setLeave] = useState(null);

  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/admin/leaves/${id}/`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setLeave(res.data))
    .catch(err => console.error(err));
  }, [id]);

  const updateStatus = (status) => {
    axios.put(
      `http://localhost:8000/api/admin/leaves/${id}/status/`,
      { status },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(() => navigate('/leave-requests'))
    .catch(err => console.error(err));
  };

  if (!leave) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="d-flex flex-column" style={{ height: '100vh' }}>
      <Topbar />

      <div className="d-flex flex-grow-1">
        <Sidebar />

        <div className="flex-grow-1 p-4" style={{ backgroundColor: '#dffdff' }}>
          <div className="d-flex justify-content-center">
            <div className="p-4 rounded shadow bg-white" style={{ width: 700 }}>
              <p><b>Name:</b> {leave.name}</p>
              <p><b>From:</b> {leave.from_date}</p>
              <p><b>To:</b> {leave.to_date}</p>
              <p><b>Reason:</b> {leave.leave_type}</p>

              {leave.document && (
                <div className="text-center mt-3">
                  <a
                    href={`http://localhost:8000${leave.document}`}
                    target="_blank"
                    className="btn btn-outline-primary"
                  >
                    View Uploaded Document
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="d-flex justify-content-center gap-4 mt-4">
            <button
              className="btn btn-success px-4"
              onClick={() => updateStatus('APPROVED')}
            >
              Approve
            </button>

            <button
              className="btn btn-danger px-4"
              onClick={() => updateStatus('REJECTED')}
            >
              Reject
            </button>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LeaveApproval;
