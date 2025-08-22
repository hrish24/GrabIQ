import React from 'react';
import { Paper, Typography, Switch, FormControlLabel } from '@mui/material';
import { Palette as PaletteIcon } from '@mui/icons-material';
import { ColorPicker } from '../components/common/colorPicker/ColorPicker';
import { useThemeContext } from './ThemeContext';

export const ThemeConfigurator: React.FC = () => {
  const themeContext = useThemeContext();

  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <PaletteIcon color="primary" />
        <Typography variant="h4" component="h1">
          Theme Configurator
        </Typography>
      </div>

      <FormControlLabel control={<Switch checked={themeContext.darkMode} onChange={(e) => themeContext.setDarkMode(e.target.checked)} color="primary" />} label="Dark Mode" sx={{ mb: 3 }} />

      <ColorPicker label="Primary Color" selectedColor={themeContext.primaryColor} onColorChange={themeContext.setPrimaryColor} />

      <ColorPicker label="Secondary Color" selectedColor={themeContext.secondaryColor} onColorChange={themeContext.setSecondaryColor} />
    </Paper>
  );
};
