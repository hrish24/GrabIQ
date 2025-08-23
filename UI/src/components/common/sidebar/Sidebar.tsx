import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  ListItemAvatar,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Settings as ConfigureIcon,
  Person as PersonIcon,
  Palette as PaletteIcon,
  Logout as LogoutIcon,
  Work as WorkIcon,
  History as HistoryIcon,
  Business as BusinessIcon,
  Assessment as AssessmentIcon,
  Email as EmailIcon,
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const [collapsed, setCollapsed] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const profileMenuOpen = Boolean(anchorEl);

  const navItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'New Job', icon: <WorkIcon />, path: '/new-job' },
    { text: 'Job History', icon: <HistoryIcon />, path: '/job-history' },
    { text: 'Tenants', icon: <BusinessIcon />, path: '/tenants' },
    { text: 'Reports', icon: <AssessmentIcon />, path: '/reports' },
    { text: 'Configure', icon: <ConfigureIcon />, path: '/configure-master' },
  ];


  const isActive = (path: string) => location.pathname.includes(path);

  const handleNavigate = (path: string) => navigate(path);

  const handleAvatarClick = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleCloseProfileMenu = () => setAnchorEl(null);
  const handleLogout = () => {
    setAnchorEl(null);
    navigate('/login');
  };

  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: collapsed ? 70 : 200,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: collapsed ? 70 : 200,
            boxSizing: 'border-box',
            border: 'none',
            boxShadow: theme.shadows[4],
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),

            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden',
          },
        }}
      >
        {/* Header / Logo + Collapse toggle */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'space-between',
            p: 2,
          }}
        >
          {!collapsed && (
            <Typography variant="h5" className={styles.sidebarLogo} color="primary">
              GrabIQ
            </Typography>
          )}
          <IconButton size="small" onClick={() => setCollapsed((v) => !v)} aria-label="Toggle sidebar">
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </Box>

        {/* Nav */}
        <List sx={{ flexGrow: 1, pt: 1 }}>
          {navItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <Tooltip
                title={collapsed ? item.text : ''}
                placement="right"
                arrow
                disableHoverListener={!collapsed}
              >
                <ListItemButton
                  onClick={() => handleNavigate(item.path)}
                  selected={isActive(item.path)}
                  sx={{
                    minHeight: 44,
                    px: collapsed ? 1.25 : 2,
                    mx: 1,
                    my: 0.5,
                    borderRadius: 1.5,
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    '&.Mui-selected': {
                      backgroundColor: theme.palette.primary.main + '1F',
                      color: theme.palette.primary.main,
                      '&:hover': { backgroundColor: theme.palette.primary.main + '29' },
                    },
                    '&:hover': { 
                      backgroundColor: theme.palette.action.hover },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,                
                      mr: collapsed ? 0 : 2,     
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: isActive(item.path) ? theme.palette.primary.main : 'inherit',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {!collapsed && (
                    <ListItemText
                      primary={item.text}
                      sx={{ transition: "opacity 0.15s" }}
                    />
                  )}
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>

        {/* Profile (always visible) */}
        <Box sx={{ textAlign: 'center', p: 2 }}>
          <Tooltip
            title={collapsed ? 'Hrishikesh N — Profile' : ''}
            placement="right"
            arrow
            disableHoverListener={!collapsed}
          >
            <Avatar
              sx={{ bgcolor: theme.palette.primary.main, cursor: 'pointer', margin: '0 auto' }}
              onClick={handleAvatarClick}
              aria-controls={profileMenuOpen ? 'profile-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={profileMenuOpen ? 'true' : undefined}
            >
              HN
            </Avatar>
          </Tooltip>
          {!collapsed && <Typography variant="body2" sx={{ mt: 1 }}>Profile</Typography>}
        </Box>
      </Drawer>

      {/* Profile Popup (card-like) – placed ABOVE the avatar and to the RIGHT */}
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={profileMenuOpen}
        onClose={handleCloseProfileMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}       // anchor right edge of avatar…
        transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}  // …to the left-bottom of the menu => above & right
        PaperProps={{
          elevation: 4,
          sx: { borderRadius: 2, p: 1, width: 300 },
        }}
      >
        <MenuItem disableRipple sx={{ '&:hover': { background: 'transparent' }, cursor: 'default' }}>
          <ListItemAvatar><Avatar>HN</Avatar></ListItemAvatar>
          <Box>
            <Typography variant="subtitle1">Hrishikesh N</Typography>
            <Typography variant="body2" color="text.secondary">Tenant Admin</Typography>
          </Box>
        </MenuItem>
        <Divider sx={{ my: 1 }} />
        <MenuItem onClick={() => { handleCloseProfileMenu(); navigate('/profile'); }}>
          <PersonIcon fontSize="small" sx={{ mr: 1 }} /> Profile
        </MenuItem>
        <MenuItem onClick={() => { handleCloseProfileMenu(); navigate('/theme'); }}>
          <PaletteIcon fontSize="small" sx={{ mr: 1 }} /> Theme
        </MenuItem>
        <MenuItem><EmailIcon fontSize="small" sx={{ mr: 1 }} /> rushnahar+240@gmail.com</MenuItem>
        <Divider sx={{ my: 1 }} />
        <MenuItem onClick={handleLogout} sx={{ color: theme.palette.error.main }}>
          <LogoutIcon fontSize="small" sx={{ mr: 1 }} /> Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Sidebar;
