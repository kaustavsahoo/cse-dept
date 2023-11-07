'use server';

import dbConnect from '../../../lib/dbConnect'
import Project from '../../../models/Projects'

async function getAllProjects() {
    await dbConnect();

    // Query the database to find all projects
    const projects = await Project.find({});

    return projects;
}

// Create a new function to create and save a project
async function createProject(title, description, creatorId) {
    await dbConnect(); // Make sure you establish a database connection

    try {
        // Create a new project instance
        const newProject = new Project({
            title,
            description,
        });

        // Save the new project to the database
        const savedProject = await newProject.save();

        return savedProject;
    } catch (error) {
        console.error('Error creating project:', error);
        throw error;
    }
}


export { getAllProjects, createProject };