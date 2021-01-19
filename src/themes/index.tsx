import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#ffffff',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        fontWeight: 'bold',
      },
      contained: {
        backgroundColor: '#ffffff',
      },
    },
    MuiButtonBase: {
      root: {
        '&:hover .Mui-focusVisible': {
          borderColor: '#DCDFEB !important',
        },
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: '0px 1px 6px #00000029',
      },
      elevation8: {
        boxShadow: '0px 8px 16px rgba(25, 32, 56, 0.1)',
      },
    },
    MuiInputBase: {
      root: {
        '& fieldset': {
          border: '1.5px solid #DCDFEB',
        },
        '&:hover fieldset': {
          borderColor: '#DCDFEB !important',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#0096d6',
    },
    secondary: {
      main: '#f9b21d',
      contrastText: '#fff',
    },
  },
});

export default theme;
