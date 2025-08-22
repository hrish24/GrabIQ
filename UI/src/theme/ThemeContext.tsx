import { colors } from '@mui/material';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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

// Local storage keys
const STORAGE_KEYS = {
  primary: 'app-primary-color',
  secondary: 'app-secondary-color',
  darkMode: 'app-dark-mode',
};

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  // Initialize from localStorage OR fallback to defaults
  const [primaryColor, setPrimaryColorState] = useState(localStorage.getItem(STORAGE_KEYS.primary) || colors.blue[500].toString());
  const [secondaryColor, setSecondaryColorState] = useState(localStorage.getItem(STORAGE_KEYS.secondary) || colors.blue[300].toString());
  const [darkMode, setDarkModeState] = useState(localStorage.getItem(STORAGE_KEYS.darkMode) === 'true' || false);

  // Update state + persist in localStorage
  const setPrimaryColor = (color: string) => {
    setPrimaryColorState(color);
    localStorage.setItem(STORAGE_KEYS.primary, color);
  };

  const setSecondaryColor = (color: string) => {
    setSecondaryColorState(color);
    localStorage.setItem(STORAGE_KEYS.secondary, color);
  };

  const setDarkMode = (dark: boolean) => {
    setDarkModeState(dark);
    localStorage.setItem(STORAGE_KEYS.darkMode, String(dark));
  };

  // (Optional) keep states in sync if localStorage is modified externally
  useEffect(() => {
    const handleStorageChange = () => {
      setPrimaryColorState(localStorage.getItem(STORAGE_KEYS.primary) || colors.blue[500].toString());
      setSecondaryColorState(localStorage.getItem(STORAGE_KEYS.secondary) || colors.blue[300].toString());
      setDarkModeState(localStorage.getItem(STORAGE_KEYS.darkMode) === 'true' || false);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

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
