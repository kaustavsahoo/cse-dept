import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProjectCard = ({ projectName, description }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {projectName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
