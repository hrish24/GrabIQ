// theme.ts
import { createTheme, Theme } from '@mui/material/styles';

export interface CustomThemeOptions {
  primaryColor: string;
  secondaryColor: string;
  mode: 'light' | 'dark';
}

export const createCustomTheme = (options: CustomThemeOptions): Theme => {
  return createTheme({
    palette: {
      mode: options.mode,
      primary: {
        main: options.primaryColor,
      },
      secondary: {
        main: options.secondaryColor,
      },
      ...(options.mode === 'dark' && {
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
      }),
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 8,
            },
          },
        },
      },
    },
    typography: {
      fontFamily: 'Roboto',
      h4: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
    },
  });
};
