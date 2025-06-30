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
      className="container-fluid vh-100 vw-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#b7e6ec" }}
    >
      <div
        className="row shadow bg-white rounded-4"
        style={{
          width: "900px",
          height: "90vh",
          display: "flex", flexDirection: "column",
        }}
      >
        <div className="d-flex flex-grow-1">
          {/* Left Image */}
          <div className="col-md-6 p-0">
            <img
              src="/otp.jpeg"
              alt="otp"
              style={{ width: "120%", height: "100%"}}
            />
          </div>

          {/* Right Side */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-4 text-center">
            <h1 className="text-primary fw-bold mb-2">Enter OTP Code</h1>

            <div className="d-flex justify-content-center gap-2 mb-2">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="form-control text-center"
                  style={{ height: "70px", width: "60px" }}
                  ref={(el) => (inputRefs.current[i] = el)}
                  value={digit}
                  onChange={(e) => handleChange(i, e.target.value)}
                />
              ))}
            </div>

            <button
              className="btn btn-info py-2 px-4 fs-5 mt-2"
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default OTPVerification;
