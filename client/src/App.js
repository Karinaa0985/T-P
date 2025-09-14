

import React, { useEffect } from "react";
import Scholarships from "./pages/Scholarships";
import "./App.css";
import collegeImg from "./assets/college.jpg";
import { useState } from "react";
import API from "./api";


// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Prep from "./pages/prep";
import AdminDashboard from "./pages/admin-dashboard";
import AdminLogin from "./pages/admin-login";


function App() {


  return (
    <Router>
      <>
        {/* ===== Header ===== */}
        <header
          style={{
            backgroundImage: `url(${collegeImg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            color: "rgb(7, 7, 7)",
            textAlign: "center",
            padding: "3em 1.5em",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            boxShadow: "0 5px 15px rgb(250, 246, 246)",
          }}
        >
          <div className="header-title">
            <img
              src="/assets/Maharshi ji pic.jpg"
              alt="Founder"
              className="header-logo circular"
            />
            <div className="header-text">
              <h2>Maharshi Karve Stree Shikshan Samstha's</h2>
              <h1>
                <span className="highlight-text">
                  Cummins College of Engineering <br /> For Women, Nagpur
                </span>
              </h1>
              <h3>
                Affiliated to Rashtrasant Tukadoji Maharaj Nagpur University
              </h3>
            </div>
            <img
              src="/assets/collegelogo.jpg"
              alt="College Logo"
              className="header-logo rectangle"
            />
          </div>
        </header>

        {/* ===== Navigation ===== */}
          <nav className="navbar navbar-light bg-light shadow-sm">
          <div className="container d-flex align-items-center">
            {/* ✅ Cleaned nav links (kept only one set, removed duplicates) */}
            <div>
              <Link to="/" className="mx-2">Home</Link>
              <a href="#about" className="mx-2">About Us</a>
              <a href="#team" className="mx-2">Team</a>
              <Link to="/prep" className="mx-2">Higher Studies</Link>
              <a href="#placement" className="mx-2">Placement</a>
              <a href="#gallery" className="mx-2">Gallery</a>
              <a href="#contact" className="mx-2">Contact Us</a>

              {/* ⬇️ Changed from <a href="admin-login.html"> to React Router <Link> */}
              <Link to="/admin-login" className="mx-2">Admin</Link>
            </div>

              <div className="ms-auto">
               <div id="google_translate_element"></div>
              </div>

            </div>
          
        </nav>

        {/* ===== Define Routes ===== */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prep" element={<Prep />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/scholarships" element={<Scholarships />} />

        </Routes>
      </>
    </Router>
  );
}


function HomePage() {


  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
 // handle form submit
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await API.post("/submit", formData);   // ✅ uses API instance
    alert("✅ Message sent successfully!");
  } catch (err) {
    console.error("❌ Error details:", err.response ? err.response.data : err.message);
    alert("❌ Failed: " + (err.response ? err.response.data.error : err.message));
  }
};


  return (
    <>
  
      {/* ===== Hero Section ===== */}
      <section className="hero" id="home">
        <img
          src="/assets/placed students.jpg"
          alt="Welcome Banner"
          className="img-fluid"
        />
      </section>

      {/* ===== About Section ===== */}
      <section id="about">
        <h2>About Us</h2>
        <p>
          <strong>Cummins College of Engineering for women, Nagpur</strong> has
          a separate focused T&P Cell for counselling, employability training
          and providing excellent on campus opportunities. Cummins achieved
          excellent placement in the last 11 years with core opportunities.
          Outcome is majorly because of successful planning and execution of the
          cell.
        </p>
        <p>
          Through this portal, we aim to:
          <ul>
            <li>
              Provide resources for <strong>placement readiness</strong>.
            </li>
            <li>
              Create a <strong>collaborative space</strong> for students.
            </li>
          </ul>
        </p>
        <p>
          With dedication and teamwork, we strive to empower every student to
          confidently take the next step toward a successful career.
        </p>
      </section>

      {/* ===== Team Section ===== */}
      <section id="team">
        <h2 className="text-center mb-4">Our T&amp;P Team</h2>

        {/* Head of T&P */}
        <div className="text-center mb-5">
          <img
            src="/assets/manish sir.jpg"
            className="rounded-circle"
            alt="Head of T&P"
            width="200"
            height="200"
          />
          <h4 className="mt-3">Er. Manish Raut</h4>
          <p>Training &amp; Placement Officer</p>
          <p>
            <strong>Contact Head of T&amp;P</strong>:{" "}
            <a href="mailto:manish.raut@cumminscollege.edu.in">
              manish.raut@cumminscollege.edu.in
            </a>
          </p>
          <p>
            <b>Phone no. </b>+91 9881716620 / +91 8411915585
          </p>
          <br />
          <a
            href="https://www.linkedin.com/in/manish-raut/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            LinkedIn
          </a>
        </div>

        {/* Carousel for Departmental Heads */}
        <div
          id="teamCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4000"
          data-bs-pause="false"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row justify-content-center">
                {/* Card 1 */}
                <div className="col-md-6">
                  <div className="card team-card">
                    <img
                      src="/assets/prasanna sir.jpg"
                      className="card-img-top rounded-circle mx-auto mt-3"
                      alt="Dept Head 1"
                      style={{ width: "150px", height: "150px" }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">Dr. Prasanna Mahankar</h5>
                      <p className="card-text">
                        T&amp;P Incharge - Mechanical Dept.
                      </p>
                      <a href="mailto:prasanna.mahankar@cumminscollege.edu.in">
                        prasanna.mahankar@cumminscollege.edu.in
                      </a>
                      <br />
                      📞 <a href="tel:+918605184649">+91 8605184649</a>
                      <br />
                      <a
                        href="https://www.linkedin.com/in/prasanna-mahankar-3518281b3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-6">
                  <div className="card team-card">
                    <img
                      src="/assets/abhilasha-borkar mam.jpg"
                      className="card-img-top rounded-circle mx-auto mt-3"
                      alt="Dept Head 2"
                      style={{ width: "150px", height: "150px" }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">Er. Abhilasha Borkar</h5>
                      <p className="card-text">
                        T&amp;P Incharge - Computer Dept.
                      </p>
                      <a href="mailto:abhilasha.borkar@cumminscollege.edu.in">
                        abhilasha.borkar@cumminscollege.edu.in
                      </a>
                      <br />
                      📞 <a href="tel:+918983284938">+91 8983284938</a>
                      <br />
                      <a
                        href="https://www.linkedin.com/in/abhilasha-borkar-5823b917a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row justify-content-center">
                {/* Card 3 */}
                <div className="col-md-6">
                  <div className="card team-card">
                    <img
                      src="/assets/rashmi mam.jpg"
                      className="card-img-top rounded-circle mx-auto mt-3"
                      alt="Dept Head 3"
                      style={{ width: "150px", height: "150px" }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">Prof. Rashmi Deshpande</h5>
                      <p className="card-text">
                        T&amp;P Incharge - Allied Science Dept.
                      </p>
                      <a href="mailto:rashmi.deshpande@cumminscollege.edu.in">
                        rashmi.deshpande@cumminscollege.edu.in
                      </a>
                      <br />
                      📞 <a href="tel:+919822695556">+91 9822695556</a>
                      <br />
                      <a
                        href="https://www.linkedin.com/in/rashmi-deshpande-1606011a7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="col-md-6">
                  <div className="card team-card">
                    <img
                      src="/assets/tushar sir.jpg"
                      className="card-img-top rounded-circle mx-auto mt-3"
                      alt="Dept Head 4"
                      style={{ width: "150px", height: "150px" }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">Er. Tushar Joshi</h5>
                      <p className="card-text">T&amp;P Incharge - ETC Dept.</p>
                      <a href="mailto:tushar.joshi@cumminscollege.edu.in">
                        tushar.joshi@cumminscollege.edu.in
                      </a>
                      <br />
                      📞 <a href="tel:+919422561121">+91 9422561121</a>
                      <br />
                      <a
                        href="https://www.linkedin.com/in/xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#teamCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#teamCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>
     {/* ===== Higher Studies Section ===== */}
<section id="higher-studies" className="container my-5">
  <h2 className="text-center text-2xl font-bold mb-4">🎓 Higher Studies</h2>

  <p className="text-gray-700 mb-4">
    Higher education opens doors to advanced knowledge, global exposure, and career 
    opportunities beyond campus placements. Our Training & Placement Cell not only 
    prepares students for corporate jobs but also mentors those who wish to pursue 
    postgraduate studies in India and abroad.
  </p>

  <div className="row">
    {/* Tabs (left side) */}
    <div className="col-md-4 mb-3 mb-md-0">
      <ul
        className="nav flex-column nav-pills me-3"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <li className="nav-item">
          <button
            className="nav-link active"
            id="v-pills-counselling-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-counselling"
            type="button"
            role="tab"
            aria-controls="v-pills-counselling"
            aria-selected="true"
          >
            💼 Career Counselling
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            id="v-pills-global-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-global"
            type="button"
            role="tab"
            aria-controls="v-pills-global"
            aria-selected="false"
          >
            🌍 Global Opportunities
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            id="v-pills-prep-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-prep"
            type="button"
            role="tab"
            aria-controls="v-pills-prep"
            aria-selected="false"
          >
            📝 Preparation Support
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            id="v-pills-alumni-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-alumni"
            type="button"
            role="tab"
            aria-controls="v-pills-alumni"
            aria-selected="false"
          >
            🎓 Alumni Connect
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            id="v-pills-scholarship-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-scholarship"
            type="button"
            role="tab"
            aria-controls="v-pills-scholarship"
            aria-selected="false"
          >
            💡 Scholarship Awareness
          </button>
        </li>
      </ul>
    </div>

    {/* Tab Content (right side) */}
    <div className="col-md-8">
      <div className="tab-content" id="v-pills-tabContent">
        
        {/* Career Counselling */}
        <div
          className="tab-pane fade show active"
          id="v-pills-counselling"
          role="tabpanel"
          aria-labelledby="v-pills-counselling-tab"
        >
          <h4 className="mb-2">💼 Career Counselling</h4>
          <p>
            Helping students choose between placements and higher education based on 
            their strengths and goals.
          </p>
          <a
            href="https://forms.gle/jgx1qMWU8fcrhT1d8"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mt-2"
              >
            Book a Session
                </a>

        </div>
        
        {/* Global Opportunities */}
        <div
          className="tab-pane fade"
          id="v-pills-global"
          role="tabpanel"
          aria-labelledby="v-pills-global-tab"
        >
          <h4 className="mb-2">🌍 Global Opportunities</h4>
          <p>
            Explore universities across the globe with alumni studying at reputed 
            institutions.
          </p>
          <img
            src="/assets/worldmap.jpg"
            alt="Global Opportunities Map"
            className="img-fluid rounded shadow mt-2"
          />
        </div>
        
        {/* Preparation Support */}
        <div
          className="tab-pane fade"
          id="v-pills-prep"
          role="tabpanel"
          aria-labelledby="v-pills-prep-tab"
        >
          <h4 className="mb-2">📝 Preparation Support</h4>
          <ul>
            <li><strong>GATE:</strong> Study guides &amp; previous papers</li>
            <li><strong>GRE / IELTS / TOEFL:</strong> Resources &amp; tips</li>
            <li><strong>CAT:</strong> Mock test materials</li>
          </ul>
         <Link to="/prep" 
         className="btn btn-primary mt-3"
         >
        📚 Open Study Materials
        </Link>

        </div>

        {/* Alumni Connect */}
        <div
          className="tab-pane fade"
          id="v-pills-alumni"
          role="tabpanel"
          aria-labelledby="v-pills-alumni-tab"
        >
          <h4 className="mb-2">🎓 Alumni Connect</h4>
          <p>Hear from alumni pursuing Masters and Doctorates worldwide.</p>
          <div className="alert alert-info mt-2">
            ✨ Coming soon: Alumni video testimonials
          </div>
        </div>
        
        {/* Scholarship Awareness */}
        <div
          className="tab-pane fade"
          id="v-pills-scholarship"
          role="tabpanel"
          aria-labelledby="v-pills-scholarship-tab"
        >
          <h4 className="mb-2">💡 Scholarship Awareness</h4>
          <p>
            Information on funding options, research fellowships, and government 
            scholarships.
          </p>
              <Link to="/scholarships" className="btn btn-success mt-2">
                  Explore Scholarships
            </Link>

        </div>
      </div>
    </div>
  </div>
</section>

      
    {/* ===== Placement Section ===== */}
<section id="placement" className="container my-5">
  <h2 className="text-center mb-4">💼 Placement</h2>
  <p className="text-center">
    The Training & Placement Cell provides structured training and excellent 
    opportunities with reputed companies. Explore our top recruiters below 👇
  </p>

  <div className="row g-4 mt-4">
    
    {/* Company 1 */}
    <div className="col-md-4">
      <div className="card shadow h-100">
        <img src="/assets/dassault.jpg" className="card-img-top" alt="Dassault Systems" />
        <div className="card-body">
          <h5 className="card-title">Dassault Systems</h5>
          <p><strong>Eligibility:</strong> Min 7.0 CGPA, No active backlogs</p>
          <p><strong>Guidelines:</strong> Focus on CAD/CAE knowledge, strong aptitude & problem-solving skills.</p>
          <a href="https://www.3ds.com/" target="_blank" rel="noreferrer" className="btn btn-outline-primary w-100">
            🌐 Visit Official Site
          </a>
        </div>
      </div>
    </div>

    {/* Company 2 */}
    <div className="col-md-4">
      <div className="card shadow h-100">
        <img src="/assets/hcl.jpg" className="card-img-top" alt="HCL" />
        <div className="card-body">
          <h5 className="card-title">HCL Technologies</h5>
          <p><strong>Eligibility:</strong> Min 6.5 CGPA, Open for all branches</p>
          <p><strong>Guidelines:</strong> Emphasis on coding rounds, communication skills, and logical reasoning.</p>
          <a href="https://www.hcltech.com/" target="_blank" rel="noreferrer" className="btn btn-outline-primary w-100">
            🌐 Visit Official Site
          </a>
        </div>
      </div>
    </div>

    {/* Company 3 */}
    <div className="col-md-4">
      <div className="card shadow h-100">
        <img src="/assets/kpit.jpg" className="card-img-top" alt="KPIT" />
        <div className="card-body">
          <h5 className="card-title">KPIT</h5>
          <p><strong>Eligibility:</strong> Min 7.5 CGPA, EC/EE/CS branches preferred</p>
          <p><strong>Guidelines:</strong> Automotive domain knowledge, C programming, and embedded systems basics.</p>
          <a href="https://www.kpit.com/" target="_blank" rel="noreferrer" className="btn btn-outline-primary w-100">
            🌐 Visit Official Site
          </a>
        </div>
      </div>
    </div>

  </div>
</section>


{/* ===== Gallery Section ===== */}
<section id="gallery" className="gallery container my-5">
  <h2 className="text-center mb-4">🖼️ Gallery</h2>

  <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel">

    {/* Indicators */}
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
    </div>

    {/* Carousel Slides */}
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/assets/visite4.jpg" className="d-block w-100" alt="Industrial Visit" />
      </div>
      <div className="carousel-item">
        <img src="/assets/HCL.jpg" className="d-block w-100" alt="HCL Placement Drive" />
      </div>
      <div className="carousel-item">
        <img src="/assets/awards.jpg" className="d-block w-100" alt="Awards Ceremony" />
      </div>
      <div className="carousel-item">
        <img src="/assets/gdse.jpg" className="d-block w-100" alt="GDSE Event" />
      </div>
      <div className="carousel-item">
        <img src="/assets/pink girls.jpg" className="d-block w-100" alt="Cultural Event" />
      </div>
      <div className="carousel-item">
        <img src="/assets/tp.jpg" className="d-block w-100" alt="T&P Cell Activity" />
      </div>
    </div>

    {/* Controls */}
    <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</section>

{/* ===== Contact Section ===== */}
      <section id="contact" className="container my-5">
        <h2 className="text-center text-2xl font-bold mb-4">📬 Contact Us</h2>

        {/* Contact Form */}
        <form
  onSubmit={handleSubmit}   // ✅ Connect handler
  autoComplete="off"        // 🚫 Disable browser autofill
  className="contact-form max-w-xl mx-auto bg-white shadow-lg rounded-lg p-4 space-y-3"
>
  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Your Name"
    required
    className="form-control"
    autoComplete="off"       // 🚫 Disable suggestions
  />

  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Your Email"
    required
    className="form-control"
    autoComplete="off"       // 🚫 Disable suggestions
  />

  <textarea
    rows="5"
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Your Message"
    required
    className="form-control"
    autoComplete="off"       // 🚫 Disable suggestions
  ></textarea>

  <button type="submit" className="btn btn-primary w-full py-2">
    🚀 Send Message
  </button>
</form>

      </section>



      {/* ===== Footer ===== */}
      <footer className="bg-gray-900 text-white text-center py-3 mt-6">
        <p>
          &copy; 2025 T&amp;P CCOEW | Designed by{" "}
          <span className="font-semibold text-blue-400">Karina</span>
        </p>
      </footer>
    </>
  );
}




export default App;
