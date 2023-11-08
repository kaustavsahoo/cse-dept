import React from "react";
import {
  Paper,
  CardActionArea,
  Typography,
  Avatar,
  Box,
} from "@mui/material";

const UserCard = ({ user }) => {
  return (
    <CardActionArea sx={{mb: 1}}>
      <Paper elevation={2} style={{ display: "flex", alignItems: "center", padding: "8px" }}>
        <Avatar alt={user.name} src={user.image} />
        <Box style={{ marginLeft: "16px" }}>
          <Typography variant="h6" component="div" style={{ fontSize: "1rem" }}>
            {user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ fontSize: "0.85rem" }}>
            {user.email}
          </Typography>
        </Box>
      </Paper>
    </CardActionArea>
  );
};

export default UserCard;
