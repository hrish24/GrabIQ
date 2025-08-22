// Header.tsx
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/login');
  };

  const getNavButtonClass = (path: string) => {
    return location.pathname.includes(path) ? `${styles.navButton} ${styles.active}` : styles.navButton;
  };

  return (
    <AppBar position="sticky" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Typography variant="h6" component="div" className={styles.logo}>
          GrabIQ
        </Typography>

        <Button color="inherit" component={NavLink} to="/dashboard" className={getNavButtonClass('/dashboard')}>
          Dashboard
        </Button>

        <Button color="inherit" component={NavLink} to="/settings" className={getNavButtonClass('/settings')}>
          Settings
        </Button>

        <Button color="inherit" component={NavLink} to="/profile" className={getNavButtonClass('/profile')}>
          Profile
        </Button>

        <Button color="inherit" component={NavLink} to="/theme" className={getNavButtonClass('/theme')}>
          Theme
        </Button>

        <Button color="inherit" onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
