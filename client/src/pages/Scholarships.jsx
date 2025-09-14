import React from "react";

export default function Scholarships() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">💡 Scholarships for Higher Studies</h2>
      <p className="text-center text-muted">
        Explore funding options, government schemes, and fellowships available
        for students in India and abroad.
      </p>

      <div className="row g-4 mt-4">
        {/* Example Scholarship Card */}
        <div className="col-md-6">
          <div className="card shadow h-100">
            <div className="card-body">
              <h5 className="card-title">🎓 National Scholarship Portal</h5>
              <p>
                Government scholarships for UG/PG students across disciplines.
              </p>
              <a
                href="https://www.scholarships.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
              >
                Apply Here
              </a>
            </div>
          </div>
        </div>

        {/* Example Scholarship Card */}
        <div className="col-md-6">
          <div className="card shadow h-100">
            <div className="card-body">
              <h5 className="card-title">🌍 Fulbright-Nehru Fellowship</h5>
              <p>
                Fully funded scholarships for Indian students to pursue Master’s
                and PhD programs in the USA.
              </p>
              <a
                href="https://www.usief.org.in/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
