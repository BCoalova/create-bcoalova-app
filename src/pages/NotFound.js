import React from 'react'
import { Stack, Typography, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'

function NotFound() {
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            gap={2}
            sx={{ minHeight: '100vh' }}
        >
            <Typography variant="h1">Error 404</Typography>
            <Typography variant="h2">Page Not Found</Typography>
            <IconButton
                component={Link}
                to="/"
                variant="outlined"
                color="primary"
            >
                <HomeIcon fontSize="large" />
            </IconButton>
        </Stack>
    )
}

export default NotFound
