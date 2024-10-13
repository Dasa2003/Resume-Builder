/* This code is for single template and the code which is below this is for multiple templates for dynamic rendering of fields
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import Navbar from './Navbar';
import { Stepper, Step, Typography, StepLabel, Box, Container, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonalInfoStep from './steps/PersonalInfoStep';
import ProfileStep from './steps/ProfileStep';
import SkillsStep from './steps/SkillsStep';
import EducationStep from './steps/EducationStep';
import WorkExperienceStep from './steps/WorkExperienceStep';
import CertificationsStep from './steps/CertificationsStep';
import ProjectsStep from './steps/ProjectsStep';
import ResumeTemplate from './ResumeTemplate';

const steps = [
  'Personal Information',
  'Professional Summary',
  'Technical Skills',
  'Education',
  'Work Experience',
  'Certifications',
  'Key Projects',
];

const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: {},
    profile: '',
    skills: [],
    education: [],
    workExperience: [],
    certifications: [],
    projects: [],
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [dismissPreview, setDismissPreview] = useState(false);

  const { user, authTokens } = useContext(AuthContext);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async () => {
    try {
      const { personalInfo, profile, skills, education, workExperience, certifications, projects } = formData;

      const resumeData = {
        name: personalInfo.name || '',
        job_title: personalInfo.jobTitle || '',
        phone: personalInfo.phone || '',
        location: personalInfo.location || '',
        email: personalInfo.email || '',
        user: user ? user.id : '',
        profile: profile || '',
        skills: skills || [],
        education: education.map(edu => ({
          degree: edu.degree || '',
          institution: edu.institution || ''
        })),
        work_experience: workExperience.map(exp => ({
          position: exp.position || '',
          company: exp.company || '',
          location: exp.location || '',
          years: exp.years || ''
        })),
        certifications: certifications.map(cert => ({
          name: cert.name || '',
          organization: cert.organization || ''
        })),
        projects: projects.map(proj => ({
          name: proj.name || '',
          role: proj.role || '',
          description: proj.description || ''
        }))
      };

      console.log('Sending resumeData:', resumeData);

      // Send resumeData to store in database and as blob
      await axios.post('/api/resume/create/', resumeData, {
        headers: {
          'Authorization': `Bearer ${authTokens.access}`
        }
      });

      // Create FormData object for blob storage
      const formDataBlob = new FormData();
      formDataBlob.append('resumeData', JSON.stringify(resumeData));

      // Example of sending FormData with axios for blob storage
      // Replace '/api/store/blob' with the backend endpoint for blob storage
      await axios.post('/api/store/blob', formDataBlob, {
        headers: {
          'Authorization': `Bearer ${authTokens.access}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error creating resume:', error);
      if (error.response) {
        console.log('Error response:', error.response.data);
      }
    }
  };

  const handleFormDataChange = (stepData) => {
    setFormData({ ...formData, ...stepData });
  };

  const handlePreview = () => {
    setIsPreviewing(true);
    setDismissPreview(false);
  };

  const handleDismissPreview = () => {
    setIsPreviewing(false);
    setDismissPreview(true);
  };

  const handleClickAnywhere = () => {
    if (isPreviewing) {
      handleDismissPreview();
    }
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        //return <PersonalInfoStep onFormDataChange={handleFormDataChange} formData={formData.personalInfo} />;
      case 1:
        return <ProfileStep onFormDataChange={handleFormDataChange} formData={formData.profile} />;
      case 2:
        return <SkillsStep onFormDataChange={handleFormDataChange} formData={formData.skills} />;
      case 3:
        return <EducationStep onFormDataChange={handleFormDataChange} formData={formData.education} />;
      case 4:
        return <WorkExperienceStep onFormDataChange={handleFormDataChange} formData={formData.workExperience} />;
      case 5:
        return <CertificationsStep onFormDataChange={handleFormDataChange} formData={formData.certifications} />;
      case 6:
        return <ProjectsStep onFormDataChange={handleFormDataChange} formData={formData.projects} />;
      default:
        return 'Unknown stepIndex';
    }
  };

  return (
    <>
      <Navbar />
      <div>
      <Container style={{ marginTop: '100px', display: 'flex', marginLeft:'295px', marginBottom:'10px' }} onClick={handleClickAnywhere}>
        <div style={{ width: '20%', height: '100vh', marginRight: '40px', position:'fixed', marginTop: '-44px', backgroundColor: '#41464b', padding: '20px', borderRadius: '8px', left:'0', marginBottom:'30px' }}>
          <img 
            src="/download.jpg" 
            alt="Stepper Image" 
            style={{ width: '100%', height: '170px', marginBottom: '10px', borderRadius: '8px' }} 
          />
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel 
  sx={{
    '& .MuiStepLabel-label': { 
      color: activeStep === index ? '#f7971d !important' : '#fff' 
    },
    '& .MuiStepIcon-root': { 
      color: activeStep === index ? '#f7971d !important' : '#fff'
    },
    '& .MuiStepIcon-root.Mui-completed': {  
      color: '#4caf50' 
    },
    '& .MuiStepIcon-text': {
      fill: activeStep === index ? '#fff' : '#000'
    },
    '& .MuiStepIcon-root .MuiStepIcon-text': {
      color: activeStep === index ? '#fff' : '#000' 
    }
  }}
>
  {label}
</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div style={{ width: '80%' }}>
          {activeStep === steps.length ? (
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', marginBottom: '20px', fontFamily: '"Frank Ruhl Libre", serif', marginTop:"50px" }}>
                All Steps Completed, Your Resume Is Ready!
              </Typography>
              <div style={{ display: 'flex', marginBottom: '20px', marginTop:"10px" }}>
                <Button variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold" onClick={handlePreview} style={{ marginRight: '10px' }}>
                  Preview
                </Button>
                <Button variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold" onClick={handleSubmit}>
                  Submit
                </Button>
                <Button component={Link} to="/homepage" variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold" onClick={handleSubmit}>
                  Go Back To Homepage
                </Button>
              </div>
              {isSubmitted && !dismissPreview && !isPreviewing && <ResumeTemplate formData={formData} />}
              {isPreviewing && <ResumeTemplate formData={formData} />}
            </Box>
          ) : (
            <div>
              <Box p={2}>
                {activeStep !== 0 && (
                  <Box display="flex" alignItems="center" mb={2} style={{ cursor: 'pointer' }} onClick={handleBack}>
                    <ArrowBackIcon />
                    <Typography variant="body1" style={{ marginLeft: '8px' }}>
                      Back
                    </Typography>
                  </Box>
                )}
                {getStepContent(activeStep)}
              </Box>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                <Button variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
      </div>
    </>
  );
};

export default StepperForm;*/


