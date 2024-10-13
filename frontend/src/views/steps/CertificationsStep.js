/*Static field rendering
import React, { useState } from 'react';
//import { TextField, Button, Box } from '@material-ui/core';
import { TextField, Button, Box, Typography } from '@mui/material';

const CertificationsStep = ({ onFormDataChange, formData }) => {
  const [certification, setCertification] = useState({ name: '', organization: '' });

  const handleAddCertification = () => {
    if (certification.name.trim() !== '' && certification.organization.trim() !== '') {
      onFormDataChange({ certifications: [...formData, certification] });
      setCertification({ name: '', organization: '' });
    }
  };

  const handleChange = (e) => {
    setCertification({ ...certification, [e.target.name]: e.target.value });
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
          Your Certifications Will Help You To Stand Out
        </Typography>
      <TextField
        label="Certification Name"
        name="name"
        value={certification.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={Style}
      />
      <TextField
        label="Organization"
        name="organization"
        value={certification.organization}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={Style}
      />
      <Button onClick={handleAddCertification} variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold">
        Add Certification
      </Button>
      <Box mt={2}>
        {formData.map((cert, index) => (
          <div key={index}>
            <strong>{cert.name}</strong> from {cert.organization}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default CertificationsStep;*/

import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const CertificationsStep = ({ onFormDataChange, formData, template }) => {
  const [certification, setCertification] = useState({
    name: '',
    organization: '',
    year: '',
  });
  const [visibleFields, setVisibleFields] = useState({});

  useEffect(() => {
    if (template && template.certifications) {
      // Update visible fields based on the selected template
      setVisibleFields(template.certifications);
    }
  }, [template]);

  const handleAddCertification = () => {
    if (certification.name.trim() !== '' && certification.organization.trim() !== '') {
      onFormDataChange({ certifications: [...formData, certification] });
      setCertification({ name: '', organization: '', year: '' });
    }
  };

  const handleChange = (e) => {
    setCertification({ ...certification, [e.target.name]: e.target.value });
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
        Your Certifications Will Help You To Stand Out
      </Typography>
      {visibleFields.name && (
        <TextField
          label="Certification Name"
          name="name"
          value={certification.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={Style}
        />
      )}
      {visibleFields.organization && (
        <TextField
          label="Organization"
          name="organization"
          value={certification.organization}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={Style}
        />
      )}
      {visibleFields.year && (
        <TextField
          label="Year"
          name="year"
          value={certification.year}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={Style}
        />
      )}
      <Button onClick={handleAddCertification} variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold">
        Add Certification
      </Button>
      <Box mt={2}>
        {formData.map((cert, index) => (
          cert.name && (
            <div key={index}>
            <strong>{cert.name}</strong> from {cert.organization} ({cert.year})
          </div>
          )
        ))}
      </Box>
    </Box>
  );
};

export default CertificationsStep;
