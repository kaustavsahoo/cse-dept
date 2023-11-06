import { useSession } from "next-auth/react";

import { Avatar, Box } from "@mui/material";


export default function UserProfile() {
    const { data: session } = useSession();

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                bgcolor: "background.paper",
            }}
        >
            <Avatar src={session.user.image} sx={{ mr: 2 }} />
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    fontSize: 14,
                }}
            >
                <Box sx={{ color: 'text.secondary' }}>Welcome,</Box>
                <Box sx={{ color: 'text.primary', fontWeight: 'medium' }}>
                    {session.user.name}
                </Box>
            </Box>
        </Box>
    )
}