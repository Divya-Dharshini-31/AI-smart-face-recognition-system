import React, { useState } from "react";
import Topbar from "../components/Topbar";
import Sidebarsmall from "../components/Sidebarsmall";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function ReportViewPage() {
  const params = new URLSearchParams(window.location.search);
  const month = params.get("month");
  const year = params.get("year");

  const [report] = useState([]); // Data will come from camera module later

  const navigate = useNavigate();

  const downloadReport = () => {
    alert("Report will be available after camera module integration.");
  };

  return (
    <div
      className="d-flex flex-column"
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      {/* Topbar */}
      <Topbar />

      <div className="d-flex" style={{ flexGrow: 1 }}>
        {/* Sidebar */}
        <Sidebarsmall />

        {/* Main Content */}
        <div
          className="flex-grow-1 d-flex flex-column p-3 overflow-auto"
          style={{ backgroundColor: "#e6f8fb" }}
        >
          {/* Page Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Attendance Report – {month}/{year}</h4>
            <img
              src="/celebration.jpeg"
              alt="Fly"
              style={{ width: "50px", height: "50px" }}
            />
          </div>

          {/* Report Table */}
          <div className="bg-white p-3 rounded shadow">
            <table className="table table-bordered mb-0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Total Days</th>
                  <th>Present</th>
                  <th>Absent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="text-center">
                    No data available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Download Button Bottom Right */}
          <div className="mt-3 d-flex justify-content-end">
            <button
              className="btn"
              style={{
                backgroundColor: "#0d6efd",
                color: "white",
                border: "none",
                padding: "0.5rem 1.2rem",
                borderRadius: "0.375rem",
                fontWeight: "500",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                transition: "background-color 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#0056b3")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#0d6efd")
              }
              onClick={downloadReport}
            >
              Download Report
            </button>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ReportViewPage;