import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import Navbar from './Navbar';
import { Stepper, Step, Typography, StepLabel, Box, Container, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonalInfoStep from './steps/PersonalInfoStep';
import ProfileStep from './steps/ProfileStep';
import SkillsStep from './steps/SkillsStep';
import EducationStep from './steps/EducationStep';
import WorkExperienceStep from './steps/WorkExperienceStep';
import CertificationsStep from './steps/CertificationsStep';
import ProjectsStep from './steps/ProjectsStep';
import AdditionalInfoStep from './steps/AdditionalInfoStep';
import ResumeTemplate from './ResumeTemplate';
import ResumeTemplateSecond from './ResumeTemplateSecond'
import ResumeTemplateThird from './ResumeTemplateThird';
import ResumeTemplateFourth from './ResumeTemplateFourth';


const StepperForm = () => {
  const location = useLocation();
  //const template = location.state?.template || {};
  const { template } = location.state || {};
  const steps = template.steps;
  const templatename=template.name;
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: { name: '', jobTitle: '', phone: '', location: '', email: '', linkedin: '', github: '', nationality: '', gender: '', DOB: '', portfolio: '' },
    profile: '',
    skills: [],
    education: [{ degree: '', institution: '', duration: '', location: '', marks: '' }],
    workExperience: [{ position: '', company: '', location: '', years: '', description: '' }],
    certifications: [{ name: '', organization: '', year: '' }],
    projects: [{ name: '', role: '', description: '', year: '' }],
    additionalInfo: [{ languages: '', awards: '' }]
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [dismissPreview, setDismissPreview] = useState(false);

  const { user, authTokens } = useContext(AuthContext);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async () => {
    try {
      const { personalInfo, profile, skills, education, workExperience, certifications, projects,additionalInfo  } = formData;

      const resumeData = {
        name: personalInfo.name || '',
        job_title: personalInfo.jobTitle || '',
        phone: personalInfo.phone || '',
        location: personalInfo.location || '',
        email: personalInfo.email || '',
        linkedin: personalInfo.linkedin || '',
        github: personalInfo.github || '',
        nationality: personalInfo.nationality || '',
        gender: personalInfo.gender || '',
        DOB: personalInfo.DOB || '',
        portfolio: personalInfo.portfolio || '',
        user: user ? user.id : '',
        profile: profile || '',
        skills: skills || [],
        education: education.map(edu => ({
          degree: edu.degree || '',
          institution: edu.institution || '',
          duration: edu.duration || '',
          location: edu.location || '',
          marks: edu.marks || ''
        })),
        work_experience: workExperience.map(exp => ({
          position: exp.position || '',
          company: exp.company || '',
          location: exp.location || '',
          years: exp.years || '',
          description: exp.description || ''
        })),
        certifications: certifications.map(cert => ({
          name: cert.name || '',
          organization: cert.organization || '',
          year: cert.year || ''
        })),
        projects: projects.map(proj => ({
          name: proj.name || '',
          role: proj.role || '',
          description: proj.description || '',
          year: proj.year || ''
        })),
        additional_info: {
          languages: additionalInfo.languages || '',
          awards: additionalInfo.awards || ''
        }
      };

      console.log('Sending resumeData:', resumeData);

      // Send resumeData to store in database and as blob
      await axios.post('/api/resume/create/', resumeData, {
        headers: {
          'Authorization': `Bearer ${authTokens.access}`
        }
      });
      /*
      // Create FormData object for blob storage
      const formDataBlob = new FormData();
      formDataBlob.append('resumeData', JSON.stringify(resumeData));

      // Example of sending FormData with axios for blob storage
      // Replace '/api/store/blob' with your backend endpoint for blob storage
      await axios.post('/api/store/blob', formDataBlob, {
        headers: {
          'Authorization': `Bearer ${authTokens.access}`,
          'Content-Type': 'multipart/form-data'
        }
      }); 
      */
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error creating resume:', error);
      if (error.response) {
        console.log('Error response:', error.response.data);
      }
    }
  };

  const handleFormDataChange = (stepData) => {
    setFormData({ ...formData, ...stepData });
  };

  const handlePreview = () => {
    setIsPreviewing(true);
    setDismissPreview(false);
  };

  const handleDismissPreview = () => {
    setIsPreviewing(false);
    setDismissPreview(true);
  };

  const handleClickAnywhere = () => {
    if (isPreviewing) {
      handleDismissPreview();
    }
  };

  const getStepContent = (stepIndex) => {
    switch (steps[stepIndex]) {
      case 'Personal Information':
        return <PersonalInfoStep onFormDataChange={handleFormDataChange} formData={formData.personalInfo} template={template} />;
      case 'Professional Summary':
        return <ProfileStep onFormDataChange={handleFormDataChange} formData={formData.profile} template={template} />;
      case 'Technical Skills':
        return <SkillsStep onFormDataChange={handleFormDataChange} formData={formData.skills} template={template} />;
      case 'Education':
        return <EducationStep onFormDataChange={handleFormDataChange} formData={formData.education} template={template} />;
      case 'Work Experience':
        return <WorkExperienceStep onFormDataChange={handleFormDataChange} formData={formData.workExperience} template={template} />;
      case 'Certifications':
        return <CertificationsStep onFormDataChange={handleFormDataChange} formData={formData.certifications} template={template} />;
      case 'Key Projects':
        return <ProjectsStep onFormDataChange={handleFormDataChange} formData={formData.projects} template={template} />;
        case 'Additional Information':
          return <AdditionalInfoStep onFormDataChange={handleFormDataChange} formData={formData.additionalInfo} template={template} />;    
        default:
        return 'Unknown stepIndex';
    }
  };

  return (
    <>
      <Navbar />
      <div>
      <Container style={{ marginTop: '100px', display: 'flex', marginLeft:'295px', marginBottom:'10px' }} onClick={handleClickAnywhere}>
        <div style={{ width: '20%', height: '100vh', marginRight: '40px', position:'fixed', marginTop: '-44px', backgroundColor: '#41464b', padding: '20px', borderRadius: '8px', left:'0', marginBottom:'30px' }}>
          <img 
            src="/download.jpg" 
            alt="Stepper Image" 
            style={{ width: '100%', height: '170px', marginBottom: '10px', borderRadius: '8px' }} 
          />
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel 
  sx={{
    '& .MuiStepLabel-label': { 
      color: activeStep === index ? '#f7971d !important' : '#fff' 
    },
    '& .MuiStepIcon-root': { 
      color: activeStep === index ? '#f7971d !important' : '#fff'
    },
    '& .MuiStepIcon-root.Mui-completed': {  
      color: '#4caf50' 
    },
    '& .MuiStepIcon-text': {
      fill: activeStep === index ? '#fff' : '#000'
    },
    '& .MuiStepIcon-root .MuiStepIcon-text': {
      color: activeStep === index ? '#fff' : '#000' 
    }
  }}
>
  {label}
</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div style={{ width: '80%' }}>
          {activeStep === steps.length ? (
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', marginBottom: '20px', fontFamily: '"Frank Ruhl Libre", serif', marginTop:"50px" }}>
                All Steps Completed, Your Resume Is Ready!
              </Typography>
              <div style={{ display: 'flex', marginBottom: '20px', marginTop:"10px" }}>
                <Button variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold" onClick={handlePreview} style={{ marginRight: '10px' }}>
                  Preview
                </Button>
                <Button variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold" onClick={handleSubmit}>
                  Submit
                </Button>
                <Button component={Link} to="/homepage" variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold" onClick={handleSubmit}>
                  Go Back To Homepage
                </Button>
              </div>
              {isSubmitted && !dismissPreview && !isPreviewing &&  (
                <>
                {templatename === 'Template 1' && <ResumeTemplate formData={formData} />}
                {templatename === 'Template 2' && <ResumeTemplateSecond formData={formData} />}
                {templatename === 'Template 3' && <ResumeTemplateThird formData={formData} />}
                {templatename === 'Template 4' && <ResumeTemplateFourth formData={formData} />}
                </>
              )}
              {isPreviewing && (
                <>
                {templatename === 'Template 1' && <ResumeTemplate formData={formData} />}
                {templatename === 'Template 2' && <ResumeTemplateSecond formData={formData} />}
                {templatename === 'Template 3' && <ResumeTemplateThird formData={formData} />}
                {templatename === 'Template 4' && <ResumeTemplateFourth formData={formData} />}
                </>
              )}
            </Box>
          ) : (
            <div>
              <Box p={2}>
                {activeStep !== 0 && (
                  <Box display="flex" alignItems="center" mb={2} style={{ cursor: 'pointer' }} onClick={handleBack}>
                    <ArrowBackIcon />
                    <Typography variant="body1" style={{ marginLeft: '8px' }}>
                      Back
                    </Typography>
                  </Box>
                )}
                {getStepContent(activeStep)}
              </Box>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                <Button variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
      </div>
    </>
  );
};

export default StepperForm;



