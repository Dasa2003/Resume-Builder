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
      <title>Template3</title>
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
          }
          .skills {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(6, 1fr);
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
          .starting-skills {
            display: flex;
            height: 70px;
            flex-direction: row;
            justify-content: space-around;
            margin-left: -60px;
          }
          page[size="A4"] {
            width: 21cm;
            height: 29.7cm;
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
              <h5>
                {personalInfo.location} • {personalInfo.phone} • {personalInfo.email}<br />
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
              <div className="starting" key={index}>
                <div className="starting-left">
                  <b><p className="course">{exp.position}, {exp.company}</p></b>
                </div>
                <div className="starting-right">
                  <h4 className="right-align">{exp.years}</h4>
                </div>
                <div className="course">
                  <p>{exp.description.map((resp, i) => <React.Fragment key={i}><p>{resp}</p><br /></React.Fragment>)}</p>
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
              <div className="starting" key={index}>
                <div className="starting-left">
                  <b><p>{edu.degree}</p></b>
                </div>
                <div className="starting-right">
                  <h4 className="right-align">{edu.duration}</h4>
                </div>
                <p>{edu.institution}</p>

              </div>
            ))}
            <hr />
          </>
        )}
        {skills && (
          <>
            <b><h4 style={{ color: '#7c5999' }}>TECHNICAL SKILLS</h4></b>
            <div className="starting-skills">
              {skills.map((skill, index) => (
                <div key={index}>
                  <h4 className={index % 3 === 0 ? 'starting-left' : index % 3 === 1 ? 'starting-center' : 'starting-right'}>
                    {skill}
                  </h4>
                </div>
              ))}
            </div>
            <hr />
          </>
        )}
        {certifications && (
          <>
            <b><h4 style={{ color: '#7c5999' }}>CERTIFICATIONS</h4></b>
            {certifications.map((cert, index) => (
              <p key={index}><b>{cert.name}</b></p>
            ))}
            <hr />
          </>
        )}
        {additionalInfo && (
          <>
            <b><h4 style={{ color: '#7c5999' }}>ADDITIONAL INFORMATION</h4></b>
            <p><b>Languages:</b> {additionalInfo.languages}</p>
            <p><b>Awards/Activities:</b> {additionalInfo.awards}</p>
          </>
        )}
      </page>
    </div>
  );
};

export default ResumeTemplateThird;
