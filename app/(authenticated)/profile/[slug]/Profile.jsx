import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  IconButton,
  Divider
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Favorite,
  Share
} from '@mui/icons-material';

import BioView from './BioView';

export default function ProfilePage({ profile, canEdit }) {
  return (
    <Box sx={{ bgcolor: '#eee', height: '100%' }}>
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid item sm={12} lg={4}>
            <BioView profile={profile} canEdit={canEdit} />
          </Grid>
          <Grid item lg={8}>
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item sm={3}>
                    <Typography variant="body1">Email</Typography>
                  </Grid>
                  <Grid item sm={9}>
                    <Typography variant="body2" color="text.secondary">
                      <Email sx={{ mr: 1 }} />
                      {profile.email}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={2}>
                  <Grid item sm={3}>
                    <Typography variant="body1">Phone</Typography>
                  </Grid>
                  <Grid item sm={9}>
                    <Typography variant="body2" color="text.secondary">
                      <Phone sx={{ mr: 1 }} />
                      (097) 234-5678
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={2}>
                  <Grid item sm={3}>
                    <Typography variant="body1">Address</Typography>
                  </Grid>
                  <Grid item sm={9}>
                    <Typography variant="body2" color="text.secondary">
                      <LocationOn sx={{ mr: 1 }} />
                      Bay Area, San Francisco, CA
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
