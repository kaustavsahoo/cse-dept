"use server";

import React from 'react';
import { getAllProjects } from './projectsapi';

import ProjectsList from './ProjectsList';
import CreateButton from './CreateButton';
import { Box } from '@mui/material';
import { getUserId } from '../usersapi';

export default async function Page() {
    const projects = await getAllProjects();
    const userId = await getUserId();

    return (
        <div>
            <h2>Projects</h2>
            <Box sx={{ mt: 1 }}>
                <CreateButton />
            </Box>

            <Box sx={{ mt: 4 }}>
                <ProjectsList projects={projects} userId={userId} />
            </Box>
        </div>
    );
}
