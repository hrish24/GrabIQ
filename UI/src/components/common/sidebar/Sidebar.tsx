import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Box, Typography } from '@mui/material';
import { Dashboard as DashboardIcon, Settings as ConfigureIcon, Person as PersonIcon, Palette as PaletteIcon, Logout as LogoutIcon } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const handleLogout = () => {
    navigate('/login');
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const isActiveRoute = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <>
      <Drawer
        variant="persistent"
        anchor="left"
        open={true}
        sx={{
          width: '250px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            border: 'none',
            boxShadow: theme.shadows[4],
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        }}
      >
        <Box sx={{ overflow: 'auto', height: '100%' }}>
          <Box sx={{ p: 2, textAlign: 'center', mt: 7 }}>
            <Typography variant="h5" component="div" className={styles.sidebarLogo} sx={{ color: theme.palette.primary.main }}>
              GrabIQ
            </Typography>
          </Box>
          <Divider sx={{ borderColor: theme.palette.divider }} />

          <List sx={{ pt: 2 }}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleNavigate('/dashboard')}
                selected={isActiveRoute('/dashboard')}
                sx={{
                  mx: 1,
                  borderRadius: 1,
                  color: theme.palette.text.primary,
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.main + '1F', // 12% opacity
                    color: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main + '29', // 16% opacity
                    },
                  },
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleNavigate('/configure-master')}
                selected={isActiveRoute('/configure-master')}
                sx={{
                  mx: 1,
                  borderRadius: 1,
                  color: theme.palette.text.primary,
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.main + '1F', // 12% opacity
                    color: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main + '29', // 16% opacity
                    },
                  },
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  <ConfigureIcon />
                </ListItemIcon>
                <ListItemText primary="Configure" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleNavigate('/profile')}
                selected={isActiveRoute('/profile')}
                sx={{
                  mx: 1,
                  borderRadius: 1,
                  color: theme.palette.text.primary,
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.main + '1F', // 12% opacity
                    color: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main + '29', // 16% opacity
                    },
                  },
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleNavigate('/theme')}
                selected={isActiveRoute('/theme')}
                sx={{
                  mx: 1,
                  borderRadius: 1,
                  color: theme.palette.text.primary,
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.main + '1F', // 12% opacity
                    color: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main + '29', // 16% opacity
                    },
                  },
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  <PaletteIcon />
                </ListItemIcon>
                <ListItemText primary="Theme" />
              </ListItemButton>
            </ListItem>
          </List>

          <Box sx={{ flexGrow: 1 }} />

          <Divider sx={{ borderColor: theme.palette.divider }} />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleLogout}
                sx={{
                  mx: 1,
                  borderRadius: 1,
                  color: theme.palette.text.primary,
                  '&:hover': {
                    backgroundColor: theme.palette.error.main + '0A', // 4% opacity
                    color: theme.palette.error.main,
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
