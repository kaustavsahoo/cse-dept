import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Box, Button, Modal } from '@mui/material';

import { applyToProject, deleteProject, getAppliedUsers } from './projectsapi';

import { useRouter } from 'next/navigation'

import ProjectDialog from './ProjectDialog';


const ProjectCard = ({ project, userId }) => {
  const [formattedDate, setFormattedDate] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [appliedUsers, setAppliedUsers] = useState([]);
  const router = useRouter()

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleString();
  }

  useEffect(() => {
    if (project) {
      setFormattedDate(formatDate(project.createdAt));
    }
  }, [project]);

  const handleApply = async () => {
    console.log('apply to project');
    await applyToProject(project._id);
  }

  const handleView = () => {
    getAppliedUsers(project._id).then((users) => {
      setAppliedUsers(users);
      setModalOpen(true);
    });
  }

  const handleDelete = () => {
    deleteProject(project._id).then(() => router.refresh());
  };

  return (
    <>
      <ProjectDialog modalOpen={modalOpen} setModalOpen={setModalOpen} appliedUsers={appliedUsers} />
      <Card elevation={8}>
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
        <CardActions>
          {
            userId == project.creator._id ? (
              <>
                <Button size="small" variant="outlined" onClick={handleView}>View Applicants</Button>
                <Button size="small" variant="outlined" color='secondary' onClick={handleDelete}>Delete</Button>
              </>
            ) : (
              <Button size="small" variant="outlined" onClick={handleApply} disabled={
                project.userids.includes(userId)
              }>Apply</Button>
            )
          }
        </CardActions>
      </Card>
    </>
  );
};

export default ProjectCard;
