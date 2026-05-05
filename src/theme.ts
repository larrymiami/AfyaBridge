'use client';

import { createTheme } from '@mui/material/styles';

export const designTokens = {
  colors: {
    primary: '#0F766E',
    primaryDark: '#0B5F59',
    primaryLight: '#D9F5F0',

    secondary: '#102A43',
    secondaryLight: '#E6EEF5',

    accent: '#C2410C',
    accentLight: '#FFEDD5',

    success: '#15803D',
    successLight: '#DCFCE7',

    warning: '#B45309',
    warningLight: '#FEF3C7',

    error: '#B42318',
    errorDark: '#991B1B',
    errorLight: '#FEE4E2',

    background: '#F7FAF9',
    surface: '#FFFFFF',
    surfaceMuted: '#EEF7F5',
    surfaceSubtle: '#F8FAFC',

    textPrimary: '#102A43',
    textSecondary: '#52616B',
    textMuted: '#697586',
    textDisabled: '#9AA4B2',

    border: '#D9E6E2',
    borderStrong: '#B7CAC4',
    divider: '#E5ECEA',

    focusRing: '#14B8A6',
  },

  radius: {
    xs: 6,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    full: 999,
  },

  shadow: {
    xs: '0 1px 2px rgba(16, 42, 67, 0.06)',
    sm: '0 4px 12px rgba(16, 42, 67, 0.08)',
    md: '0 10px 24px rgba(16, 42, 67, 0.10)',
  },
} as const;

const theme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: designTokens.colors.primary,
      dark: designTokens.colors.primaryDark,
      light: designTokens.colors.primaryLight,
      contrastText: '#FFFFFF',
    },

    secondary: {
      main: designTokens.colors.secondary,
      light: designTokens.colors.secondaryLight,
      contrastText: '#FFFFFF',
    },

    success: {
      main: designTokens.colors.success,
      light: designTokens.colors.successLight,
      contrastText: '#FFFFFF',
    },

    warning: {
      main: designTokens.colors.warning,
      light: designTokens.colors.warningLight,
      contrastText: '#FFFFFF',
    },

    error: {
      main: designTokens.colors.error,
      dark: designTokens.colors.errorDark,
      light: designTokens.colors.errorLight,
      contrastText: '#FFFFFF',
    },

    background: {
      default: designTokens.colors.background,
      paper: designTokens.colors.surface,
    },

    text: {
      primary: designTokens.colors.textPrimary,
      secondary: designTokens.colors.textSecondary,
      disabled: designTokens.colors.textDisabled,
    },

    divider: designTokens.colors.divider,
  },

  typography: {
    fontFamily:
      'var(--font-public-sans), "Noto Sans", Roboto, Arial, sans-serif',

    h1: {
      fontSize: '2.25rem',
      lineHeight: 1.22,
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },

    h2: {
      fontSize: '1.875rem',
      lineHeight: 1.27,
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },

    h3: {
      fontSize: '1.5rem',
      lineHeight: 1.33,
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },

    h4: {
      fontSize: '1.25rem',
      lineHeight: 1.4,
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },

    h5: {
      fontSize: '1.125rem',
      lineHeight: 1.5,
      fontWeight: 700,
    },

    h6: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: 700,
    },

    body1: {
      fontSize: '0.9375rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },

    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
      fontWeight: 400,
    },

    subtitle1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: 600,
    },

    subtitle2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
      fontWeight: 600,
    },

    button: {
      textTransform: 'none',
      fontSize: '0.875rem',
      lineHeight: 1.4,
      fontWeight: 700,
    },

    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.33,
      fontWeight: 500,
      color: designTokens.colors.textMuted,
    },

    overline: {
      fontSize: '0.75rem',
      lineHeight: 1.33,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
    },
  },

  shape: {
    borderRadius: designTokens.radius.md,
  },

  spacing: 8,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: designTokens.colors.background,
          color: designTokens.colors.textPrimary,
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        '::selection': {
          backgroundColor: designTokens.colors.primaryLight,
          color: designTokens.colors.textPrimary,
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: designTokens.radius.md,
          padding: '10px 18px',
          minHeight: 42,
          fontWeight: 700,
        },
        contained: {
          backgroundColor: designTokens.colors.primary,
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: designTokens.colors.primaryDark,
          },
        },
        outlined: {
          borderColor: designTokens.colors.borderStrong,
          color: designTokens.colors.textPrimary,
          '&:hover': {
            borderColor: designTokens.colors.primary,
            backgroundColor: designTokens.colors.primaryLight,
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.radius.lg,
          border: `1px solid ${designTokens.colors.border}`,
          boxShadow: designTokens.shadow.xs,
          backgroundImage: 'none',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        rounded: {
          borderRadius: designTokens.radius.lg,
        },
        elevation1: {
          boxShadow: designTokens.shadow.xs,
        },
        elevation2: {
          boxShadow: designTokens.shadow.sm,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'medium',
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.radius.md,
          backgroundColor: designTokens.colors.surface,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: designTokens.colors.border,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: designTokens.colors.borderStrong,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: designTokens.colors.primary,
            borderWidth: 2,
          },
        },
        input: {
          paddingTop: 13,
          paddingBottom: 13,
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: designTokens.colors.textSecondary,
          fontWeight: 600,
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          color: designTokens.colors.textMuted,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.radius.full,
          fontWeight: 700,
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.radius.md,
          border: `1px solid ${designTokens.colors.border}`,
        },
      },
      variants: [
        {
          props: { variant: 'filled', color: 'error' },
          style: {
            backgroundColor: designTokens.colors.errorLight,
            color: '#7A271A',
          },
        },
        {
          props: { variant: 'filled', color: 'warning' },
          style: {
            backgroundColor: designTokens.colors.warningLight,
            color: '#78350F',
          },
        },
        {
          props: { variant: 'filled', color: 'success' },
          style: {
            backgroundColor: designTokens.colors.successLight,
            color: '#14532D',
          },
        },
        {
          props: { variant: 'filled', color: 'info' },
          style: {
            backgroundColor: designTokens.colors.primaryLight,
            color: designTokens.colors.primaryDark,
          },
        },
      ],
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${designTokens.colors.divider}`,
        },
        head: {
          color: designTokens.colors.textSecondary,
          fontWeight: 700,
          backgroundColor: designTokens.colors.surfaceSubtle,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: designTokens.colors.surface,
          color: designTokens.colors.textPrimary,
          boxShadow: 'none',
          borderBottom: `1px solid ${designTokens.colors.divider}`,
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: designTokens.colors.surface,
          borderRight: `1px solid ${designTokens.colors.divider}`,
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: designTokens.radius.xl,
          boxShadow: designTokens.shadow.md,
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
          borderRadius: designTokens.radius.full,
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },
  },
});

export default theme;