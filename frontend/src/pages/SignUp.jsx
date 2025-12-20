import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignUp() {
  const navigate = useNavigate();

  // Input state hooks
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Password visibility
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  // Loader state
  const [loading, setLoading] = useState(false);

  // Handle signup
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const data = {
      email,
      first_name: firstName,
      last_name: lastName,
      role,
      mobile,
      password,
    };

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        alert("Signup successful");
        navigate("/signin"); // redirect to signin page
      } else {
        alert(JSON.stringify(result.message));
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="d-flex gap-2 mb-3">
                  <input
                    type="text"
                    placeholder="First name"
                    className="form-control bg-info-subtle"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="form-control bg-info-subtle"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <select
                  className="form-control mb-3 bg-info-subtle"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">Select Role</option>
                  <option>Admin</option>
                  <option>Teacher</option>
                  <option>Student</option>
                </select>
                <input
                  type="tel"
                  className="form-control mb-3 bg-info-subtle"
                  placeholder="Mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
                <div className="input-group mb-3">
                  <input
                    type={visible ? "text" : "password"}
                    className="form-control bg-info-subtle"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                  onClick={handleSignUp}
                  disabled={loading}
                >
                  {loading ? "Signing up..." : "Next"}
                </button>
                <p className="text-center">
                  Already have an account?{" "}
                  <span
                    className="text-primary"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/signin")}
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
