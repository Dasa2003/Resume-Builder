import React from 'react';
//import { TextField, Box } from '@material-ui/core';
import { TextField, Box, Typography } from '@mui/material';

const ProfileStep = ({ onFormDataChange, formData }) => {
  const handleChange = (e) => {
    onFormDataChange({ profile: e.target.value });
  };

  return (
    <Box>
          <Typography
          variant="h4"
          gutterBottom
          style={{ fontWeight: 'bold', marginBottom: '20px', fontFamily: '"Frank Ruhl Libre", serif' }}
        >
          Your Professional Description Will Add Value To The Resume
        </Typography>
      <TextField
        label="Professional Summary"
        name="profile"
        value={formData || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
    </Box>
  );
};

export default ProfileStep;
