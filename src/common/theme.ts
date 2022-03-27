import { createTheme } from '@mui/material';

const defaultTheme = createTheme({
  typography: {
    h1: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 2.8,
      letterSpacing: 0.15,
    },
    h2: {
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 0.857142857,
      letterSpacing: 0.15,
    },
    h3: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 0.5,
      letterSpacing: 0.15,
    },
    h4: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 0.8,
      letterSpacing: 0.15,
    },
  },
  palette: {
    primary: {
      main: 'rgb(245, 0, 87)',
    },
    secondary: {
      main: 'rgb(255, 255, 255)',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          position: 'sticky',
          top: 0,
          zIndex: 100,
          height: 60,
          padding: '10px 10px',
          background: 'rgb(245, 0, 87)',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          position: 'sticky',
          top: 70,
          maxWidth: 600,
          zIndex: 100,
          marginLeft: 16,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          display: 'flex',
          marginBottom: 20,
          width: '30vw',
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          marginTop: 40,
          textAlign: 'center',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          background: 'rgb(245, 0, 87)',
          border: 'transparent',
          fontSize: 15,
          ':disabled': {
            color: 'rgb(255,255,255)',
          },
          ':hover': {
            background: 'rgba(245, 0, 87, 0.6)',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          display: 'inline-block',
          textDecoration: 'none',
          padding: 12,
          fontSize: 13,
          fontWeight: 500,
          lineHeight: 1.69,
          letterSpacing: 0.46,
          textTransform: 'uppercase',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: 14,
          borderRadius: 4,
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.09);',
          },
        },
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      },
    },
  },
});

export default defaultTheme;
