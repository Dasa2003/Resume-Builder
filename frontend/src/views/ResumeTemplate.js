import React from 'react';

const ResumeTemplate = ({ formData }) => {
  const {
    personalInfo,
    profile,
    skills,
    education,
    workExperience,
    certifications,
    projects,
  } = formData;

  return (
    <div>
      <title>Template1</title>
      <style>
        {`
          h3 {
            display: block;
            font-size: 1.17em;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-weight: bold;
            unicode-bidi: isolate;
          }
          h2 {
            display: block;
            font-size: 1.5em;
            margin-block-start: 0.83em;
            margin-block-end: 0.83em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-weight: bold;
            unicode-bidi: isolate;
          }
          h4 {
            display: block;
            font-size: 1em;
            margin-block-start: 1.33em;
            margin-block-end: 1.33em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-weight: bold;
            unicode-bidi: isolate;
          }
          .starting {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .right-align {
            text-align: right;
          }
          body {
            padding: 0px 5%;
          }
          .skills {
            display: grid;
            gap: 30px;
            grid-template-columns: repeat(6, 1fr);
          }
          .skill {
            border-right: 1px solid orange;
            text-align: center;
          }
          .skill:nth-child(6n) {
            border-right: none;
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
            border-top: 2px solid #16365f;
            margin: 20px 0;
          }
        `}
      </style>
      <page size="A4" style={{ width: '100%',marginTop: '15px' }}>
        <div className="starting">
          <div className="starting-left">
            <h1 style={{ color: '#16365f' }}>{personalInfo.name}</h1>
            <h4 style={{ color: '#d4731b' }}>{personalInfo.jobTitle}</h4>
          </div>
          <div className="starting-right">
            <h5 className="right-align" style={{ color: '#999999' }}>{personalInfo.phone}</h5>
            <h5 className="right-align" style={{ color: '#999999' }}>{personalInfo.location}</h5>
            <h5 className="right-align">
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </h5>
          </div>
        </div>
        <hr />
        <h2 style={{ color: '#16365f' }}>PROFESSIONAL PROFILE</h2>
        <p style={{ color: '#999999' }}>{profile}</p>
        <hr />
        <h2 style={{ color: '#16365f' }}>TECH SKILLS</h2>
        <div className="skills">
          {skills.map((skill, index) => (
            <p key={index} className="skill" style={{ color: '#7f7f7f' }}>{skill}</p>
          ))}
        </div>
        <hr />
        <div className="starting">
          <div className="starting-left">
            <h2 style={{ color: '#16365f' }}>EDUCATION</h2>
            {education.map((edu, index) => (
              <div key={index}>
                <h3 style={{ color: '#d4731b' }}>{edu.degree}</h3>
                <h4 style={{ color: '#7f7f7f' }}>{edu.institution}</h4>
              </div>
            ))}
            <h2 style={{ color: '#16365f' }}>WORK EXPERIENCE</h2>
            {workExperience.map((exp, index) => (
              <div key={index}>
                <h3 style={{ color: '#16365f' }}>{exp.position}</h3>
                <h4 style={{ color: '#d4731b' }}>{exp.company} {exp.location} {exp.years}</h4>
              </div>
            ))}
          </div>
          <div className="starting-right">
            <h2 className="right-align" style={{ color: '#16365f' }}>CERTIFICATIONS/ TRAINING</h2>
            {certifications.map((cert, index) => (
              <div key={index} className="right-align">
                <p style={{ color: '#999999' }}>{cert.name}</p>
                <p style={{ color: '#d4731b' }}>{cert.organization}</p>
              </div>
            ))}
          </div>
        </div>
        <h2 style={{ color: '#16365f' }}>KEY PROJECTS</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <h3 style={{ color: '#999999' }}>{project.name}</h3>
            <h4 style={{ color: '#d4731b' }}>{project.role}</h4>
            <h4 style={{ color: '#d4731b' }}>{project.year}</h4>
            <p style={{ color: '#999999' }}>{project.description}</p>
          </div>
        ))}
      </page>
    </div>
  );
};

export default ResumeTemplate;
