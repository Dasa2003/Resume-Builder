import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './create.css';

const templatesArr = [
  {
    id: 1,
    name: "Template 1",
    steps: ["Personal Information", "Professional Summary", "Technical Skills", "Education", "Work Experience", "Certifications", "Key Projects"], // Define the steps for this template
    personalInfo: { name: true, jobTitle: true, phone: true, location: true, email: true, linkedin: false, github: false, nationality: false, gender: false, DOB: false, portfolio: false },
    professionalSummary: { summary: true },
    skills: { skill: true },
    education: { degree: true, institution: true, duration: false, location: false, marks: false },
    workExperience: { position: true, company: true, location: true, years: true, description: false },
    certifications: { name: true, organization: true, year: false },
    projects: { name: true, role: true, description: true, year: true },
    additionalInfo: {languages : false, awards : false}
  },
  {
    id: 2,
    name: "Template 2",
    steps: ["Personal Information","Professional Summary","Work Experience","Education", "Technical Skills"], // Define the steps for this template
    personalInfo: { name: true, jobTitle: true, phone: true, location: true, email: true, linkedin: false, github: false, nationality: false, gender: false, DOB: false, portfolio: true },
    professionalSummary: { summary: true },
    skills: { skill: true },
    education: { degree: true, institution: true, duration: true, location: false, marks: false },
    workExperience: { position: true, company: true, location: false, years: true, description: true },
    certifications: { name: true, organization: true, year: true },
    projects: { name: true, role: true, description: true, year: true },
    additionalInfo: {languages : false, awards : false}
  },
  {
    id: 3,
    name: "Template 3",
    steps: ["Personal Information", "Professional Summary","Work Experience", "Education","Technical Skills",  "Certifications","Additional Information"], // Define the steps for this template
    personalInfo: { name: true, jobTitle: true, phone: true, location: true, email: true, linkedin: false, github: false, nationality: false, gender: false, DOB: false, portfolio: true },
    professionalSummary: { summary: true },
    skills: { skill: true },
    education: { degree: true, institution: true, duration: true, location: false, marks: false },
    workExperience: { position: true, company: true, location: false, years: true, description: true },
    certifications: { name: true, organization: true, year: false },
    projects: { name: true, role: true, description: true, year: false },
    additionalInfo: {languages : true, awards : true}
  },
  {
    id: 4,
    name: "Template 4",
    steps: ["Personal Information", "Professional Summary", "Technical Skills","Work Experience", "Education", "Certifications","Additional Information"], // Define the steps for this template
    personalInfo: { name: true, jobTitle: true, phone: true, location: true, email: true, linkedin: false, github: false, nationality: false, gender: false, DOB: false, portfolio: true },
    professionalSummary: { summary: true },
    skills: { skill: true },
    education: { degree: true, institution: true, duration: true, location: false, marks: false },
    workExperience: { position: true, company: true, location: false, years: true, description: true },
    certifications: { name: true, organization: true, year: false },
    projects: { name: true, role: true, description: true, year: false },
    additionalInfo: {languages : true, awards : true}
  }
];

function Create() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closePreview = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Navbar />
      <div>
        <main className={loading ? 'blurred' : ''}>
          <div className={`album py-5 bg-dark text-secondary`} style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
            <div className="container">
              <div className="row py-lg-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  <h1 style={{ fontWeight: 'bold', fontFamily: '"Frank Ruhl Libre", serif', color:'#b4b4b4'}}>TEMPLATES</h1>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {/* Template 1 */}
                <div className="col" style={{ marginBottom: '20px' }}>
                  <img
                    src="/Template1.jpg"
                    alt="Template 1"
                    style={{ width: '100%', height: 'auto' }}
                    className="card-hover"
                  />
                  <div style={{ textAlign: 'center', marginTop: '20px'}}>
                    <button
                      type="button"
                      className="btn btn-outline-light btn px-4"
                      style={{marginRight:"10px"}}
                      onClick={() => handleImageClick('/Template1.jpg')}
                    >
                      View
                    </button>
                    <Link
                      to={{
                        pathname: "/inputs",
                        state: { template: templatesArr[0] } 
                      }}
                      className="btn btn-outline-info btn px-4 me-sm-3 fw-bold"
                    >
                      Select
                    </Link>
                  </div>
                </div>

                {/* Template 2 */}
                <div className="col" style={{ marginBottom: '20px' }}>
                  <img
                    src="/Template2.png"
                    alt="Template 2"
                    style={{ width: '100%', height: '325px' }}
                    className="card-hover"
                  />
                  <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button
                      type="button"
                      className="btn btn-outline-light btn px-4"
                      style={{marginRight:"10px"}}
                      onClick={() => handleImageClick('/Template2.png')}
                    >
                      View
                    </button>
                    <Link
                      to={{
                        pathname: "/inputs",
                        state: { template: templatesArr[1] } 
                      }}
                      className="btn btn-outline-info btn px-4 me-sm-3 fw-bold"
                    >
                      Select
                    </Link>
                  </div>
                </div>

                {/* Template 3 */}
                <div className="col" style={{ marginBottom: '20px' }}>
                  <img
                    src="/Template3.png"
                    alt="Template 3"
                    style={{ width: '100%', height: '325px' }}
                    className="card-hover"
                  />
                  <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button
                      type="button"
                      className="btn btn-outline-light btn px-4"
                      style={{marginRight:"10px"}}
                      onClick={() => handleImageClick('/Template3.png')}
                    >
                      View
                    </button>
                    <Link
                      to={{
                        pathname: "/inputs",
                        state: { template: templatesArr[2] } 
                      }}
                      className="btn btn-outline-info btn px-4 me-sm-3 fw-bold"
                    >
                      Select
                    </Link>
                  </div>
                </div>
                {/* Template 4 */}
              <div className="col" style={{ marginBottom: '20px' }}>
                  <img
                    src="/Template4.png"
                    alt="Template 4"
                    style={{ width: '100%', height: 'auto' }}
                    className="card-hover"
                  />
                  <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button
                      type="button"
                      className="btn btn-outline-light btn px-4"
                      style={{marginRight:"10px"}}
                      onClick={() => handleImageClick('/Template4.png')}
                    >
                      View
                    </button>
                    <Link
                      to={{
                        pathname: "/inputs",
                        state: { template: templatesArr[3] } 
                      }}
                      className="btn btn-outline-info btn px-4 me-sm-3 fw-bold"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Loading Animation */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-animation">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}

      {/* Blurred Background */}
      {selectedImage && <div className="blurred-background" onClick={closePreview}></div>}

      {/* Preview Modal */}
      {selectedImage && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} onClick={closePreview}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <img src={selectedImage} alt="Selected Template" style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Create;
