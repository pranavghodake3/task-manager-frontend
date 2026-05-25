import "../assets/css/auth.css";

export default function Signup() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Left Side */}
        {/* <div className="auth-left">
          <h1>TaskFlow</h1>

          <p>
            Create your workspace and start managing projects like a professional
            engineering team.
          </p>

          <div className="auth-features">
            <div>✔ Project & Sprint Planning</div>
            <div>✔ Team Collaboration</div>
            <div>✔ Advanced Reporting</div>
          </div>
        </div> */}

        {/* Right Side */}
        <div className="auth-right">
          <div className="auth-card">
            <h2>Create Account 🚀</h2>

            <p className="auth-subtitle">
              Start building and managing your tasks today
            </p>

            <form className="auth-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Create password" />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm password" />
              </div>

              <button type="submit" className="auth-btn">
                Create Account
              </button>
            </form>

            <p className="auth-footer">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
