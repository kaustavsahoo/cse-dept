"use client";

import { useEffect } from 'react';
import ProjectCard from './projectCard';
import Grid from '@mui/material/Grid';

export default function ProjectsList({ projects }) {

    return (
        <Grid container spacing={3} columns={3}>
            {projects.map((project, i) => (
                <Grid key={i} item xs={1}>
                    <ProjectCard project={project} />
                </Grid>
            ))}
        </Grid>
    )
}