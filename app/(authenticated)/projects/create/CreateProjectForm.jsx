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
  Snackbar,
} from '@mui/material';
import { createProject } from '../projectsapi';

const CreateProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [numPeople, setNumPeople] = useState(1); // Initialize the number of people required to 1
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const availableTags = ['Frontend', 'Backend', 'Design', 'React']; // Replace with your list of tags

  const handleChangeTags = (event) => {
    setSelectedTags(event.target.value);
  };

  const handleNumPeopleChange = (event) => {
    setNumPeople(event.target.value);
  };

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createProject(projectName, description, selectedTags, numPeople)
      .then((project) => {
        console.log('Created project', project);
        handleSnackbarOpen(); // Open the snack bar on success
      })
      .catch((err) => {
        console.error('Failed to create project', err);
      });
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
          <FormControl fullWidth margin="normal">
            <InputLabel id="tag-select-label" sx={{backgroundColor: "white"}}>Select Tags</InputLabel>
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
          <FormControl fullWidth margin="normal">
            <InputLabel id="num-people-label" sx={{backgroundColor: "white"}}>Number of People</InputLabel>
            <Select
              labelId="num-people-label"
              id="num-people"
              value={numPeople}
              onChange={handleNumPeopleChange}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <MenuItem key={i + 1} value={i + 1}>
                  {i + 1}
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
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={snackbarOpen}
        autoHideDuration={6000} // You can adjust the duration as needed
        onClose={handleSnackbarClose}
        message="Project created successfully!"
      />
    </Container>
  );
};

export default CreateProjectForm;
