import React from "react";
import { Link } from "react-router-dom";

function StudyMaterials() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">📚 Study Materials</h2>

      <div className="list-group">
        <Link to="/prep/gate" className="list-group-item list-group-item-action">
          GATE Study Material
        </Link>
        <Link to="/prep/gre" className="list-group-item list-group-item-action">
          GRE Study Material
        </Link>
        <Link to="/prep/ielts" className="list-group-item list-group-item-action">
          IELTS Study Material
        </Link>
        <Link to="/prep/toefl" className="list-group-item list-group-item-action">
          TOEFL Study Material
        </Link>
        <Link to="/prep/cat" className="list-group-item list-group-item-action">
          CAT Study Material
        </Link>
        <Link to="/prep/others" className="list-group-item list-group-item-action">
          Other Exams
        </Link>
      </div>

      <Link to="/" className="btn btn-secondary mt-4">
        ⬅ Back to Portal
      </Link>
    </div>
  );
}

export default StudyMaterials;
