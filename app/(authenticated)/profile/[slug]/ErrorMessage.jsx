import React from "react";
import { Typography, Paper, Container, Box, IconButton, Grid } from "@mui/material";
import { ErrorOutlineOutlined as ErrorIcon } from "@mui/icons-material";

const ErrorMessage = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
              <ErrorIcon color="error" fontSize="large" />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom color="error">
                Profile not found
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="error">
                The requested profile could not be found. Please check the URL and try again.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default ErrorMessage;
