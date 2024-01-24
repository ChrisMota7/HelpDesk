'use client'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Nombre', headerName: 'NOMBRE', width: 250 },
  { field: 'Prioridad', headerName: 'PRIORIDAD', width: 200 },
  { field: 'Tickets', headerName: 'TICKETS', width: 200 },
  { field: 'Tipo', headerName: 'TIPO', width: 200 },
  { field: 'Fecha', headerName: 'FECHA DE VENCIMIENTO', width: 250 },
  { field: 'Acciones', headerName: 'ACCIONES', width: 120 } 
  // {
  //   field: 'ACCIONES',
  //   headerName: 'ACCIONES',
  //   width: 100,
  //   valueGetter: (params) =>
  //     `${params.row.ASIGNADO || ''} ${params.row.STATUS || ''}`,
  // },
];

const rows = [
  { id: 1, Nombre: 'Gestion de usuarios', Prioridad: 'Alta',  Tickets: '13(4%)',   Tipo: 'PÚBLICO', Fecha: '1(día)', ACCIONES: 'RemoveRedEyeOutlinedIcon' },
  { id: 2, Nombre: 'Seguridad',           Prioridad: 'Media', Tickets: '0(0%)',    Tipo: 'PÚBLICO', Fecha: '1(día)', ACCIONES: '' },
  { id: 3, Nombre: 'General',     Prioridad: 'Alta',  Tickets: '112(38%)', Tipo: 'PÚBLICO', Fecha: '1(día)', ACCIONES: '' },
  { id: 4, Nombre: 'Administrar cuentas',     Prioridad: 'Baja',  Tickets: '39(13%)',  Tipo: 'PÚBLICO', Fecha: '1(día)', ACCIONES: '' },
  { id: 5, Nombre: 'Administrar equipos',     Prioridad: 'Alta',  Tickets: '69(24%)',  Tipo: 'PÚBLICO', Fecha: '1(día)', ACCIONES: '' },
];

export default function Table() {
  return (
    // backgroundColor:'white', marginBottom:100, marginLeft:50, marginRight:50, marginTop:100
    <div style={{ height: 500, marginTop:16}}>
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