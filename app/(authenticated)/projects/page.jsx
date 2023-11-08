"use client";

import React, { useState, useEffect } from 'react';
import { getAllProjects } from './projectsapi';


import ProjectsList from './ProjectsList';
import CreateButton from './CreateButton';

export default function Page() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getAllProjects()
            .then((projects) => {
                setProjects(projects);
            });
    }, []);

    return (
        <div>
            <h2>Projects</h2>
            <CreateButton />
            <ProjectsList projects={projects} />
        </div>
    );
}
