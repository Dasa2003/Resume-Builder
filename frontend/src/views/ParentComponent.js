/*import React, { useState } from 'react';
import Create from './Create'; 
import StepperForm from './StepperForm';
import PersonalInfoStep from './steps/PersonalInfoStep';
import SkillsStep from './steps/SkillsStep';
import EducationStep from './steps/EducationStep';
import WorkExperienceStep from './steps/WorkExperienceStep';
import CertificationsStep from './steps/CertificationsStep';
import ProjectsStep from './steps/ProjectsStep';
import { AccordionSummary } from '@mui/material';

const ParentComponent = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [templateData, setTemplateData] = useState({});

  // Example template data
  const templates = {
    template1: {
      personalInfo: { name: true, jobTitle: true, phone: true, location: true, email: true, linkedin: false, github: false, nationality: true, gender: true, DOB: true, portfolio: true },
      professionalSumary:{summary: true},
      skills: { skill: true },
      education: { degree: true, institution: true, startDate: true, endDate: true, location: true, marks: true },
      workExperience: { position: true, company: true, location: true, years: true, description: true },
      certifications: { name: true, organization: true, year: true },
      projects: { name: true, role: true, description: true, year: true }
    },
    template2: {
      personalInfo: { name: true, jobTitle: true, phone: true, location: true, email: true, linkedin: false, github: false, nationality: true, gender: true, DOB: true, portfolio: true },
      professionalSumary:{summary: true},
      skills: { skill: true },
      education: { degree: true, institution: true, startDate: true, endDate: true, location: true, marks: true },
      workExperience: { position: true, company: true, location: true, years: true, description: true },
      certifications: { name: true, organization: true, year: true },
      projects: { name: true, role: true, description: true, year: true }
    },
    template3: {
      personalInfo: { name: true, jobTitle: true, phone: true, location: true, email: true, linkedin: false, github: false, nationality: true, gender: true, DOB: true, portfolio: true },
      professionalSumary:{summary: true},
      skills: { skill: true },
      education: { degree: true, institution: true, startDate: true, endDate: true, location: true, marks: true },
      workExperience: { position: true, company: true, location: true, years: true, description: true },
      certifications: { name: true, organization: true, year: true },
      projects: { name: true, role: true, description: true, year: true }
    },
    
    
  };

  const handleTemplateSelect = (templateKey) => {
    setSelectedTemplate(templateKey);
    setTemplateData(templates[templateKey]);
  };

  return (
    <div>
      <Create onTemplateSelect={handleTemplateSelect} />

      {selectedTemplate && (
        <StepperForm templateData={templateData}>
          <PersonalInfoStep fields={templateData.personalInfo} />
          <SkillsStep fields={templateData.skills} />
          <EducationStep fields={templateData.education} />
          <WorkExperienceStep fields={templateData.workExperience} />
          <CertificationsStep fields={templateData.certifications} />
          <ProjectsStep fields={templateData.projects} />
        </StepperForm>
      )}
    </div>
  );
};

export default ParentComponent;*/

import React, { useState } from 'react';
import Create from './Create';
import StepperForm from './StepperForm';
import PersonalInfoStep from './steps/PersonalInfoStep';
import SkillsStep from './steps/SkillsStep';
import EducationStep from './steps/EducationStep';
import WorkExperienceStep from './steps/WorkExperienceStep';
import CertificationsStep from './steps/CertificationsStep';
import ProjectsStep from './steps/ProjectsStep';

const ParentComponent = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [templateData, setTemplateData] = useState({});

  // Example template data
  const templates = {
    template1: {
      personalInfo: { name: true, jobTitle: true, phone: true, location: true, email: true, linkedin: false, github: false, nationality: true, gender: true, DOB: true, portfolio: true },
      professionalSummary: { summary: true },
      skills: { skill: true },
      education: { degree: true, institution: true, startDate: true, endDate: true, location: true, marks: true },
      workExperience: { position: true, company: true, location: true, years: true, description: true },
      certifications: { name: true, organization: true, year: true },
      projects: { name: true, role: true, description: true, year: true }
    },
    template2: {
      personalInfo: { name: true, jobTitle: true, phone: true, location: true, email: true, linkedin: false, github: false, nationality: true, gender: true, DOB: true, portfolio: true },
      professionalSummary: { summary: true },
      skills: { skill: true },
      education: { degree: true, institution: true, startDate: true, endDate: true, location: true, marks: true },
      workExperience: { position: true, company: true, location: true, years: true, description: true },
      certifications: { name: true, organization: true, year: true },
      projects: { name: true, role: true, description: true, year: true }
    },
    template3: {
      personalInfo: { name: true, jobTitle: true, phone: true, location: true, email: true, linkedin: false, github: false, nationality: true, gender: true, DOB: true, portfolio: true },
      professionalSummary: { summary: true },
      skills: { skill: true },
      education: { degree: true, institution: true, startDate: true, endDate: true, location: true, marks: true },
      workExperience: { position: true, company: true, location: true, years: true, description: true },
      certifications: { name: true, organization: true, year: true },
      projects: { name: true, role: true, description: true, year: true }
    },
  };


  const templatesArr=[{name:'template1',personalInfo: { name: true, jobTitle: true, phone: true, location: true, email: true, linkedin: false, github: false, nationality: true, gender: true, DOB: true, portfolio: true },
    professionalSummary: { summary: true },
    skills: { skill: true },
    education: { degree: true, institution: true, startDate: true, endDate: true, location: true, marks: true },
    workExperience: { position: true, company: true, location: true, years: true, description: true },
    certifications: { name: true, organization: true, year: true },
    projects: { name: true, role: true, description: true, year: true }}]

  const handleTemplateSelect = (templateKey) => {
    setSelectedTemplate(templateKey);
    setTemplateData(templates[templateKey]);
  };

  return (
    <div>
      {!selectedTemplate ? (
        <Create onTemplateSelect={handleTemplateSelect} />
      ) : (
        <StepperForm templateData={templateData}>
          <PersonalInfoStep fields={templateData.personalInfo} />
          <SkillsStep fields={templateData.skills} />
          <EducationStep fields={templateData.education} />
          <WorkExperienceStep fields={templateData.workExperience} />
          <CertificationsStep fields={templateData.certifications} />
          <ProjectsStep fields={templateData.projects} />
        </StepperForm>
      )}
    </div>
  );
};

export default ParentComponent;


