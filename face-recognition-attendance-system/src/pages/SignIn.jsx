import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleForgot = () => {
    if (!email) {
      alert("Please enter email to continue");
    } else {
      navigate("/otp");
    }
  };

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
            <img src="/logo.jpeg" alt="logo" className="img-fluid mb-2" style={{ maxWidth: "140px" }} />
            <h2 className="fw-bold">VISIONTRACK</h2>
          </div>

          {/* Right side */}
          <div className="col-md-6 d-flex flex-column justify-content-center p-4">
            <h3 className="text-primary fw-bold mb-3">Sign in</h3>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="form-control mb-2 bg-info-subtle"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="form-control mb-2 bg-info-subtle"
              />
              <select className="form-control my-2 bg-info-subtle">
                <option>Select Role</option>
                <option>Admin</option>
                <option>Teacher</option>
                <option>Student</option>
              </select>
              <div className="d-flex justify-content-end mb-2">
                <span
                  className="text-primary"
                  style={{ cursor: "pointer", fontSize: "0.9rem" }}
                  onClick={handleForgot}
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
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </span>
              </p>
            </form>
          </div>
        </div>

        {/* Footer pinned at bottom */}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
