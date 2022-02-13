import React from 'react'
import { Paper } from '@mui/material'
import NavBar from './NavBar'

const layoutStyles = {
    minHeight: '100vh',
    borderRadius: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
}

function Layout({ children }) {
    return (
        <Paper elevation={0} sx={layoutStyles}>
            <NavBar />
            {children}
        </Paper>
    )
}

export default Layout
