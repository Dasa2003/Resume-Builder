/*Static field rendering
import React, { useState } from 'react';
//import { TextField, Button, Box } from '@material-ui/core';
import { TextField, Button, Box, Typography } from '@mui/material';

const ProjectsStep = ({ onFormDataChange, formData }) => {
  const [project, setProject] = useState({ name: '', role: '', description: '' });

  const handleAddProject = () => {
    if (project.name.trim() !== '' && project.role.trim() !== '') {
      onFormDataChange({ projects: [...formData, project] });
      setProject({ name: '', role: '', description: '' });
    }
  };

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
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
          Your Projects Will Specify Your Domain Knowledge
        </Typography>
      <TextField
        label="Project Name"
        name="name"
        value={project.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={Style}
      />
      <TextField
        label="Role"
        name="role"
        value={project.role}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={Style}
      />
      <TextField
        label="Description"
        name="description"
        value={project.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <Button onClick={handleAddProject} variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold">
        Add Project
      </Button>
      <Box mt={2}>
        {formData.map((proj, index) => (
          <div key={index}>
            <strong>{proj.name}</strong> - {proj.role}
            <p>{proj.description}</p>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsStep;*/

import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ProjectsStep = ({ onFormDataChange, formData, template }) => {
  const [project, setProject] = useState({
    name: '',
    role: '',
    description: '',
    year: '',
  });
  const [visibleFields, setVisibleFields] = useState({});

  useEffect(() => {
    if (template && template.projects) {
      // Update visible fields based on the selected template
      setVisibleFields(template.projects);
    }
  }, [template]);

  const handleAddProject = () => {
    if (project.name.trim() !== '' && project.role.trim() !== '') {
      onFormDataChange({ projects: [...formData, project] });
      setProject({ name: '', role: '', description: '', year: '' });
    }
  };

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
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
        Your Projects Will Specify Your Domain Knowledge
      </Typography>
      {visibleFields.name && (
        <TextField
          label="Project Name"
          name="name"
          value={project.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={Style}
        />
      )}
      {visibleFields.role && (
        <TextField
          label="Role"
          name="role"
          value={project.role}
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
          value={project.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
      )}
      {visibleFields.year && (
        <TextField
          label="Year"
          name="year"
          value={project.year}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={Style}
        />
      )}
      <Button onClick={handleAddProject} variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold">
        Add Project
      </Button>
      <Box mt={2}>
        {formData.map((proj, index) => (
          proj.name && (
            <div key={index}>
            <strong>{proj.name}</strong> - {proj.role}
            <p>{proj.description}</p>
            <p>{proj.year}</p>
          </div>
          )
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsStep;
