"use client";

import React, { useState } from 'react';
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  ListItemText,
} from '@mui/material';
import { createProject } from '../projectsapi';

const CreateProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const availableTags = [
    'Frontend',
    'Backend',
    'Design',
  ]; // Replace with your list of tags

  const handleChangeTags = (event) => {
    setSelectedTags(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createProject(projectName, description, selectedTags).then((project) => {
      console.log('Created project', project);
    }).catch(err => {
      console.error('Failed to create project', err);
    });
  }

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
          <FormControl fullWidth margin="normal">
            <InputLabel id="tag-select-label">Select Tags</InputLabel>
            <Select
              labelId="tag-select-label"
              id="tag-select"
              multiple
              value={selectedTags}
              onChange={handleChangeTags}
              renderValue={(selected) => selected.join(', ')}
            >
              {availableTags.map((tag) => (
                <MenuItem key={tag} value={tag}>
                  <Checkbox checked={selectedTags.indexOf(tag) > -1} />
                  <ListItemText primary={tag} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
