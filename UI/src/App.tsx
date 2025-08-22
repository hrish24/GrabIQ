// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider, Box, Typography } from '@mui/material';
import { useThemeContext } from './theme/ThemeContext';
import { createCustomTheme } from './theme/theme';
import { ThemeConfigurator } from './theme/ThemeConfigurator';
import { Login } from './components/login/Login';
import Sidebar from './components/common/sidebar/Sidebar';
import Configure from './components/configure/Configure';
import Category from './components/configure/master/category/Category';
import DocumentType from './components/configure/master/documentType/DocumentType';
import Subcategory from './components/configure/master/subcategory/Subcategory';

const LayoutWrapper: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return (
      <Box sx={{ height: '100vh', backgroundColor: 'background.default' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: 'background.default',
          overflow: 'auto',
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route
            path="/dashboard"
            element={
              <Box sx={{ p: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom color="text.primary">
                  Dashboard Content
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Your dashboard content goes here...
                </Typography>
              </Box>
            }
          />

          <Route path="configure-master" element={<Configure />}>
            <Route index element={<Navigate to="category" replace />} />
            <Route path="category" element={<Category />} />
            <Route path="subcategory" element={<Subcategory />} />
            <Route path="document-type" element={<DocumentType />} />
          </Route>

          <Route
            path="/profile"
            element={
              <Box sx={{ p: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom color="text.primary">
                  Profile
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  User profile information goes here...
                </Typography>
              </Box>
            }
          />

          <Route
            path="/theme"
            element={
              <Box sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Box sx={{ width: '100%', maxWidth: 800 }}>
                    <ThemeConfigurator />
                  </Box>
                </Box>
              </Box>
            }
          />

          {/* <Route path="*" element={<Navigate to="/dashboard" replace />} /> */}
        </Routes>
      </Box>
    </Box>
  );
};

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
        <Routes>
          {/* All routes handled by LayoutWrapper */}
          <Route path="*" element={<LayoutWrapper />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
