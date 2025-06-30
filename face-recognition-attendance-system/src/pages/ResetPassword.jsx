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
      className="container-fluid vh-100 vw-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#b7e6ec" }}
    >
      <div
        className="row shadow bg-white rounded-4"
        style={{
          width: "900px",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="d-flex flex-grow-1">
          {/* Left Image */}
          <div className="col-md-6 p-0">
            <img
              src="/reset.jpeg"
              alt="reset"
              style={{ width: "105%", height: "95%"}}
            />
          </div>

          {/* Right Section */}
          <div className="col-md-6 d-flex flex-column justify-content-center p-4 text-center">
            <h3 className="text-primary fw-bold mb-3">Reset Password</h3>

            <div className="input-group mb-3">
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

            <div className="input-group mb-3">
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

            <button className="btn btn-info py-2 px-4 fs-5 mt-2" onClick={handleReset}>
              Reset Password
            </button>
          </div>
        </div>

        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
