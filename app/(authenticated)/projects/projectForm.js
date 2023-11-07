import React, { useState } from 'react';
import { createProject } from './projectsapi'; // Import the createProject function

function ProjectForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the createProject function with the form data
      const createdProject = await createProject(formData.title, formData.description, 'userId'); // Replace 'userId' with the actual user's ID
      console.log('Project created:', createdProject);
      // Optionally, you can reset the form here
      setFormData({ title: '', description: '' });
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
}

export default ProjectForm;
