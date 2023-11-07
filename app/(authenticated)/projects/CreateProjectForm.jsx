import React, { useState } from 'react';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';

const CreateProjectForm = ({ onSubmit }) => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can call the onSubmit function here
    onSubmit({ projectName, description });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Create a New Project
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Project Name"
            fullWidth
            variant="outlined"
            margin="normal"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <TextField
            label="Description"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '10px' }}
          >
            Create Project
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateProjectForm;
