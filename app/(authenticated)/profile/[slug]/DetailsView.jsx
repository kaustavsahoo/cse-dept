"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, TextField, Button, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

import { updateDetails } from "./profilesapi";
import { useRouter } from 'next/navigation';

export default function DetailsView({ profile, canEdit }) {
    const router = useRouter();

    const [isEditing, setIsEditing] = useState(false);
    const [email, setEmail] = useState(profile.email);
    const [phone, setPhone] = useState(profile.phone || '');
    const [linkedin, setLinkedIn] = useState(profile.linkedin || '');

    useEffect(() => {
        setEmail(profile.email);
        setPhone(profile.phone || '');
        setLinkedIn(profile.linkedin || '');
    }, [profile]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        updateDetails(phone, linkedin).then(() => {
            setIsEditing(false);
            router.refresh();
        })
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
                    Profile Details
                    {canEdit && (
                        isEditing ? (
                            <IconButton color="primary" onClick={handleSaveClick}>
                                <SaveIcon />
                            </IconButton>
                        ) : (
                            <IconButton color="primary" onClick={handleEditClick}>
                                <EditIcon />
                            </IconButton>
                        )
                    )}
                </Typography>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        {isEditing ? (
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Email"
                                value={email}
                                disabled={true}
                            />
                        ) : (
                            <ListItemText primary={email} />
                        )}
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <PhoneIcon />
                        </ListItemIcon>
                        {isEditing ? (
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        ) : (
                            <ListItemText primary={phone || 'N/A'} />
                        )}
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <LinkedInIcon />
                        </ListItemIcon>
                        {isEditing ? (
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="LinkedIn"
                                value={linkedin}
                                onChange={(e) => setLinkedIn(e.target.value)}
                            />
                        ) : (
                            <ListItemText primary={linkedin || 'N/A'} />
                        )}
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
}
