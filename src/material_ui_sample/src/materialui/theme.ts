import {createMuiTheme} from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#d2ffff',
      main: '#9fe7ef',
      dark: '#6db5bd',
      contrastText: '#000000',
    },
    secondary: {
      light: '#ffc947',
      main: '#ff9800',
      dark: '#c66900',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
    },
    
  },
  // spacing: [0, 2, 4, 8, 16, 32, 64],
})