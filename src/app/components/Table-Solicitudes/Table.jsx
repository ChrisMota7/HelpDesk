'use client'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Descripcion', headerName: 'DESCRIPCIÓN', width: 250 },
  { field: 'Cliente', headerName: 'CLIENTE', width: 250 },
  { field: 'Correo', headerName: 'CORREO', width: 350 },
  { field: 'STATUS', headerName: 'ESTATUS', width: 150 },
  { field: 'ACCIONES', headerName: 'ACCIONES', width: 120 },
];

const rows = [
  { id: 1, Descripcion: 'Infraestructura', Cliente: 'HDI', Correo: 'AbrahamMisael@KSP.com.mx', STATUS: 'ACTIVE', ACCIONES: ''},
  { id: 2, Descripcion: 'Infraestructura', Cliente: 'HDI', Correo: 'AbrahamMisael@KSP.com.mx', STATUS: 'BLOCK',  ACCIONES: '' },
  { id: 3, Descripcion: 'Infraestructura', Cliente: 'HDI', Correo: 'AbrahamMisael@KSP.com.mx', STATUS: 'ACTIVE', ACCIONES: '' },
  { id: 4, Descripcion: 'Infraestructura', Cliente: 'HDI', Correo: 'AbrahamMisael@KSP.com.mx', STATUS: 'BLOCK',  ACCIONES: '' },
  { id: 5, Descripcion: 'Infraestructura', Cliente: 'HDI', Correo: 'Lalo@KSP.com.mx',          STATUS: 'ACTIVE', ACCIONES: '' },
];

export default function Table() {
  return (
    // backgroundColor:'white', marginBottom:100, marginLeft:50, marginRight:50, marginTop:100
    <div style={{ height:500, width:1280, padding:20 }}>
      
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
