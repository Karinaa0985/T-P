import React from "react";

export default function AdminLogin() {
  const validateLogin = (event) => {
    event.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "admin123") {
      window.location.href = "/admin-dashboard"; // Redirect
    } else {
      alert("❌ Invalid credentials. Try again.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">🔑 Admin Login</h3>
        <form onSubmit={validateLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" id="username" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" id="password" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <p className="text-muted small mt-3 text-center">
          © 2025 Career Companion Portal
        </p>
      </div>
    </div>
  );
}
