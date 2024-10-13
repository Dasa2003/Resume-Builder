import React from 'react';

const ResumeTemplateFourth = ({ formData }) => {
  const {
    personalInfo,
    profile,
    skills,
    education,
    workExperience,
    certifications,
    additionalInfo
  } = formData;

  return (
    <div>
      <title>Template4</title>
      <style>
        {`
          body {
            padding: 0px 5%;
            line-height: 1;
          }
          .right-align {
            text-align: right;
          }
          .starting {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: -20px;
          }
          .skills {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(3, 1fr);
          }
          .skill {
            text-align: center;
          }
          .skill:nth-child(6n) {
            border-right: none;
          }
        h4{
            margin:0px 0px;
        }
        .last{
            margin-top: -15px;
        }
        .course {
            margin-top: 20px;
          }
          page[size="A4"] {
            width: 21cm;
            height: 29.7cm;
          }
          .starting {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .starting-skills {
            display: flex;
            height: 70px;
            flex-direction: row;
            justify-content: space-around;
            margin-left: -60px;
          }
          page {
            padding: 30px 5%;
            background: white;
            display: block;
            margin: 0 auto;
            margin-bottom: 0.5cm;
            box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
          }
          hr {
            border: 0;
            border-top: 2px solid #7c5999;
            margin: 10px 0;
          }
        `}
      </style>
      <page size="A4">
    <div className="container">
      <h1 style={{ color: "#1e5ebe" }}>{personalInfo.name}</h1>
      <h2 style={{ marginTop: "-15px" }}>{personalInfo.jobTitle}</h2>
      <p style={{ color: "#3e3e3e" }}>
      {personalInfo.location} | <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a> | {personalInfo.portfolio} | {personalInfo.phone}
      </p>
      <hr style={{ color: "#1e5ebe" }} />
      <h4 style={{ color: "#1e5ebe" }}>SUMMARY</h4>
      <hr style={{ color: "#1e5ebe" }} />
      <p>
        {profile}
      </p>
      <hr style={{ color: "#1e5ebe" }} />
      {skills && (
          <>
            <b><h4 style={{ color: '#1e5ebe' }}>TECHNICAL SKILLS</h4></b>
            <hr style={{ color: "#1e5ebe" }} />
            <div className="skills">
          {skills.map((skill, index) => (
            <h6 key={index} className="skill"><b>{skill}</b></h6>
          ))}
        </div>
            <hr />
          </>
        )}
      {workExperience && (
          <>
            <b><h4 style={{ color: '#1e5ebe' }}>PROFESSINAL EXPERIENCE</h4></b>
            <hr style={{ color: "#1e5ebe" }} />
            {workExperience.map((exp, index) => (
              <div key={index}>
                <div className="starting">
                  <div className="starting-left">
                    <b><p className="course">{exp.position} {exp.company}</p></b>
                  </div>
                  <div className="starting-right">
                    <h5 className="right-align">{exp.years}</h5>
                  </div>
                </div>
                <div className="course">
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
            <hr />
          </>
        )}

      {education && (
          <>
            <b><h4 style={{ color: '#1e5ebe' }}>EDUCATION</h4></b>
            {education.map((edu, index) => (
              <div key={index}>
                <div className="starting">
                  <div className="starting-left">
                    <b><p>{edu.degree}</p></b>
                  </div>
                  <div className="starting-right">
                    <h5 className="right-align">{edu.duration}</h5>
                  </div>
                </div>
                <p style={{marginTop:'10px'}}>{edu.institution}</p>
              </div>
            ))}
            <hr />
          </>
        )}

      <h4 style={{ color: "#1e5ebe" }}>CERTIFICATIONS</h4>
      <hr style={{ color: "#1e5ebe" }} />
      {certifications.map((cert, index) => (
        <>
              <div key={index}>
                <p><b>{cert.name} {cert.organization}</b></p>
              </div>
        </>
        ))}
      <hr />
      <h4 style={{ color: "#1e5ebe" }}>ADDITIONAL INFORMATION</h4>
      <hr style={{ color: "#1e5ebe" }} />
      <p>• <b>Languages:</b> {additionalInfo.languages}</p>
      <p>• <b>Awards/Activities:</b> {additionalInfo.awards}</p>
    </div>
  </page>
    </div>
  );
};

export default ResumeTemplateFourth;
