"use client";

import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';

import Link from 'next/link';

export default function CreateButton() {
    return (
        <Fab color="primary" variant="extended" href='/projects/create' component={Link}>
            <AddIcon sx={{ mr: 1 }} />
            Create Project
        </Fab>
    )
}