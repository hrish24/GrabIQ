import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Typography } from '@mui/material';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Configure: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Category', path: 'category' },
    { label: 'Subcategory', path: 'subcategory' },
    { label: 'Document Type', path: 'document-type' },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const tabIndex = tabs.findIndex((tab) => currentPath.startsWith(`/configure-master/${tab.path}`));

    if (tabIndex !== -1) {
      setActiveTab(tabIndex);
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    const selectedTab = tabs[newValue];
    navigate(`/configure-master/${selectedTab.path}`);
  };

  return (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column', padding: '16px' }}>
      <div
        style={{
          borderBottom: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.paper,
          borderRadius: theme.shape.borderRadius,
        }}
      >
        <div style={{ padding: theme.spacing(2) }}>
          <Typography
            variant="h4"
            component="h1"
            color='primary'
            style={{
              textTransform: 'capitalize',
              marginBottom: theme.spacing(2),
            }}
          >
            Master Configuration
          </Typography>

          <Tabs
            style={{ textTransform: 'capitalize' }}
            value={activeTab}
            onChange={handleTabChange}
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: theme.palette.primary.main,
              },
              '& .MuiTab-root': {
                color: theme.palette.text.secondary,
                textTransform: 'capitalize',
                '&.Mui-selected': {
                  color: theme.palette.primary.main,
                },
                '&:hover': {
                  color: theme.palette.text.primary,
                },
              },
            }}
          >
            <Tab label="Category" />
            <Tab label="Subcategory" />
            <Tab label="Document Type" />
          </Tabs>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Configure;
