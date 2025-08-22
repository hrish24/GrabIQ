// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, Box } from '@mui/material';
import { useThemeContext } from './theme/ThemeContext';
import { createCustomTheme } from './theme/theme';
import { ThemeConfigurator } from './theme/ThemeConfigurator';
import { Login } from './components/login/Login';
import Header from './components/common/header/Header';

// Main App component
const App: React.FC = () => {
  const { primaryColor, secondaryColor, darkMode } = useThemeContext();

  const theme = createCustomTheme({
    primaryColor,
    secondaryColor,
    mode: darkMode ? 'dark' : 'light',
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Box sx={{ height: 'calc(100vh - 70px)', backgroundColor: 'background.default' }}>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<></>} />
            <Route path="/settings" />
            <Route path="/profile" element={<></>} />
            <Route
              path="/theme"
              element={
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 2,
                  }}
                >
                  <Box sx={{ width: '100%', maxWidth: 800 }}>
                    <ThemeConfigurator />
                  </Box>
                </Box>
              }
            />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
