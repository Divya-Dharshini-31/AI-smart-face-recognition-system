// src/pages/LeaveApproval.jsx
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './LeaveApproval.css'; //  ⬅️  new CSS (see below)

function LeaveApproval() {
    return (
        <div className="d-flex flex-column" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
        {/* ---------- Topbar ---------- */}
        <Topbar />

        {/* ---------- Body layout ---------- */}
        <div className="d-flex" style={{ flexGrow: 1, overflow: 'hidden' }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <div className="flex-grow-1 p-3" style={{ overflowY: 'auto', backgroundColor: '#dffdff' }}>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100%' }}>
                {/* Outer blue card */}
                <div className="p-4 rounded-4 shadow-sm position-relative" style={{ backgroundColor: '#6ba9cc', width: 700 }}>
                {/* Inner light card */}
                <div className="bg-opacity-25 bg-white rounded-4 p-4">
                    {/* Name */}
                    <div className="mb-3 d-flex align-items-center gap-3">
                    <strong style={{ width: 100 }}>Name:</strong>
                    <input className="form-control form-control-sm custom-input" value="Ms. Emma Kwan" disabled />
                    </div>

                    {/* From Date */}
                    <div className="mb-3 d-flex align-items-center gap-3">
                    <strong style={{ width: 100 }}>From&nbsp;Date:</strong>
                    <input className="form-control form-control-sm custom-input" value="30/05/2025" disabled />
                    </div>

                    {/* To Date */}
                    <div className="mb-3 d-flex align-items-center gap-3">
                    <strong style={{ width: 100 }}>To&nbsp;Date:</strong>
                    <input className="form-control form-control-sm custom-input" value="02/06/2025" disabled />
                    </div>

                    {/* Reason */}
                    <div className="mb-3 d-flex align-items-center gap-3">
                    <strong style={{ width: 100 }}>Reason:</strong>
                    <input className="form-control form-control-sm custom-input" value="Training/Seminar" disabled />
                    </div>

                    {/* View document – centred */}
                    <div className="d-flex justify-content-center mt-4">
                    <button className="btn btn-light border d-flex align-items-center">
                        View uploaded document <i className="bi bi-upload ms-2"></i>
                    </button>
                    </div>
                </div>

                {/* Profile image */}
                <img
                    src="/profile.jpeg"
                    alt="profile"
                    className="rounded-circle position-absolute"
                    style={{
                    width: 120,
                    height: 120,
                    objectFit: 'cover',
                    top: 20,
                    right: 20,
                    border: '5px solid white'
                    }}
                />
                </div>
            </div>

            {/* Approve / Reject buttons */}
            <div className="d-flex justify-content-center gap-4 py-4">
                <button className="btn btn-success px-4 py-2 fw-bold rounded-pill">Approve</button>
                <button className="btn btn-danger  px-4 py-2 fw-bold rounded-pill">Reject</button>
            </div>

            {/* Footer */}
            <Footer />
            </div>
        </div>
        </div>
    );
}

export default LeaveApproval;
