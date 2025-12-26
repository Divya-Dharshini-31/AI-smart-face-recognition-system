import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || localStorage.getItem("reset_email");

  useEffect(() => {
    if (!email) navigate("/forgot-email");
  }, [email, navigate]);

  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const resetPassword = async () => {
    if (pass !== confirm) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);
    const res = await fetch("http://localhost:8000/api/reset-password/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: pass }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      localStorage.removeItem("reset_email");
      alert("Password reset successful");
      navigate("/signin");
    } else {
      alert(data.message);
    }
  };

  return (
    <div
      className="d-flex vh-100 vw-100 align-items-center justify-content-center"
      style={{ backgroundColor: "#e8e9eb" }}
    >
      <div
        className="d-flex shadow rounded overflow-hidden"
        style={{ width: "80%", maxWidth: "1000px", height: "80%" }}
      >
        {/* Left Logo */}
        <div className="w-50 h-100">
          <img
            src="/logo.jpeg"
            alt="VisionTrack"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Right Content */}
        <div className="w-50 d-flex flex-column justify-content-between p-4 bg-white">
          <div className="flex-grow-1 d-flex flex-column justify-content-center">
            <div style={{ maxWidth: "400px", margin: "0 auto" }}>
              <h3 className="text-primary fw-bold mb-3 text-center">
                Reset Password
              </h3>

              <input
                type="password"
                className="form-control mb-3 bg-info-subtle"
                placeholder="New Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-3 bg-info-subtle"
                placeholder="Confirm Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />

              <button
                className="btn btn-info w-100"
                onClick={resetPassword}
                disabled={loading}
              >
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </div>
          </div>

          <div className="text-center">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
