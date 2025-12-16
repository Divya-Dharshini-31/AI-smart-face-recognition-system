import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ResetPassword() {
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const navigate = useNavigate();

  const handleReset = () => {
    if (pass === confirm) navigate("/");
    else alert("Passwords do not match!");
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
            src="/reset.jpeg"
            alt="reset"
            style={{ width: "100%", height: "100%"}}
          />
        </div>

        {/* Right Section */}
        <div className="w-50 d-flex flex-column justify-content-between p-4 bg-white">
          <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
            <h3 className="text-primary fw-bold mb-4">Reset Password</h3>

            <div className="input-group mb-3" style={{ maxWidth: "400px", width: "100%" }}>
              <input
                type={visible ? "text" : "password"}
                className="form-control bg-info-subtle"
                placeholder="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <span
                className="input-group-text"
                onClick={() => setVisible(!visible)}
                style={{ cursor: "pointer" }}
              >
                {visible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="input-group mb-4" style={{ maxWidth: "400px", width: "100%" }}>
              <input
                type={confirmVisible ? "text" : "password"}
                className="form-control bg-info-subtle"
                placeholder="Confirm Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
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
              className="btn btn-info px-5 py-2 fs-5"
              onClick={handleReset}
            >
              Reset Password
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

export default ResetPassword;
