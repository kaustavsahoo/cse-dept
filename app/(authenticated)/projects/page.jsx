'use client';

// ProjectList.js
import React, { useEffect, useState } from 'react';
import { getAllProjects } from './projectsapi';
import CreateProjectForm from './CreateProjectForm';
import ProjectForm from './projectForm';
function ProjectList() {
    const [projects, setProjects] = useState([
        {
            title: "Sanidhya",
            description: "DBMS",
            "_id": 123123
        },
        {
            title: "Sanidhya",
            description: "DBMS",
            "_id": 123123
        },
        {
            title: "Sanidhya",
            description: "DBMS",
            "_id": 123123
        }
    ]);

    useEffect(() => {
        async function fetchProjects() {
            const projects = await getAllProjects();
            console.log(projects);

            setProjects(projects);
        }

        //  fetchProjects();
    }, []);

    return (
        <div>
            <h2>Projects</h2>
            <CreateProjectForm />
            <ul>
                {projects.map((project) => (
                    <li key={project._id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectList;
