import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function SignUp() {
  const navigate = useNavigate();

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
            <h3 className="text-primary fw-bold mb-3">Sign up</h3>
            <form>
              <input type="email" placeholder="Email" className="form-control mb-2 bg-info-subtle" />
              <div className="d-flex gap-2">
                <input type="text" placeholder="First name" className="form-control bg-info-subtle" />
                <input type="text" placeholder="Last name" className="form-control bg-info-subtle" />
              </div>
              <select className="form-control my-2 bg-info-subtle">
                <option>Select Role</option>
                <option>Admin</option>
                <option>Teacher</option>
                <option>Student</option>
              </select>
              <input type="tel" placeholder="Mobile number" className="form-control mb-2 bg-info-subtle" />
              <input type="password" placeholder="Password" className="form-control mb-2 bg-info-subtle" />
              <input type="password" placeholder="Confirm Password" className="form-control mb-3 bg-info-subtle" />
              <button type="button" className="btn btn-info w-100 mb-2" onClick={() => navigate("/dashboard")}>
                Next
              </button>
              <p className="text-center">
                Already have an account?{" "}
                <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                  Sign in
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

export default SignUp;
