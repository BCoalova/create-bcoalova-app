import React from 'react'
import { render } from 'react-dom'
import GlobalProvider from './context/globalContext'

import App from './routes'

render(
    <GlobalProvider>
        <App />
    </GlobalProvider>,
    document.getElementById('root')
)
