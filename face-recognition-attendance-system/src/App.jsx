import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import OTPVerification from "./pages/OTPVerification";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/SampleDashboard";
import AddEditUser from "./pages/AddEditUser";
import AdminReportPage from "./pages/AdminReportPage";
import AttendanceHistory from "./pages/AttendanceHistory";
import AdminDashboard from './pages/AdminDashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-user" element={<AddEditUser />} />
        <Route path="/admin-report" element={<AdminReportPage />} />
        <Route path="/atten-hist" element={<AttendanceHistory />} />



      </Routes>
    </Router>
  );
}

export default App;