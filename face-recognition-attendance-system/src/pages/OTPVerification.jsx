import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function OTPVerification() {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid vh-100 vw-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#b7e6ec" }}
    >
      <div
        className="row shadow bg-white rounded-4"
        style={{ width: "900px", height: "90vh", display: "flex", flexDirection: "column" }}
      >
        <div className="d-flex flex-grow-1">
          {/* Left side */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-4">
            <img
              src="/otp.jpeg"
              alt="otp"
              className="img-fluid mb-2"
              style={{ maxWidth: "150px" }}
            />
            <h4 className="fw-bold text-center mt-2">OTP Verification</h4>
          </div>

          {/* Right side */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-4 text-center">
            <h3 className="text-primary fw-bold mb-3">Enter OTP Code</h3>
            <div className="d-flex justify-content-center gap-2 mb-3">
              {[...Array(4)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  className="form-control text-center"
                  style={{ width: "50px" }}
                  maxLength={1}
                />
              ))}
            </div>
            <p>OTP verified successfully ✅</p>
            <button className="btn btn-info" onClick={() => navigate("/reset-password")}>
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
