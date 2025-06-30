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
    <div className="container-fluid vh-100 vw-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#b7e6ec" }}>
      <div className="row shadow bg-white rounded-4" style={{ width: "900px", height: "90vh", display: "flex", flexDirection: "column" }}>
        <div className="d-flex flex-grow-1">
          {/* Left full image */}
          <div className="col-md-6 p-3">
            <img src="/logo.jpeg" alt="logo" style={{ width: "100%", height: "100%"}} />
          </div>

          {/* Right form */}
          <div className="col-md-6 d-flex flex-column justify-content-around p-4">
            <div className="text-center">
              <h3 className="text-primary fw-bold mb-3">Sign in</h3>
              <form>
                <input type="email" className="form-control mb-3 bg-info-subtle" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <div className="input-group mb-3">
                  <input type={passwordVisible ? "text" : "password"} className="form-control bg-info-subtle" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <span className="input-group-text" onClick={() => setPasswordVisible(!passwordVisible)} style={{ cursor: "pointer" }}>
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
                  <span className="text-primary" onClick={handleForgot} style={{ cursor: "pointer", fontSize: "0.9rem" }}>
                    Forgot Your Password?
                  </span>
                </div>
                <button type="button" className="btn btn-info w-100 mb-2" onClick={() => navigate("/dashboard")}>Sign In</button>
                <p className="text-center">
                  Don’t have an account? <span className="text-primary" onClick={() => navigate("/signup")} style={{ cursor: "pointer" }}>Sign up</span>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-auto"><Footer /></div>
      </div>
    </div>
  );
}

export default SignIn;
