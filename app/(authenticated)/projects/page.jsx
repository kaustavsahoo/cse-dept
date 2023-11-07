'use client';

// ProjectList.js
import React, { useEffect, useState } from 'react';
import { getAllProjects } from './projectsapi';
import CreateProjectForm from './CreateProjectForm';
import ProjectForm from './projectForm';
import ProjectCard from './projectCard';
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
                    <ProjectCard projectName={project.title} description={project.description}/>

                ))}
            </ul>
        </div>
    );
}

export default ProjectList;
