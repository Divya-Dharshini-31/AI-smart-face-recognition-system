// src/pages/LeaveRequests.jsx

import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const leaveRows = [
    { name: 'Ms. Dowan', from: '27.05.2025', to: '31.05.2025', reason: 'Medical Leave' },
    { name: 'Mr. Jonathan', from: '28.05.2025', to: '28.05.2025', reason: 'General/Personal Leave' },
    { name: 'Mr. David', from: '30.05.2025', to: '31.05.2025', reason: 'Medical Leave' },
    { name: 'Ms. Emma', from: '30.05.2025', to: '02.06.2025', reason: 'Training/Seminar' },
];

export default function LeaveRequests() {
    return (
        <div className="d-flex flex-column" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
        {/* Topbar */}
        <Topbar />

        {/* Layout with Sidebar */}
        <div className="d-flex" style={{ flexGrow: 1, overflow: 'hidden' }}>
            {/* Sidebar */}
            <Sidebar active="leave" />

            {/* Main Content */}
            <div className="flex-grow-1 p-4" style={{ overflowY: 'auto', backgroundColor: '#eafcff' }}>
            {/* Heading */}
            <div className="text-center mb-4">
                <h2 className="fw-bold">List of Leave Requests</h2>
            </div>

            {/* Table */}
            <div className="table-responsive mb-5">
                <table className="table table-bordered text-center align-middle bg-white">
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

            {/* Summary Card */}
            <div className="d-flex justify-content-center">
                <div className="p-4 rounded-3" style={{ backgroundColor: '#d7eef5', minWidth: '250px' }}>
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

            {/* Footer */}
            <div className="mt-4">
                <Footer />
            </div>
            </div>
        </div>
        </div>
    );
}
