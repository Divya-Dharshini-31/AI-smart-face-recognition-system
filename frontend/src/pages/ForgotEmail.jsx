import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";

function ForgotEmail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async () => {
    if (!email.trim()) {
      alert("Please enter email to continue");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/send-otp/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        // ✅ store email safely (for refresh cases)
        localStorage.setItem("reset_email", email);

        navigate("/otp-verification", {
          state: { email },
        });
      } else {
        alert(data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error(err);
      alert("Server error while sending OTP");
    } finally {
      setLoading(false);
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
        {/* Left Image */}
        <div className="w-50 h-100">
          <img
            src="/logo.jpeg"
            alt="logo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Right Form */}
        <div className="w-50 d-flex flex-column justify-content-between p-4 bg-white">
          <div className="flex-grow-1 d-flex flex-column justify-content-center">
            <div style={{ maxWidth: "400px", margin: "0 auto" }}>
              <h3 className="text-primary fw-bold mb-3 text-center">
                Forgot Password
              </h3>

              <p className="text-center text-muted mb-4">
                Enter your registered email to receive OTP
              </p>

              <input
                type="email"
                className="form-control mb-3 bg-info-subtle"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                type="button"
                className="btn btn-info w-100 mb-3"
                onClick={handleSendOTP}
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>

              <p className="text-center">
                Back to{" "}
                <span
                  className="text-primary"
                  onClick={() => navigate("/signin")}
                  style={{ cursor: "pointer" }}
                >
                  Sign in
                </span>
              </p>
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

export default ForgotEmail;
