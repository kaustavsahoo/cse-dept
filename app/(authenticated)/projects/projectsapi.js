'use server';

import dbConnect from '../../../lib/dbConnect'
import Project from '../../../models/Projects'
import User from '../../../models/User'

import { getServerSession } from "next-auth"
import { convertObjectIdsToStrings } from '../../../lib/dbHelpers'

async function getAllProjects() {
    await dbConnect();

    const projects = await Project.find({}).populate('creator', 'name image').lean();

    return projects.map((project) => convertObjectIdsToStrings(project));
}

async function createProject(title, description, selectedTags) {
    await dbConnect(); // Make sure you establish a database connection

    const session = await getServerSession();
    const { email } = session.user;
    const user = await User.findOne({ email });

    try {
        // Create a new project instance
        const newProject = new Project({
            title,
            description,
            tags: selectedTags,
            creator: user._id
        });

        // Save the new project to the database
        const savedProject = await newProject.save();

        return convertObjectIdsToStrings(savedProject);
    } catch (error) {
        console.error('Error creating project:', error);
        throw error;
    }
}


export { getAllProjects, createProject };