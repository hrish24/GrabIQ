// src/pages/configure-master/SubCategory.tsx
import React from 'react';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Switch } from '@mui/material';
import DataGridWrapper from '../../../common/dataGridWrapper/DataGridWrapper';
import moment from 'moment';

const SubCategory: React.FC = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Subcategory Name', flex: 1 },
    { field: 'category', headerName: 'Category', flex: 1 }, // extra column
    { field: 'description', headerName: 'Description', flex: 2 },
    { field: 'createdBy', headerName: 'Created By', width: 150 },
    {
      field: 'createdTime',
      headerName: 'Created Time',
      width: 220,
      valueGetter: (params) => moment(params.row.createdTime).format('Do MMMM YYYY, h:mm a'),
    },
    {
      field: 'modifiedTime',
      headerName: 'Modified Time',
      width: 220,
      valueGetter: (params) => moment(params.row.modifiedTime).format('Do MMMM YYYY, h:mm a'),
    },
    {
      field: 'actions',
      headerName: 'Active',
      width: 120,
      sortable: false,
      filterable: false,
      renderCell: (params: GridRenderCellParams) => <Switch checked={params.row.active} onChange={() => alert(`${params.row.active ? 'Deactivated' : 'Activated'} ${params.row.name}`)} color="primary" />,
    },
  ];

  // Example row data
  const rows = [
    {
      id: 1,
      name: 'Payroll',
      category: 'Finance',
      description: 'Salary and payroll-related documents',
      createdBy: 'Admin',
      createdTime: '2020-08-08T15:30:00',
      modifiedTime: '2020-08-10T14:20:00',
      active: true,
    },
    {
      id: 2,
      name: 'Recruitment',
      category: 'HR',
      description: 'Job postings, resumes, and recruitment process',
      createdBy: 'Jane Doe',
      createdTime: '2020-08-05T09:30:00',
      modifiedTime: '2020-08-15T16:45:00',
      active: false,
    },
    {
      id: 3,
      name: 'Networking',
      category: 'IT',
      description: 'LAN, WAN, and VPN-related documents',
      createdBy: 'John Smith',
      createdTime: '2020-08-03T11:00:00',
      modifiedTime: '2020-08-18T18:00:00',
      active: true,
    },
  ];

  return (
    <div>
      <div style={{ height: 'calc(100vh - 188px)', width: '100%' }}>
        <DataGridWrapper
          columns={columns}
          rows={rows}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
            sorting: {
              sortModel: [{ field: 'id', sort: 'desc' }],
            },
          }}
        />
      </div>
    </div>
  );
};

export default SubCategory;
