/*import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const AdditionalInfoStep = ({ onFormDataChange, formData, template }) => {
  const [additionalinfo, setadditionalinfo] = useState({
    languages: '',
    awards: '',
  });
  const [visibleFields, setVisibleFields] = useState({});

  useEffect(() => {
    if (template && template.AdditionalInfo) {
      // Update visible fields based on the selected template
      setVisibleFields(template.AdditionalInfo);
    }
  }, [template]);

  const handleAddAdditionalInfo = () => {
    if (additionalinfo.name.trim() !== '' && additionalinfo.organization.trim() !== '') {
      onFormDataChange({ AdditionalInfo: [...formData, additionalinfo] });
      setadditionalinfo({ languages: '', awards: '' });
    }
  };

  const handleChange = (e) => {
    setadditionalinfo({ ...additionalinfo, [e.target.name]: e.target.value });
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
        Additional Information Would Give You Upperhand
      </Typography>
      {visibleFields.languages && (
        <TextField
          label="Enter All The Languages You Know"
          name="languages"
          value={additionalinfo.languages}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={Style}
        />
      )}
      {visibleFields.awards && (
        <TextField
          label="Awards and Achievements"
          name="awards"
          value={additionalinfo.awards}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={Style}
        />
      )}
      <Button onClick={handleAddAdditionalInfo} variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold">
        Add Details
      </Button>
      <Box mt={2}>
        {formData.map((addinfo, index) => (
          <div key={index}>
            Languages Known: <strong>{addinfo.languages}</strong> 
            Awards And Achievements: <strong>{addinfo.awards}</strong>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default AdditionalInfoStep;*/

import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const AdditionalInfoStep = ({ onFormDataChange, formData, template }) => {
  const [additionalInfo, setAdditionalInfo] = useState({
    languages: '',
    awards: '',
  });
  const [visibleFields, setVisibleFields] = useState({});

  useEffect(() => {
    if (template && template.additionalInfo) {
      setVisibleFields(template.additionalInfo);
    }
  }, [template]);

  const handleAddAdditionalInfo = () => {
    if (additionalInfo.languages.trim() !== '' || additionalInfo.awards.trim() !== '') {
      onFormDataChange({
        additionalInfo: {
          ...formData,
          ...additionalInfo // Merge with existing additionalInfo
        }
      });
      setAdditionalInfo({ languages: '', awards: '' });
    }
  };

  const handleChange = (e) => {
    setAdditionalInfo({ ...additionalInfo, [e.target.name]: e.target.value });
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
        Additional Information
      </Typography>
      {visibleFields.languages && (
        <TextField
          label="Languages"
          name="languages"
          value={additionalInfo.languages}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={Style}
        />
      )}
      {visibleFields.awards && (
        <TextField
          label="Awards"
          name="awards"
          value={additionalInfo.awards}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={Style}
        />
      )}
      <Button onClick={handleAddAdditionalInfo} variant="contained" className="btn btn-outline-info btn px-4 me-sm-3 fw-bold">
        Add Information
      </Button>
      <Box mt={2}>
        {formData && (
          <div>
            {formData.languages && (
              <p>
                <strong>Languages:</strong> {formData.languages}
              </p>
            )}
            {formData.awards && (
              <p>
                <strong>Awards:</strong> {formData.awards}
              </p>
            )}
          </div>
        )}
      </Box>
    </Box>
  );
};

export default AdditionalInfoStep;
