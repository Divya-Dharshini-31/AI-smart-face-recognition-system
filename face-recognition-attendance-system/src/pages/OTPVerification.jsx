import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import Footer from "../components/Footer";

function OTPVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) inputRefs.current[index + 1].focus();
  };

  const handleSubmit = () => {
    if (otp.join("") === "7777") {
      navigate("/reset-password");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div
      className="d-flex vh-100 vw-100 align-items-center justify-content-center"
      style={{ backgroundColor: "#e8e9eb" }}
    >
      <div
        className="d-flex shadow rounded overflow-hidden"
        style={{ width: "80%", maxWidth: "1000px", height: "85%" }}
      >
        {/* Left Image */}
        <div className="w-50 h-100">
          <img
            src="/otp.jpeg"
            alt="otp"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Right Form */}
        <div className="w-50 d-flex flex-column justify-content-between p-4 bg-white">
          <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="text-primary fw-bold mb-3">Enter OTP Code</h1>
            <div className="d-flex justify-content-center gap-3 mb-3">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="form-control text-center"
                  style={{ height: "70px", width: "60px", fontSize: "24px" }}
                  ref={(el) => (inputRefs.current[i] = el)}
                  value={digit}
                  onChange={(e) => handleChange(i, e.target.value)}
                />
              ))}
            </div>
            <button
              className="btn btn-info px-5 py-2 fs-5"
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>

          {/* Footer */}
          <div className="text-center">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPVerification;
