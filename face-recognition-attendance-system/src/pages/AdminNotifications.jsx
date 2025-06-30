import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const notifications = [
    {
        id: 1,
        type: "info",
        title: "Leave Requests",
        time: "Today · 9:13 AM",
        message: "There are 5 more leave requests to view.",
        starred: false,
    },
    {
        id: 2,
        type: "danger",
        title: "Absent Warning (Both Check-in and Check-out are not done)",
        time: "Yesterday · 11:00 AM",
        message: "Notification alert has been sent to the students with most leave.",
        starred: true,
    },
    {
        id: 3,
        type: "danger",
        title: "Absent Warning (Both Check-in and Check-out are not done)",
        time: "Yesterday · 11:00 AM",
        message: "Notification alert has been sent to the teachers with most leave.",
        starred: false,
    },
    {
        id: 4,
        type: "success",
        title: "Generate report",
        time: "10 May · 9:00 AM",
        message: "Your report for this month has been downloaded.",
        starred: false,
    },
    {
        id: 5,
        type: "danger",
        title: "Absent Warning (Either of the Check-in or Check-out are not done)",
        time: "24 April · 9:30 AM",
        message: "The warning has been sent.",
        starred: false,
    },
    ];

    const AdminNotifications = () => {
    return (
        <div className="container-fluid bg-light min-vh-100 d-flex flex-column p-0">
        {/* Navbar */}
        <nav className="navbar bg-white shadow-sm px-4 d-flex justify-content-between align-items-center">
            <span className="navbar-brand fw-bold text-primary">
            <img src="/logo.png" alt="VisionTrack" style={{ height: "30px" }} className="me-2" />
            VisionTrack
            </span>
            <input className="form-control w-25" type="search" placeholder="Search..." />
            <span className="text-muted">Mr. Thomson</span>
        </nav>

        <div className="row flex-grow-1">
            {/* Sidebar */}
            <div className="col-1 bg-white border-end d-flex flex-column align-items-center py-3">
            <i className="bi bi-house-door-fill my-3"></i>
            <i className="bi bi-person-fill my-3"></i>
            <i className="bi bi-calendar-event-fill my-3"></i>
            <i className="bi bi-list-ul my-3"></i>
            <i className="bi bi-box-arrow-right my-3"></i>
            </div>

            {/* Main Content */}
            <div className="col px-4 py-3">
            <h2 className="fw-bold">Notifications</h2>

            {/* Search & Filter */}
            <div className="d-flex align-items-center gap-3 mt-3">
                <div className="input-group w-50">
                <span className="input-group-text">
                    <i className="bi bi-search"></i>
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search in Notifications"
                />
                </div>
                <div className="ms-auto">
                <button className="btn btn-light me-2 border">Today</button>
                <button className="btn btn-light border">Starred</button>
                </div>
            </div>

            {/* Notification Cards */}
            <div className="mt-4">
                {notifications.map((note) => (
                <div
                    key={note.id}
                    className="bg-white p-3 rounded shadow-sm mb-3 d-flex justify-content-between align-items-start"
                >
                    <div className="d-flex align-items-start">
                    <i
                        className={`bi me-3 fs-4 ${
                        note.type === "danger"
                            ? "bi-exclamation-triangle-fill text-danger"
                            : note.type === "success"
                            ? "bi-check-circle-fill text-success"
                            : "bi-info-circle-fill text-primary"
                        }`}
                    ></i>
                    <div>
                        <div className="fw-semibold">{note.title}</div>
                        <div className="text-muted small">{note.time}</div>
                        <div className="mt-1">{note.message}</div>
                    </div>
                    </div>
                    <i
                    className={`bi ${
                        note.starred ? "bi-star-fill" : "bi-star"
                    } fs-5 text-secondary`}
                    ></i>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
};

export default AdminNotifications;
