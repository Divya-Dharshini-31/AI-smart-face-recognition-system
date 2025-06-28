import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../assets/profile.jpg"; // put the profile image in src/assets
import "./LeaveApproval.css"; // optional, for extra custom styles

const LeaveApproval = () => {
    return (
        <div className="container-fluid bg-light min-vh-100 d-flex flex-column">
        {/* Top Navbar */}
        <nav className="navbar bg-white shadow-sm px-4">
            <span className="navbar-brand fw-bold text-primary">
            <img src="/logo.png" alt="VisionTrack" style={{ height: "30px" }} className="me-2" />
            VisionTrack
            </span>
            <input className="form-control w-25" type="search" placeholder="Search.." />
            <span className="text-muted">Mr. Thomson</span>
        </nav>

        {/* Main Content */}
        <div className="row flex-grow-1">
            {/* Sidebar */}
            <div className="col-1 bg-white border-end d-flex flex-column align-items-center py-3">
            <i className="bi bi-house-door-fill my-3"></i>
            <i className="bi bi-person-fill my-3"></i>
            <i className="bi bi-calendar-event-fill my-3"></i>
            <i className="bi bi-list-ul my-3"></i>
            <i className="bi bi-box-arrow-right my-3"></i>
            </div>

            {/* Card Section */}
            <div className="col d-flex justify-content-center align-items-center">
            <div
                className="p-4 rounded-4"
                style={{ backgroundColor: "#6ba9cc", width: "700px", position: "relative" }}
            >
                {/* Inner Light Card */}
                <div className="bg-opacity-25 bg-white rounded-4 p-4">
                <div className="mb-3 d-flex align-items-center">
                    <strong className="me-3">Name:</strong>
                    <input
                    type="text"
                    className="form-control"
                    value="Ms. Emma Kwan"
                    disabled
                    />
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <strong className="me-3">From Date:</strong>
                    <input
                    type="text"
                    className="form-control"
                    value="30/05/2025"
                    disabled
                    />
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <strong className="me-3">To Date:</strong>
                    <input
                    type="text"
                    className="form-control"
                    value="02/06/2025"
                    disabled
                    />
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <strong className="me-3">Reason:</strong>
                    <input
                    type="text"
                    className="form-control"
                    value="Training/Seminar"
                    disabled
                    />
                </div>

                <div className="d-flex align-items-center mt-3">
                    <button className="btn btn-light border">
                    View uploaded document <i className="bi bi-upload ms-2"></i>
                    </button>
                </div>
                </div>

                {/* Profile Image */}
                <img
                src={profilePic}
                alt="profile"
                className="rounded-circle"
                style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    border: "5px solid white",
                }}
                />
            </div>
            </div>
        </div>

        {/* Footer Buttons */}
        <div className="d-flex justify-content-center gap-4 py-4">
            <button className="btn btn-success px-4 py-2 fw-bold rounded-pill">Approve</button>
            <button className="btn btn-danger px-4 py-2 fw-bold rounded-pill">Reject</button>
        </div>

        {/* Footer */}
        <footer className="text-center text-muted py-2 small">
            © 2025 AI Face Recognition Attendance System | Developed by Team VisionTrack | Powered by AI
        </footer>
        </div>
    );
};

export default LeaveApproval;
