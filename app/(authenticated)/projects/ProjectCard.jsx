import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/material';

const ProjectCard = ({ project }) => {
  const [formattedDate, setFormattedDate] = useState('');

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleString();
  }

  useEffect(() => {
    if (project) {
      setFormattedDate(formatDate(project.createdAt));
    }
  }, [project]);

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar src={project.creator.image} alt={project.creator.name} />
        }
        title={project.creator.name}
        subheader={formattedDate}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {project.description}
        </Typography>
        <Box>
          {project.tags && project.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              color="primary"
              style={{ margin: '2px' }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
