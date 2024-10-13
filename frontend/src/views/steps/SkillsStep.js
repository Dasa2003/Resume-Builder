import React, { useState } from 'react';
import { Autocomplete, Button, Box, Typography, TextField, Chip } from '@mui/material';

const SkillsStep = ({ onFormDataChange, formData }) => {
  const [skill, setSkill] = useState('');

  const handleAddSkill = () => {
    if (skill.trim() !== '') {
      onFormDataChange({ skills: [...formData, skill] });
      setSkill('');
    }
  };

  const handleSkillChange = (event, value) => {
    if (value && !formData.includes(value)) {
      onFormDataChange({ skills: [...formData, value] });
    }
    setSkill('');
  };

  const handleDeleteSkill = (skillToDelete) => {
    onFormDataChange({ skills: formData.filter(skill => skill !== skillToDelete) });
  };

  const skillOptions = [
    'JavaScript', 'React', 'Python', 'Django', 'Java', 'C', 'C++', 'C#', 'Ruby', 'HTML', 'CSS',
    'Node.js', 'Express', 'MongoDB', 'SQL', 'NoSQL', 'GraphQL', 'TypeScript', 'Redux', 'Vue.js', 
    'Angular', 'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'Machine Learning',
    'Data Science', 'DevOps', 'Agile', 'Scrum'
  ];

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
        Your Skills Are Your Asset
      </Typography>
      <Autocomplete
        value={skill}
        onChange={handleSkillChange}
        freeSolo
        options={skillOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select your skills or add your custom skills"
            margin="normal"
            fullWidth
            onChange={(e) => setSkill(e.target.value)}
          />
        )}
        sx={Style}
      />
      <Button
        onClick={handleAddSkill}
        variant="contained"
        className="btn btn-outline-info btn px-4 me-sm-3 fw-bold"
        style={{ marginTop: '10px' }}
      >
        Add Skill
      </Button>
      <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
        {formData.map((sk, index) => (
          <Chip
            key={index}
            label={sk}
            onDelete={() => handleDeleteSkill(sk)}
            style={{ marginBottom: '10px' }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SkillsStep;
