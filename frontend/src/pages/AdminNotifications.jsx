import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AdminNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/notifications/");
      const data = await res.json();
      setNotifications(data);
      setShowNotifications(true);
    } catch (error) {
      console.error("Failed to load notifications", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex flex-column"
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      {/* Topbar */}
      <Topbar />

      <div className="d-flex flex-grow-1" style={{ overflow: "hidden" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div
          className="flex-grow-1 p-4"
          style={{ overflowY: "auto", backgroundColor: "#dffdff" }}
        >
          {/* Header + Button */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold mb-0">Admin Panel</h2>

            {/* 🔔 Notifications Button */}
            <button
              className="btn btn-info fw-semibold"
              onClick={fetchNotifications}
            >
              View Notifications
            </button>
          </div>

          {/* Loading */}
          {loading && <p>Loading notifications...</p>}

          {/* Notifications Section */}
          {showNotifications && !loading && (
            <>
              <h4 className="mb-3">Notifications</h4>

              {notifications.length === 0 && (
                <p className="text-muted">No notifications available</p>
              )}

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
                      <div className="text-muted small">
                        {new Date(note.created_at).toLocaleString()}
                      </div>
                      <div className="mt-1">{note.message}</div>
                    </div>
                  </div>

                  {!note.is_read && (
                    <span className="badge bg-primary rounded-pill">
                      New
                    </span>
                  )}
                </div>
              ))}
            </>
          )}

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AdminNotifications;
