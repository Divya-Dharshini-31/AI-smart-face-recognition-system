// ────────────────────────────────────────────────────────────────
// src/pages/LeaveRequests.jsx
// ────────────────────────────────────────────────────────────────
import Footer from '../components/Footer'; // © 2025 …  (already in your repo)
import Sidebar from '../components/Sidebar'; // left vertical menu
import Topbar from '../components/Topbar'; // search bar + user info

/**
 * Hard-coded demo rows – replace with API data later.
 */
const leaveRows = [
    { name: 'Ms. Dowan',    from: '27.05.2025', to: '31.05.2025', reason: 'Medical Leave' },
    { name: 'Mr. Jonathan', from: '28.05.2025', to: '28.05.2025', reason: 'General/Personal Leave' },
    { name: 'Mr. David',    from: '30.05.2025', to: '31.05.2025', reason: 'Medical Leave' },
    { name: 'Ms. Emma',     from: '30.05.2025', to: '02.06.2025', reason: 'Training/Seminar' },
];

export default function LeaveRequests() {
    return (
        <div className="d-flex">
        {/* ───── Left sidebar ───── */}
        <Sidebar active="leave" />

        {/* ───── Right-hand wrapper ───── */}
        <div className="d-flex flex-column flex-grow-1">
            {/* top nav */}
            <Topbar />

            {/* page body */}
            <main
            className="flex-grow-1 p-4"
            style={{ backgroundColor: '#eafcff', minHeight: 'calc(100vh - 60px)' }} // 60 px = Topbar height
            >
            <h2 className="fw-bold mb-4">List of Leave Requests</h2>

            {/* table */}
            <div className="table-responsive">
                <table className="table table-bordered text-center align-middle">
                <thead className="table-light">
                    <tr>
                    <th>Name</th>
                    <th>From date</th>
                    <th>To date</th>
                    <th>Reason</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {leaveRows.map((row, idx) => (
                    <tr key={idx}>
                        <td>{row.name}</td>
                        <td>{row.from}</td>
                        <td>{row.to}</td>
                        <td>{row.reason}</td>
                        <td>
                        <button className="btn btn-info text-white rounded-pill px-4 py-1">
                            View
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            {/* summary card */}
            <div className="d-flex justify-content-center mt-5">
                <div
                className="p-4 rounded-3"
                style={{ backgroundColor: '#d7eef5', minWidth: '220px' }}
                >
                <p className="mb-1 fw-semibold">
                    No. of requests <span className="float-end">{leaveRows.length}</span>
                </p>
                <p className="mb-1 fw-semibold">
                    Approved <span className="float-end">3</span>
                </p>
                <p className="mb-0 fw-semibold">
                    Rejected <span className="float-end">1</span>
                </p>
                </div>
            </div>
            </main>

            {/* footer note */}
            <Footer />
        </div>
        </div>
    );
}
