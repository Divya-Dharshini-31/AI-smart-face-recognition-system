import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";

function OTPVerification() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || localStorage.getItem("reset_email");

  useEffect(() => {
    if (location.state?.email) {
      localStorage.setItem("reset_email", location.state.email);
    }
  }, [location.state]);

  if (!email) {
    navigate("/forgot-email");
    return null;
  }

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (i, val) => {
    if (isNaN(val)) return;
    const newOtp = [...otp];
    newOtp[i] = val;
    setOtp(newOtp);
    if (val && i < 3) inputRefs.current[i + 1].focus();
  };

  const verifyOtp = async () => {
    const code = otp.join("");
    if (code.length !== 4) {
      alert("Enter 4-digit OTP");
      return;
    }

    setLoading(true);
    const res = await fetch("http://localhost:8000/api/verify-otp/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      navigate("/reset-password", { state: { email } });
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
                OTP Verification
              </h3>

              <p className="text-center text-muted mb-4">
                Enter the OTP sent to <strong>{email}</strong>
              </p>

              <div className="d-flex gap-2 justify-content-center mb-4">
                {otp.map((d, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    ref={(el) => (inputRefs.current[i] = el)}
                    value={d}
                    onChange={(e) => handleChange(i, e.target.value)}
                    className="form-control text-center bg-info-subtle"
                    style={{ width: "50px", height: "50px" }}
                  />
                ))}
              </div>

              <button
                className="btn btn-info w-100"
                onClick={verifyOtp}
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
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

export default OTPVerification;
