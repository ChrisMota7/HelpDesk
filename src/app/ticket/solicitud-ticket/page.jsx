'use client'
import './Solicitud.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '../../components/Table-Solicitudes/Table'
import Button from '@mui/material/Button';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { useRouter } from 'next/navigation';

export default function Solicitudes({children}) {
  const router = useRouter()

  return (
  <div className='header'>
    <div className='header__title'>
      <h1>Solicitudes Tickets</h1>
    </div>
    <div className='header__nav'>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" onClick={() => router.push('/ticket')}>
          Tickets
        </Link>
        <Typography color="text.primary">Solicitudes</Typography>
      </Breadcrumbs>
    </div>
    <div className='content'>
      <Card>
      <div className='content__division'> 
          <div className='content__label'>
            <TextField  className='content__label' id="outlined-basic" label="ID, Nombre, Correo, Fecha" />    
          </div>
          <div className='content__label__select'>
            <FormControl className='content__label__select'>
              <InputLabel id="select-label">Estado</InputLabel>
               <Select 
                 labelId="select-label"
                 id="select"
                 label="Estado"
               >
               <MenuItem >Activo</MenuItem>
               <MenuItem >Inactivo</MenuItem>
               </Select>
             </FormControl>
          </div>
      </div>
      </Card>
          <br></br>
      <Card>
        <div className='content__divisor'>
        <CardContent className='content__table'>
          <div className='content__button'>
            <Button variant="contained" onClick={() => router.push('/ticket/create-ticket')}>Nuevo Ticket</Button>
          </div>
          <Table></Table>
        </CardContent>
        </div>
      </Card>
    </div>
  </div>
    )
  }