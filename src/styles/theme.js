import { createTheme } from '@mui/material'
import { esES as esESCore } from '@mui/material/locale'
import { esES as esESGrid } from '@mui/x-data-grid'
// import { orange, grey } from '@mui/material/colors'

const themeLight = createTheme({
    palette: {
        mode: 'light',
        // background: {
        //     paper: '#e9e9f7',
        // },
        // primary: {
        //     main: '#00548b',
        // },
        // secondary: {
        //     main: '#175e32',
        // },
        // warning: {
        //     main: orange[500],
        //     contrastText: '#333',
        // },
        // action: {
        //     disabledBackground: grey[300],
        //     disabled: '#00548b',
        // },
    },
    /* typography: {
    fontFamily: 'AvenirNextLTPro-Regular',
  }, */
    esESGrid,
    esESCore,
})

const themeDark = createTheme({
    palette: {
        mode: 'dark',
        //     background: {
        //         paper: '#0d0d2b',
        //     },
    },
})

export { themeLight, themeDark }
