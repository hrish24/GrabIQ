import React from 'react';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import { useTheme } from '@mui/material';

const DataGridWrapper: React.FC<DataGridProps> = (props) => {
  const theme = useTheme();

  return (
    <DataGrid
      pageSizeOptions={[10, 50, 100]}
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      disableRowSelectionOnClick
      {...props}
      sx={{
        padding:0,
        border: 'none',
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
        

        // Header row styling
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2c2c2c' : theme.palette.grey[100],
          color: theme.palette.primary.main,
          fontWeight: 600,
        },

        // Remove header cell focus outline
        '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within': {
          outline: 'none !important',
        },

        // Cell borders
        '& .MuiDataGrid-cell': {
          borderColor: theme.palette.mode === 'dark' ? '#333' : theme.palette.grey[200],
        },

        // Remove focus/selected borders on cells
        '& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within': {
          outline: 'none !important',
        },
        '& .MuiDataGrid-cell--selected': {
          outline: 'none !important',
        },

        // Hover row effect
        '& .MuiDataGrid-row:hover': {
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
        },
      }}
    />
  );
};

export default DataGridWrapper;
