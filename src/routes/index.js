import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import '../styles/index.scss'
import { themeLight, themeDark } from '../styles/theme'

import * as Pages from '../pages'
import { useGlobalContext } from '../context/globalContext'
import Layout from '../components/Layout'

function App() {
    const { isLight } = useGlobalContext()

    return (
        <ThemeProvider theme={isLight ? themeLight : themeDark}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Pages.HomePage} />
                        <Route path="/404" component={Pages.NotFound} />
                        <Redirect to="/404" />
                    </Switch>
                </Layout>
            </Router>
        </ThemeProvider>
    )
}

export default App
