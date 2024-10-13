/*Static field rendering
import React, { useState } from 'react';
//import { TextField, Button, Box } from '@material-ui/core';
import { TextField, Button, Box, Typography } from '@mui/material';

const WorkExperienceStep = ({ onFormDataChange, formData }) => {
  const [experience, setExperience] = useState({ position: '', company: '', location: '', years: '' });

  const handleAddExperience = () => {
    if (experience.position.trim() !== '' && experience.company.trim() !== '') {
      onFormDataChange({ workExperience: [...formData, experience] });
      setExperience({ position: '', company: '', location: '', years: '' });
    }
  };

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const Style = {
    margin: '15px 0',
    '& .MuiInputBase-root': {
      height: '45px'
    }
  };

  return (
    <Box>
        <Typography
          variant="h4"
          gutterBottom
          style={{ fontWeight: 'bold', marginBottom: '20px', fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          Your Work Experience Will Give You Advantage
        </Typography>
      <TextField
        label="Position"
        name="position"
        value={experience.position}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={Style}
      />
      <TextField
        label="Company"
        name="company"
        value={experience.company}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={Style}
      />
      <TextField
        label="Location"
        name="location"
        value={experience.location}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={Style}
      />
      <TextField
        label="Duration"
        name="years"
        value={experience.years}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={Style}
      />
      <Button onClick={handleAddExperience} variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold">
        Add Experience
      </Button>
      <Box mt={2}>
        {formData.map((exp, index) => (
          <div key={index}>
            <strong>{exp.position}</strong> at {exp.company} in {exp.location} ({exp.years})
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default WorkExperienceStep;*/

import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const WorkExperienceStep = ({ onFormDataChange, formData, template }) => {
  const [experience, setExperience] = useState({
    position: '',
    company: '',
    location: '',
    years: '',
    description: '',
  });
  const [visibleFields, setVisibleFields] = useState({});
  useEffect(() => {
    if (template && template.workExperience) {
      // Update visible fields based on the selected template
      setVisibleFields(template.workExperience);
    }
  }, [template]);

  const handleAddExperience = () => {
    if (experience.position.trim() !== '' && experience.company.trim() !== '') {
      onFormDataChange({ workExperience: [...formData, experience] });
      setExperience({ position: '', company: '', location: '', years: '', description: '' });
    }
  };

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const Style = {
    margin: '15px 0',
    '& .MuiInputBase-root': {
      height: '45px'
    }
  };

  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontWeight: 'bold', marginBottom: '20px', fontFamily: '"Frank Ruhl Libre", serif' }}
      >
        Your Work Experience Will Give You Advantage
      </Typography>
      {visibleFields.position && (
        <TextField
        label="Position"
        name="position"
        value={experience.position}
        onChange={handleChange}
        fullWidth 
        margin="normal"
        sx={Style}
      />
      )}
      {visibleFields.company &&(
        <TextField
        label="Company"
        name="company"
        value={experience.company}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={Style}
      />
      )}
      {visibleFields.location && (
        <TextField
        label="Location"
        name="location"
        value={experience.location}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={Style}
      />
      )}
      {visibleFields.years && (
        <TextField
        label="Duration"
        name="years"
        value={experience.years}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={Style}
      />
      )}
      {visibleFields.description && (
        <TextField
        label="Description"
        name="description"
        value={experience.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={Style}
      />
      )}
      <Button onClick={handleAddExperience} variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold">
        Add Experience
      </Button>
      <Box mt={2}>
        {formData.map((exp, index) => (
          exp.position && exp.company && (
            <div key={index}>
            <strong>{exp.position}</strong> at {exp.company} in {exp.location} ({exp.years})
            <p>{exp.description}</p>
          </div>
          )
        ))}
      </Box>
    </Box>
  );
};

export default WorkExperienceStep;
