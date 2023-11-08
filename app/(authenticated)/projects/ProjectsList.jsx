"use client";

import ProjectCard from './ProjectCard';
import Grid from '@mui/material/Grid';

export default function ProjectsList({ projects, userId }) {

    return (
        <Grid container spacing={3} columns={3}>
            {projects.map((project, i) => (
                <Grid key={i} item xs={3} md={1}>
                    <ProjectCard project={project} userId={userId} />
                </Grid>
            ))}
        </Grid>
    )
}