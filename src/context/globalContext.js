import React, { createContext, useContext } from 'react'
import useDarkMode from '../hooks/useDarkMode'

const globalContext = createContext()

const { Provider } = globalContext

export function useGlobalContext() {
    return useContext(globalContext)
}

function GlobalProvider({ children }) {
    const [isLight, , , toggleTheme] = useDarkMode(true)

    const value = { isLight, toggleTheme }

    return <Provider value={value}>{children}</Provider>
}

export default GlobalProvider
