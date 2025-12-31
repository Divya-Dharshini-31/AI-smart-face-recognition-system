import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleForgot = () => {
    navigate("/forgot-email");
  };

  const handleSignIn = async () => {
    if (!email || !password || !role) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/signin/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      const text = await res.text();
      let result;

      try {
        result = JSON.parse(text);
      } catch {
        throw new Error("Invalid server response");
      }

      if (res.ok && result.success) {
        localStorage.setItem("access_token", result.access);
        localStorage.setItem("refresh_token", result.refresh);
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        alert(result.message || "Invalid credentials");
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

                <select
                  className="form-control mb-3 bg-info-subtle"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
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
                  onClick={handleSignIn}
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign In"}
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

          {/* Footer */}
          <div className="text-center">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
