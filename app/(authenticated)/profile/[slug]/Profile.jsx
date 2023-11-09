import React from 'react';
import {
  Box,
  Container,
  Grid,
} from '@mui/material';

import BioView from './BioView';
import DetailsView from './DetailsView';

export default function ProfilePage({ profile, canEdit }) {
  return (
    <Box sx={{ bgcolor: '#eee', height: '100%' }}>
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid item sm={12} lg={4}>
            <BioView profile={profile} canEdit={canEdit} />
          </Grid>
          <Grid item lg={8}>
            <DetailsView profile={profile} canEdit={canEdit} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
