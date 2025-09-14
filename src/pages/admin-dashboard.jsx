import React from "react";

export default function AdminDashboard() {
  const handleUpload = (event) => {
    event.preventDefault();
    alert("✅ File uploaded successfully (dummy action).");
    // Later: connect this to backend API for actual upload
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">👨‍💻 Admin Dashboard</h2>

      <div className="card p-4 shadow">
        <h4>📚 Upload Study Materials</h4>
        <form onSubmit={handleUpload}>
          <div className="mb-3">
            <label className="form-label">Select Exam</label>
            <select className="form-select">
              <option>GATE</option>
              <option>GRE</option>
              <option>IELTS</option>
              <option>TOEFL</option>
              <option>CAT</option>
              <option>Other Exams</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Upload File</label>
            <input type="file" className="form-control" />
          </div>

          <button type="submit" className="btn btn-success">
            Upload
          </button>
        </form>
      </div>

      <div className="text-center mt-4">
        <a href="/" className="btn btn-secondary">
          ⬅ Back to Portal
        </a>
      </div>
    </div>
  );
}
