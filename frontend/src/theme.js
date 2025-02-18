// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#2D336B',
//       light: '#7886C7',
//       dark: '#1A1F40',
//     },
//     secondary: {
//       main: '#A9B5DF',
//     },
//     background: {
//       default: '#FFF2F2',
//       paper: '#FFF2F2',
//     },
//     text: {
//       primary: '#2D336B',
//       secondary: '#7886C7',
//     },
//   },
//   typography: {
//     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//     h1: {
//       fontWeight: 600,
//       color: '#2D336B',
//     },
//     h2: {
//       fontWeight: 600,
//       color: '#2D336B',
//     },
//     h3: {
//       fontWeight: 500,
//       color: '#2D336B',
//     },
//     h4: {
//       fontWeight: 500,
//       color: '#2D336B',
//     },
//     h5: {
//       fontWeight: 500,
//       color: '#2D336B',
//     },
//     h6: {
//       fontWeight: 500,
//       color: '#2D336B',
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//           textTransform: 'none',
//           fontWeight: 600,
//         },
//         containedPrimary: {
//           backgroundColor: '#2D336B',
//           '&:hover': {
//             backgroundColor: '#1A1F40',
//           },
//         },
//         outlinedPrimary: {
//           color: '#2D336B',
//           borderColor: '#2D336B',
//           '&:hover': {
//             borderColor: '#1A1F40',
//           },
//         },
//       },
//     },
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//           borderRadius: 12,
//         },
//       },
//     },
//   },
// });

// export default theme; 

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create the base theme
let theme = createTheme({
  // Custom breakpoints for better responsive control
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
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
    // Base typography settings - they'll be modified by responsiveFontSizes
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
    // Responsive body text - slightly larger on mobile for readability
    body1: {
      fontSize: '1rem',
      '@media (max-width:600px)': {
        fontSize: '1.05rem',
      },
    },
    body2: {
      fontSize: '0.875rem',
      '@media (max-width:600px)': {
        fontSize: '0.925rem',
      },
    },
  },
  // Responsive spacing for better mobile layout
  spacing: factor => `${0.25 * factor}rem`,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 16px',
          // More padding on mobile for better touch targets
          '@media (max-width:600px)': {
            padding: '10px 18px',
          }
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
          // Smaller radius on mobile for more space
          '@media (max-width:600px)': {
            borderRadius: 8,
          }
        },
      },
    },
    // Enhanced AppBar for mobile
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    // Improved Drawer for mobile
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FFF2F2',
        },
      },
    },
    // Make form inputs more touch-friendly
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            '@media (max-width:600px)': {
              fontSize: '1.05rem',
              padding: '10px 14px',
            },
          },
        },
      },
    },
    // Enhance list items for mobile touch
    MuiListItem: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            paddingTop: '12px',
            paddingBottom: '12px',
          },
        },
      },
    },
    // Responsive dialog
    MuiDialog: {
      styleOverrides: {
        paper: {
          '@media (max-width:600px)': {
            margin: '16px',
            width: 'calc(100% - 32px)',
            maxHeight: 'calc(100% - 32px)',
          },
        },
      },
    },
    // Responsive menu
    MuiMenu: {
      styleOverrides: {
        paper: {
          '@media (max-width:600px)': {
            maxHeight: 'calc(100% - 96px)',
            minWidth: '200px',
          },
        },
      },
    },
    // Tabs for mobile
    MuiTab: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            minWidth: '100px',
            padding: '12px 16px',
          },
        },
      },
    },
  },
});

// Apply responsive font sizes to all typography variants
theme = responsiveFontSizes(theme, {
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
  factor: 2, // Higher factor means more aggressive scaling
});

export default theme;