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

async function createProject(title, description, selectedTags, numPeople) {
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
            numPeople,
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

async function applyToProject(projectId) {
    await dbConnect(); // Make sure you establish a database connection

    const session = await getServerSession();
    const { email } = session.user;
    const user = await User.findOne({ email });

    const project = await Project.findById(projectId);

    if (!user || !project) {
        throw new Error('User or project not found');
    }

    if (!project.userids.includes(user._id)) {
        project.userids.push(user._id);
        await project.save();
    }
}



async function deleteProject(projectId) {
    await dbConnect(); // Make sure you establish a database connection

    const session = await getServerSession();
    const { email } = session.user;
    const user = await User.findOne({ email });

    const project = await Project.findById(projectId);

    if (!user || !project) {
        throw new Error('User or project notfound');
    }

    if (user._id.toString() != project.creator._id.toString()) {
        throw new Error('User is not the creator of the project');
    }

    await Project.findByIdAndDelete(projectId);
}

async function getAppliedUsers(projectid) {
    await dbConnect(); // Make sure you establish a database connection
  
    try {
      // Find the project by its ID
      const project = await Project.findById(projectid).populate('userids');
  
      if (!project) {
        throw new Error('Project not found');
      }
  
      // Extract user information from the populated userids field
      const users = project.userids.map(user => {
        return {
          _id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image,
        };
      });
  
      return users;
    } catch (error) {
      console.error('Error fetching users for project:', error);
      throw error;
    }
  }
  

export { getAllProjects, createProject, applyToProject, deleteProject, getAppliedUsers };