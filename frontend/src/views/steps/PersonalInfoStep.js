/*Static field rendering
import React from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const PersonalInfoStep = ({ onFormDataChange, formData }) => {
  const handleChange = (e) => {
    onFormDataChange({ personalInfo: { ...formData, [e.target.name]: e.target.value } });
  };

  const textFieldStyle = {
    margin: '15px 0',
    '& .MuiInputBase-root': {
      height: '45px',
    },
  };

  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontWeight: 'bold', marginBottom: '20px', fontFamily: '"Frank Ruhl Libre", serif' }}
      >
        Tell Us About Yourself
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={formData.name || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={textFieldStyle}
        required
      />
      <TextField
        label="Job Title"
        name="jobTitle"
        value={formData.jobTitle || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={textFieldStyle}
      />
      <TextField
        label="Phone Number"
        name="phone"
        value={formData.phone || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={textFieldStyle}
        required
      />
      <TextField
        label="Location"
        name="location"
        value={formData.location || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={textFieldStyle}
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={textFieldStyle}
        required
      />
      <TextField
        label="LinkedIn"
        name="linkedin"
        value={formData.linkedin || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={textFieldStyle}
      />
      <TextField
        label="GitHub"
        name="github"
        value={formData.github || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={textFieldStyle}
      />
    </Box>
  );
};

export default PersonalInfoStep;*/


import React, { useEffect, useState } from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const PersonalInfoStep = ({ onFormDataChange, formData, template }) => {
  const [visibleFields, setVisibleFields] = useState({});

  useEffect(() => {
    if (template && template.personalInfo) {
      setVisibleFields(template.personalInfo);
    }
  }, [template]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormDataChange({ personalInfo: { ...formData, [name]: value } });
  };

  const textFieldStyle = {
    margin: '15px 0',
    '& .MuiInputBase-root': {
      height: '45px',
    },
  };

  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontWeight: 'bold', marginBottom: '20px', fontFamily: '"Frank Ruhl Libre", serif' }}
      >
        Tell Us About Yourself
      </Typography>
      {visibleFields.name && (
        <TextField
          label="Name"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={textFieldStyle}
          required
        />
      )}
      {visibleFields.jobTitle && (
        <TextField
          label="Job Title"
          name="jobTitle"
          value={formData.jobTitle || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={textFieldStyle}
        />
      )}
      {visibleFields.phone && (
        <TextField
          label="Phone Number"
          name="phone"
          value={formData.phone || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={textFieldStyle}
          required
        />
      )}
      {visibleFields.location && (
        <TextField
          label="Location"
          name="location"
          value={formData.location || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={textFieldStyle}
        />
      )}
      {visibleFields.email && (
        <TextField
          label="Email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={textFieldStyle}
          required
        />
      )}
      {visibleFields.linkedin && (
        <TextField
          label="LinkedIn"
          name="linkedin"
          value={formData.linkedin || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={textFieldStyle}
        />
      )}
      {visibleFields.github && (
        <TextField
          label="GitHub"
          name="github"
          value={formData.github || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={textFieldStyle}
        />
      )}
      {visibleFields.nationality && (
        <TextField
          label="Nationality"
          name="nationality"
          value={formData.nationality || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={textFieldStyle}
        />
      )}
      {visibleFields.gender && (
        <TextField
          label="Gender"
          name="gender"
          value={formData.gender || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={textFieldStyle}
        />
      )}
      {visibleFields.DOB && (
        <TextField
          label="Date of Birth"
          name="DOB"
          value={formData.DOB || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={textFieldStyle}
        />
      )}
      {visibleFields.portfolio && (
        <TextField
          label="Portfolio"
          name="portfolio"
          value={formData.portfolio || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={textFieldStyle}
        />
      )}
    </Box>
  );
};

export default PersonalInfoStep;





