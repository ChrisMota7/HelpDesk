'use client'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Descripcion', headerName: 'Descripcion', width: 350 },
  { field: 'ASIGNADO', headerName: 'ASIGNADO A', width: 350 },
  { field: 'STATUS', headerName: 'STATUS', width: 280 }, 
  // {
  //   field: 'ACCIONES',
  //   headerName: 'ACCIONES',
  //   width: 100,
  //   valueGetter: (params) =>
  //     `${params.row.ASIGNADO || ''} ${params.row.STATUS || ''}`,
  // },
];

const rows = [
  { id: 1, Descripcion: 'Infraestructura', ASIGNADO: 'AbrahamMisael@KSP.com.mx', STATUS: 'ACTIVE'},
  { id: 2, Descripcion: 'Infraestructura', ASIGNADO: 'AbrahamMisael@KSP.com.mx', STATUS: 'BLOCK' },
  { id: 3, Descripcion: 'Infraestructura', ASIGNADO: 'AbrahamMisael@KSP.com.mx', STATUS: 'ACTIVE' },
  { id: 4, Descripcion: 'Infraestructura', ASIGNADO: 'AbrahamMisael@KSP.com.mx', STATUS: 'BLOCK' },
  { id: 5, Descripcion: 'Infraestructura', ASIGNADO: 'Lalo@KSP.com.mx', STATUS: 'ACTIVE' },
];

export default function Table() {
  return (
    // backgroundColor:'white', marginBottom:100, marginLeft:50, marginRight:50, marginTop:100
    <div style={{ height: 400, marginTop:16}}>
      
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
  );
}
