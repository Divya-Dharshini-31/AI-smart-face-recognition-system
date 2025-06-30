import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AddEditUser from './pages/AddEditUser';
import AdminDashboard from './pages/AdminDashboard';
import AdminNotifications from './pages/AdminNotifications';
import LeaveApproval from './pages/LeaveApproval';
import AdminReportPage from './pages/AdminReportPage';
import AdminTeacher from './pages/AdminTeacher';
import AdminStudent from './pages/AdminStudent';
import AttendanceHistory from './pages/AttendanceHistory';
import LeaveRequests from './pages/LeaveRequests';
import OTPVerification from './pages/OTPVerification';
import ResetPassword from './pages/ResetPassword';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/add-edit-user" element={<AddEditUser />} />
        <Route path="/admin-report" element={<AdminReportPage />} />
        <Route path="/attendance-history" element={<AttendanceHistory />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/teachers" element={<AdminTeacher />} />
        <Route path="/students" element={<AdminStudent />} />
        <Route path="/leave-requests" element={<LeaveRequests />} />
        <Route path="/leave-approval" element={<LeaveApproval />} />
        <Route path="/admin-notif" element={<AdminNotifications />} />
      </Routes>
    </Router>
  );
}

export default App;
