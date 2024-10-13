/*Static field rendering
import React, { useState } from 'react';
//import { TextField, Button, Box } from '@material-ui/core';
import { TextField, Button,Box, Typography } from '@mui/material';

const EducationStep = ({ onFormDataChange, formData }) => {
  const [education, setEducation] = useState({ degree: '', institution: '' });

  const handleAddEducation = () => {
    if (education.degree.trim() !== '' && education.institution.trim() !== '') {
      onFormDataChange({ education: [...formData, education] });
      setEducation({ degree: '', institution: '' });
    }
  };

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
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
          Your Educational Qualifications Are Your Entry To Most Jobs
        </Typography>
      <TextField
        label="Degree"
        name="degree"
        value={education.degree}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={Style}
      />
      <TextField
        label="Institution"
        name="institution"
        value={education.institution}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={Style}
      />
      <Button onClick={handleAddEducation} variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold">
        Add Education
      </Button>
      <Box mt={2}>
        {formData.map((edu, index) => (
          <div key={index}>
            <strong>{edu.degree}</strong> - {edu.institution}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default EducationStep;*/

import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const EducationStep = ({ onFormDataChange, formData, template }) => {
  const [education, setEducation] = useState({ degree: '', institution: '', duration: '', location: '', marks: '' });
  const [visibleFields, setVisibleFields] = useState({});

  useEffect(() => {
    if (template && template.education) {
      // Update visible fields based on the selected template
      setVisibleFields(template.education);
    }
  }, [template]);

  const handleAddEducation = () => {
    if (education.degree.trim() !== '' && education.institution.trim() !== '') {
      onFormDataChange({ education: [...formData, education] });
      setEducation({ degree: '', institution: '', duration: '', location: '', marks: '' });
    }
  };

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
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
        Your Educational Qualifications Are Your Entry To Most Jobs
      </Typography>
      {visibleFields.degree && (
        <TextField
          label="Degree"
          name="degree"
          value={education.degree}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={Style}
        />
      )}
      {visibleFields.institution && (
        <TextField
          label="Institution"
          name="institution"
          value={education.institution}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={Style}
        />
      )}
      {visibleFields.duration && (
        <TextField
          label="Duration"
          name="duration"
          value={education.duration}
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
          value={education.location}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={Style}
        />
      )}
      {visibleFields.marks && (
        <TextField
          label="Marks"
          name="marks"
          value={education.marks}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={Style}
        />
      )}
      <Button onClick={handleAddEducation} variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold">
        Add Education
      </Button>
      <Box mt={2}>
      {formData.map((edu, index) => (
          edu.degree && edu.institution && ( 
            <div key={index}>
              <strong>{edu.degree}</strong> - {edu.institution}
            </div>
          )
        ))}
      </Box>
    </Box>
  );
};

export default EducationStep;
