import { useMediaQuery } from '@mui/material'
import { useEffect } from 'react'
import useToggle from './useToggle'

function useDarkMode(initialState = true) {
    const [isLight, makeDark, makeLight, toggle] = useToggle(initialState)
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    useEffect(() => {
        if (prefersDarkMode) return makeDark()
        return makeLight()
    }, [prefersDarkMode])

    return [isLight, makeDark, makeLight, toggle]
}

export default useDarkMode
