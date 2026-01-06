import { createTheme } from '@mui/material/styles'

export const getTheme = (isDark) => {
  return createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      primary: {
        main: '#4F46E5',
        light: '#6366F1',
        dark: '#4338CA',
      },
      secondary: {
        main: '#7C3AED',
        light: '#8B5CF6',
        dark: '#6D28D9',
      },
      success: {
        main: '#10B981',
      },
      warning: {
        main: '#F59E0B',
      },
      background: {
        default: isDark ? '#111827' : '#FFFFFF',
        paper: isDark ? '#1F2937' : '#F9FAFB',
      },
      text: {
        primary: isDark ? '#F9FAFB' : '#1F2937',
        secondary: isDark ? '#D1D5DB' : '#6B7280',
      },
    },
    typography: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      h1: {
        fontWeight: 800,
        lineHeight: 1.1,
      },
      h2: {
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h3: {
        fontWeight: 700,
        lineHeight: 1.3,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            padding: '12px 24px',
            fontSize: '1rem',
            fontWeight: 600,
          },
          contained: {
            boxShadow: '0 4px 15px rgba(79, 70, 229, 0.3)',
            '&:hover': {
              boxShadow: '0 6px 20px rgba(79, 70, 229, 0.4)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
            },
          },
        },
      },
    },
  })
}

