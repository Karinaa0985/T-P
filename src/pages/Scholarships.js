import React from "react";
import { Link } from "react-router-dom";

function Scholarships() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">💡 Available Scholarships</h1>

      {/* Scholarship 1 */}
      <div className="card shadow p-4 my-3">
        <h4>Cummins Scholarship</h4>
        <p><strong>Eligibility:</strong> Undergraduate students, GPA ≥ 7.5</p>
        <p><strong>Amount:</strong> ₹50,000</p>
        <p><strong>Deadline:</strong> 31 Dec 2025</p>
        <a href="#" className="btn btn-success">Apply Now</a>
      </div>

      {/* Scholarship 2 */}
      <div className="card shadow p-4 my-3">
        <h4>Leela Poona Scholarship</h4>
        <p><strong>Eligibility:</strong> Postgraduate students, GPA ≥ 8.0</p>
        <p><strong>Amount:</strong> ₹75,000</p>
        <p><strong>Deadline:</strong> 15 Jan 2026</p>
        <a href="#" className="btn btn-success">Apply Now</a>
      </div>

      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">← Back to Home</Link>
      </div>
    </div>
  );
}

export default Scholarships;
