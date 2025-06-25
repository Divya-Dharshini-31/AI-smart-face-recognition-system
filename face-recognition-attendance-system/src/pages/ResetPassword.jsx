import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";

function ResetPassword() {
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleReset = () => {
    if (pass === confirm) {
      navigate("/");
    } else {
      alert("Passwords do not match!");
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
            <img
              src="/reset.jpeg"
              alt="reset"
              className="img-fluid mb-2"
              style={{ maxWidth: "150px" }}
            />
            <h4 className="fw-bold text-center mt-2">Reset Your Password</h4>
          </div>

          {/* Right side */}
          <div className="col-md-6 d-flex flex-column justify-content-center p-4">
            <h3 className="text-primary fw-bold mb-3">Reset Password</h3>
            <input
              type="password"
              className="form-control mb-2 bg-info-subtle"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-3 bg-info-subtle"
              placeholder="Confirm Password"
              onChange={(e) => setConfirm(e.target.value)}
            />
            <button className="btn btn-info w-100" onClick={handleReset}>
              Reset Password
            </button>
          </div>
        </div>

        {/* Footer at the bottom */}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
