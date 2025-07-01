import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

function LeaveApproval() {
    return (
        <div className="d-flex flex-column" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
        {/* Topbar */}
        <Topbar />

        {/* Layout */}
        <div className="d-flex" style={{ flexGrow: 1, overflow: 'hidden' }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-grow-1 p-3" style={{ overflowY: 'auto', backgroundColor: '#dffdff' }}>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100%' }}>
                <div className="p-4 rounded-4 shadow-sm position-relative" style={{ backgroundColor: '#6ba9cc', width: '700px' }}>
                
                {/* Inner Light Card */}
                <div className="bg-opacity-25 bg-white rounded-4 p-4">
                    <div className="mb-3 d-flex align-items-center">
                    <strong className="me-3">Name:</strong>
                    <input type="text" className="form-control" value="Ms. Emma Kwan" disabled />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                    <strong className="me-3">From Date:</strong>
                    <input type="text" className="form-control" value="30/05/2025" disabled />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                    <strong className="me-3">To Date:</strong>
                    <input type="text" className="form-control" value="02/06/2025" disabled />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                    <strong className="me-3">Reason:</strong>
                    <input type="text" className="form-control" value="Training/Seminar" disabled />
                    </div>
                    <div className="d-flex align-items-center mt-3">
                    <button className="btn btn-light border">
                        View uploaded document <i className="bi bi-upload ms-2"></i>
                    </button>
                    </div>
                </div>

                {/* Profile Image */}
                <img
                    src="/profile.jpeg"
                    alt="profile"
                    className="rounded-circle"
                    style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    border: '5px solid white',
                    }}
                />
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="d-flex justify-content-center gap-4 py-4">
                <button className="btn btn-success px-4 py-2 fw-bold rounded-pill">Approve</button>
                <button className="btn btn-danger px-4 py-2 fw-bold rounded-pill">Reject</button>
            </div>

            {/* Footer */}
            <Footer />
            </div>
        </div>
        </div>
    );
}

export default LeaveApproval;
