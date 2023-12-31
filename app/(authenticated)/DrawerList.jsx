"use client";

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import UserProfile from './UserProfile';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

import { Box } from '@mui/material';

import Link from 'next/link';
import { signOut } from "next-auth/react";



export default function DrawerList({ setMobileOpen }) {

    const afterClick = () => {
        setMobileOpen(false);
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
            <Box>
                <UserProfile />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton href="/dashboard" LinkComponent={Link} onClick={afterClick}>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Dashboard"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton href="/directory" LinkComponent={Link} onClick={afterClick}>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Directory"} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton href="/coursematerials" LinkComponent={Link} onClick={afterClick}>
                            <ListItemIcon>
                                <LibraryBooksIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Course Materials"} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton href="/projects" LinkComponent={Link} onClick={afterClick}>
                            <ListItemIcon>
                                <TipsAndUpdatesIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Projects"} />
                        </ListItemButton>
                    </ListItem>

                </List>
            </Box>
            <List>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Logout"} onClick={signOut} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}
