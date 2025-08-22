import React from 'react';
import { Box, Typography, Grid, TextField, Paper } from '@mui/material';

interface ColorOption {
  name: string;
  value: string;
}

const colorOptions: ColorOption[] = [
  { name: 'Blue', value: '#1976d2' },
  { name: 'Purple', value: '#9c27b0' },
  { name: 'Green', value: '#388e3c' },
  { name: 'Orange', value: '#f57c00' },
  { name: 'Red', value: '#d32f2f' },
  { name: 'Teal', value: '#00796b' },
  { name: 'Indigo', value: '#303f9f' },
  { name: 'Pink', value: '#c2185b' },
  { name: 'Deep Orange', value: '#e64a19' },
  { name: 'Cyan', value: '#0097a7' },
];

interface ColorPickerProps {
  label: string;
  selectedColor: string;
  onColorChange: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ label, selectedColor, onColorChange }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        {label}
      </Typography>

      <Grid container spacing={1} sx={{ mb: 2 }}>
        {colorOptions.map((color) => (
          <Paper
            elevation={selectedColor === color.value ? 4 : 1}
            sx={{
              width: 40,
              height: 40,
              backgroundColor: color.value,
              cursor: 'pointer',
              border: selectedColor === color.value ? '3px solid' : '1px solid',
              borderColor: selectedColor === color.value ? 'text.primary' : 'divider',
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.2s ease-in-out',
              },
            }}
            onClick={() => onColorChange(color.value)}
            title={color.name}
          />
        ))}
      </Grid>

      <TextField
        label="Custom Color"
        type="color"
        value={selectedColor}
        onChange={(e) => onColorChange(e.target.value)}
        fullWidth
        InputProps={{
          sx: { height: 56 },
        }}
      />
    </Box>
  );
};
