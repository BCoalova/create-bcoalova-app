import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useGlobalContext } from '../context/globalContext'

function HomePage() {
    const { isLight, toggleTheme } = useGlobalContext()

    return (
        <Stack
            sx={{ flexGrow: 1, alignItems: 'center', justifyItem: 'center' }}
        >
            <Typography variant="h1">Hola mundo</Typography>
            <Box>
                <IconButton color="primary" onClick={toggleTheme}>
                    {isLight ? <ModeNightIcon /> : <LightModeIcon />}
                </IconButton>
            </Box>
        </Stack>
    )
}

export default HomePage
