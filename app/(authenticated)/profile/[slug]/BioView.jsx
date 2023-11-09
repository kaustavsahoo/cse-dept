"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, Avatar, Typography, Chip, TextField, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

import { updateBio } from "./profilesapi";
import { useRouter } from 'next/navigation';

export default function BioView({ profile, canEdit }) {
    const router = useRouter();

    const [isEditing, setIsEditing] = useState(false);
    const [editedBio, setEditedBio] = useState(profile.bio || '');
    const [branch, setBranch] = useState('CSE');
    const [year, setYear] = useState(0);

    useEffect(() => {
        let yearValue = parseInt(profile.email.slice(0, 4));
        let branchCode = profile.email.toLowerCase().slice(4, 7);
        const branches = {
            "ucp": "CSE",
            "uai": "AI"
        };

        setYear(yearValue);
        setBranch(branches[branchCode] || 'Unknown');
    }, [profile]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        updateBio(editedBio).then(() => {
            setIsEditing(false);
            router.refresh();
        })
    };

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar
                        src={profile.image}
                        alt="Profile Picture"
                        sx={{ width: 80, height: 80 }}
                    />
                }
                title={
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        {profile.name}
                    </Typography>
                }
                subheader={
                    <div>
                        <Chip label={branch} color="primary" variant="outlined" size="small" sx={{ mr: 1 }} />
                        <Chip label={`${year} BATCH`} color="secondary" variant="outlined" size="small" />
                    </div>
                }
                action={canEdit && (
                    isEditing ? (
                        <IconButton color="primary" onClick={handleSaveClick}>
                            <SaveIcon />
                        </IconButton>
                    ) : (
                        <IconButton color="primary" onClick={handleEditClick}>
                            <EditIcon />
                        </IconButton>
                    ))
                }
            />
            <CardContent>
                {isEditing ? (
                    <div>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            label="Edit Bio"
                            value={editedBio}
                            onChange={(e) => setEditedBio(e.target.value)}
                        />
                    </div>
                ) : (
                    <Typography variant="body1">
                        {profile.bio || 'Click the "Edit" icon to add your bio.'}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
}
