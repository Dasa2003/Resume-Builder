import React from 'react';

const ResumeTemplateThird = ({ formData }) => {
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
      <title>Template</title>
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
          .navi {
            padding: 0px 20%;
          }
          h5 {
            margin-bottom: -5px;
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
            margin: 20px 0;
          }
        `}
      </style>
      <page size="A4">
        <center>
          {personalInfo && (
            <>
              <h1 style={{ color: '#7c5999' }}>{personalInfo.name}</h1>
              <h2 style={{color:'#7c5999'}}>{personalInfo.jobTitle}</h2>
              <h5>
                {personalInfo.location} • {personalInfo.phone} • <a href={`mailto:${personalInfo.email}`}></a><br />
                {personalInfo.portfolio}
              </h5>
            </>
          )}
        </center>
        <hr />
        {profile && (
          <>
            <b><h4 style={{ color: '#7c5999' }}>SUMMARY</h4></b>
            <p>{profile}</p>
            <hr />
          </>
        )}
        {workExperience && (
          <>
            <b><h4 style={{ color: '#7c5999' }}>WORK EXPERIENCE</h4></b>
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
            <b><h4 style={{ color: '#7c5999' }}>EDUCATION</h4></b>
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
        {skills && (
          <>
            <b><h4 style={{ color: '#7c5999' }}>TECHNICAL SKILLS</h4></b>
            <div className="skills">
          {skills.map((skill, index) => (
            <h6 key={index} className="skill"><b>{skill}</b></h6>
          ))}
        </div>
            <hr />
          </>
        )}
        {certifications && certifications.length > 0 && (
          <>
            <b><h4 style={{ color: '#7c5999' }}>CERTIFICATIONS</h4></b>
            {certifications.map((cert, index) => (
              <p key={index}><b>{cert.name} {cert.organization}</b></p>
            ))}
            <hr />
          </>
        )}
        {additionalInfo && (
          <>
            <b><h4 style={{ color: '#7c5999' }}>ADDITIONAL INFORMATION</h4></b>
            {additionalInfo.languages && (
              <p><b>Languages:</b> {additionalInfo.languages}</p>
            )}
            {additionalInfo.awards && (
              <p style={{ marginTop: '-5px' }}><b>Awards/Activities:</b> {additionalInfo.awards}</p>
            )}
          </>
        )}
      </page>
    </div>
  );
};

export default ResumeTemplateThird;
