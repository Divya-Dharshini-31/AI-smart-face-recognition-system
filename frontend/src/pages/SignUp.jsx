import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignUp() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  return (
    <div
      className="d-flex vh-100 vw-100 align-items-center justify-content-center"
      style={{ backgroundColor: "#e8e9eb" }}
    >
      <div
        className="d-flex shadow rounded overflow-hidden"
        style={{ width: "80%", maxWidth: "1000px", height: "80%" }}
      >
        {/* Left Half - Image */}
        <div className="w-50 h-100">
          <img
            src="/logo.jpeg"
            alt="logo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Right Half - Form + Footer */}
        <div className="w-50 d-flex flex-column justify-content-between p-4 bg-white">
          <div className="flex-grow-1 d-flex flex-column justify-content-center">
            <div style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
              <h3 className="text-primary fw-bold mb-3 text-center">Sign up</h3>
              <form>
                <input
                  type="email"
                  className="form-control mb-3 bg-info-subtle"
                  placeholder="Email"
                  required
                />
                <div className="d-flex gap-2 mb-3">
                  <input
                    type="text"
                    placeholder="First name"
                    className="form-control bg-info-subtle"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="form-control bg-info-subtle"
                    required
                  />
                </div>
                <select className="form-control mb-3 bg-info-subtle" required>
                  <option value="">Select Role</option>
                  <option>Admin</option>
                  <option>Teacher</option>
                  <option>Student</option>
                </select>
                <input
                  type="tel"
                  className="form-control mb-3 bg-info-subtle"
                  placeholder="Mobile number"
                  required
                />
                <div className="input-group mb-3">
                  <input
                    type={visible ? "text" : "password"}
                    className="form-control bg-info-subtle"
                    placeholder="Password"
                    required
                  />
                  <span
                    className="input-group-text"
                    onClick={() => setVisible(!visible)}
                    style={{ cursor: "pointer" }}
                  >
                    {visible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <div className="input-group mb-3">
                  <input
                    type={confirmVisible ? "text" : "password"}
                    className="form-control bg-info-subtle"
                    placeholder="Confirm Password"
                    required
                  />
                  <span
                    className="input-group-text"
                    onClick={() => setConfirmVisible(!confirmVisible)}
                    style={{ cursor: "pointer" }}
                  >
                    {confirmVisible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <button
                  type="button"
                  className="btn btn-info w-100 mb-2"
                  onClick={() => navigate("/dashboard")}
                >
                  Next
                </button>
                <p className="text-center">
                  Already have an account?{" "}
                  <span
                    className="text-primary"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                  >
                    Sign in
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

export default SignUp;
