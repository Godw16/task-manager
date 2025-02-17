import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2D336B',
      light: '#7886C7',
      dark: '#1A1F40',
    },
    secondary: {
      main: '#A9B5DF',
    },
    background: {
      default: '#FFF2F2',
      paper: '#FFF2F2',
    },
    text: {
      primary: '#2D336B',
      secondary: '#7886C7',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      color: '#2D336B',
    },
    h2: {
      fontWeight: 600,
      color: '#2D336B',
    },
    h3: {
      fontWeight: 500,
      color: '#2D336B',
    },
    h4: {
      fontWeight: 500,
      color: '#2D336B',
    },
    h5: {
      fontWeight: 500,
      color: '#2D336B',
    },
    h6: {
      fontWeight: 500,
      color: '#2D336B',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: '#2D336B',
          '&:hover': {
            backgroundColor: '#1A1F40',
          },
        },
        outlinedPrimary: {
          color: '#2D336B',
          borderColor: '#2D336B',
          '&:hover': {
            borderColor: '#1A1F40',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;