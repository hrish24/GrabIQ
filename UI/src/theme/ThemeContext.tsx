import { colors } from '@mui/material';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  primaryColor: string;
  secondaryColor: string;
  darkMode: boolean;
  setPrimaryColor: (color: string) => void;
  setSecondaryColor: (color: string) => void;
  setDarkMode: (dark: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState(colors.blue[500].toString());
  const [secondaryColor, setSecondaryColor] = useState(colors.blue[300].toString());
  const [darkMode, setDarkMode] = useState(false);

  const value: ThemeContextType = {
    primaryColor,
    secondaryColor,
    darkMode,
    setPrimaryColor,
    setSecondaryColor,
    setDarkMode,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};
