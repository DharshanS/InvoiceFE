import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const continerStyle = {margin:'30px auto'}
const columns = [
  { field: 'id', headerName: 'ID', width: 70 , headerClassName :'table-header'},
  { field: 'invoiceNo', headerName: 'Invoice No', width: 130, headerClassName :'table-header' },
  { field: 'customer', headerName: 'Customer', width: 130 , headerClassName :'table-header'},
  {
    field: 'email',
    headerName: 'email',
    type: 'String',
    width: 90,
    headerClassName :'table-header'
  },

  {
    field: 'invoiceDate',
    headerName: 'Invoice Date',
    type: 'String',
    width: 90,
    headerClassName :'table-header'
  },
  {
    field: 'status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    headerClassName :'table-header',
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'Action',
    headerName: 'Action',
    description: 'Action.',
    sortable: false,
    width: 200,
    margin:'auto',

    headerClassName :'table-header',

    renderCell: (params) => {
      const onClick = (e) => {
        const currentRow = params.row;
        return alert(JSON.stringify(currentRow, null, 4));
      };
      const b ={ paddingTop : '10px'}
      return (
        <Stack direction="row" spacing={2} style={b}>
          <Button variant="outlined" color="warning" size="small" onClick={onClick}> <EditIcon/></Button>
          <Button variant="outlined" color="error" size="small" onClick={onClick}> <DeleteIcon /></Button>
        </Stack>
      );
  },



   
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
];

export default function DataTable() {
  return (
    <Container style={continerStyle} >
      
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
   
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
    

      />
    </div>
    </Container>
  );
}