import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const handleForgot = () => {
    if (!email.trim()) alert("Please enter email to continue");
    else navigate("/otp");
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
        {/* Left Side - Image */}
        <div className="w-50 h-100">
          <img
            src="/logo.jpeg"
            alt="logo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Right Side - Form + Footer */}
        <div className="w-50 d-flex flex-column justify-content-between p-4 bg-white">
          <div className="flex-grow-1 d-flex flex-column justify-content-center">
            <div style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
              <h3 className="text-primary fw-bold mb-3 text-center">Sign in</h3>
              <form>
                <input
                  type="email"
                  className="form-control mb-3 bg-info-subtle"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="input-group mb-3">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="form-control bg-info-subtle"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    className="input-group-text"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    style={{ cursor: "pointer" }}
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <select className="form-control mb-3 bg-info-subtle" required>
                  <option value="">Select Role</option>
                  <option>Admin</option>
                  <option>Teacher</option>
                  <option>Student</option>
                </select>
                <div className="text-end mb-3">
                  <span
                    className="text-primary"
                    onClick={handleForgot}
                    style={{ cursor: "pointer", fontSize: "0.9rem" }}
                  >
                    Forgot Your Password?
                  </span>
                </div>
                <button
                  type="button"
                  className="btn btn-info w-100 mb-2"
                  onClick={() => navigate("/dashboard")}
                >
                  Sign In
                </button>
                <p className="text-center">
                  Don’t have an account?{" "}
                  <span
                    className="text-primary"
                    onClick={() => navigate("/signup")}
                    style={{ cursor: "pointer" }}
                  >
                    Sign up
                  </span>
                </p>
              </form>
            </div>
          </div>

          {/* Footer at bottom */}
          <div className="text-center">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
