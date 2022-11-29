import { createTheme } from '@mui/material/styles';


export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 800,
      lg: 1200,
      xl: 1536,
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#F2461F'
    },
    secondary: {
      main: '#B03211'
    },
  },
  components: {

    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          color: 'white',
          height: 60
        },
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '5px'
        }
      }
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 25,
          fontWeight: 600,
        },
        h2: {
          fontSize: 22,
          fontWeight: 600
        },
        h3: {
          fontSize: 20,
          fontWeight: 600,
        },
        subtitle1: {
          fontSize: 17,
          fontWeight: 600
        },
        subtitle2: {
          fontSize: 15,
          fontWeight: 600,
          lineHeight: 1.3,
        },
        body2: {
          fontSize: 12,
          fontWeight: 400,
        }
      }
    },


    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
        disableElevation: true,
        color: 'primary',
      },
      styleOverrides: {
        root: {
          margin: '1px 2px',
          textTransform: 'none',
          color: '#fff',
          boxShadow: 'none',
          borderRadius: 5,
          ":hover": {
            backgroundColor: 'rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease-in-out',
          }
        }
      }
    },
    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '1rem 0'
        }
      }
    }
    
  }
});