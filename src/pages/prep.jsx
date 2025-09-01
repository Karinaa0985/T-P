import React from "react";

function StudyMaterials() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">📚 Study Materials</h2>

      <div className="list-group">
        <a href="gate-materials.html" className="list-group-item list-group-item-action">
          GATE Study Material
        </a>
        <a href="gre-materials.html" className="list-group-item list-group-item-action">
          GRE Study Material
        </a>
        <a href="ielts-materials.html" className="list-group-item list-group-item-action">
          IELTS Study Material
        </a>
        <a href="toefl-materials.html" className="list-group-item list-group-item-action">
          TOEFL Study Material
        </a>
        <a href="cat-materials.html" className="list-group-item list-group-item-action">
          CAT Study Material
        </a>
        <a href="other-exams.html" className="list-group-item list-group-item-action">
          Other Exams
        </a>
      </div>

      <a href="index.html" className="btn btn-secondary mt-4">
        ⬅ Back to Portal
      </a>
    </div>
  );
}

export default StudyMaterials;
