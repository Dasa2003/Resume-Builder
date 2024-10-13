import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';

const ResumeTemplateSecond = ({ formData }) => {
  const {
    personalInfo,
    profile,
    education,
    workExperience,
    skills,
  } = formData;

  return (
    <div>
      <title>Template 2</title>
      <style>
        {`
          .right-align {
            text-align: right;
          }

          .starting {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 30px;
          }

          .skills {
            display: grid;
            gap: 30px;
            grid-template-columns: repeat(6, 1fr);
          }

          .skill:nth-child(6n) {
            border-right: none;
          }

          h5 {
            margin-left: 1px;
          }
          .starting-left {
            width: 200px;
          }
          .starting-right{
            display: flex;
            flex-direction: column;
          }
          .starting-right-p{
            display: flex;
            flex-direction: column;
            padding-left:70%
          }
          p.pr{

            margin-bottom: 3px;
            margin-left: -200px;
          }
          .starting-right h5{
            margin: 0;
          }
          .starting-left p{
            margin: 0;
          }
          .skill-head {
            width: 200px;
          }
          .skills-left, .skills-right{
            margin-Top: 50px;
            width: 300px;
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
        `}
      </style>
      <page size="A4">
        <div className="starting">
          <div className="starting-left">
            <h1 style={{ color: '#333333' }}>{personalInfo.name}</h1>
            <h3 style={{ color: '#858585' }}>{personalInfo.jobTitle}</h3>
          </div>
          <div className="starting-right-p">
            <p className="pr" style={{ color: '#858585' }}><PhoneIcon className="icon-small me-1"/>{personalInfo.phone}</p>
            <p className="pr" style={{ color: '#858585' }}><EmailIcon className="icon-small me-1"/>{personalInfo.email}</p>
            <p className="pr" style={{ color: '#858585' }}><LocationOnIcon className="icon-small me-1"/>{personalInfo.location}</p>
            <p className="pr" style={{ color: '#858585' }}><LanguageIcon className="icon-small me-1"/>{personalInfo.portfolio}</p>
          </div>
        </div>
        <h2 style={{backgroundColor: '#efefef', color:'#333333'}}>PROFESSIONAL SUMMARY</h2>
        <p style={{color:'#858585'}}>{profile}</p>
        <h2 style={{ backgroundColor: '#efefef', color: '#333333' }}>WORK EXPERIENCE</h2>
        {workExperience.map((exp, index) => (
          <div className="starting" key={index}>
            <div className="starting-left">
              <p style={{ color: '#858585' }}>{exp.company}<br />{exp.years}</p>
            </div>
            <div className="starting-right">
              <h5 style={{ color: '#333333' }}>{exp.position}</h5>
              <p style={{ color: '#858585' }}>{exp.description}</p>
            </div>
          </div>
        ))}
        <h2 style={{ backgroundColor: '#efefef', color: '#333333' }}>EDUCATION</h2>
        {education.map((edu, index) => (
          <div className="starting" key={index}>
            <div className="starting-left">
              <p style={{ color: '#858585' }}>{edu.institution}<br />{edu.duration}</p>
            </div>
            <div className="starting-right">
              <h5 style={{ color: '#333333' }}>{edu.degree}</h5>
            </div>
          </div>
        ))}
        <div className="starting">
          <h2 className="skill-head" style={{ backgroundColor: '#efefef', color: '#333333'}}>SKILL</h2>
          <div className="skills-left">
            {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
              <p style={{ color: '#858585' }} key={index}>{skill}</p>
            ))}
          </div>
          <div className="skills-right">
            {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
              <p style={{ color: '#858585' }} key={index}>{skill}</p>
            ))}
          </div>
        </div>
      </page>
    </div>
  );
};

export default ResumeTemplateSecond;
