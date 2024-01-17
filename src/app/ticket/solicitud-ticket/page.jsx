'use client'
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

export default function Solicitudes({children}) {
  return (
    <div className='header'>
      <div>
        <h1>Solicitudes Tickets</h1>
      </div>
      <div>
      <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/ticket">
              Tickets
            </Link>
            <Typography color="text.primary">Solicitudes</Typography>
          </Breadcrumbs>
      </div>
      <Card>
        <CardContent>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Estado</InputLabel>
              <Select
                sx={{ width:500 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Estado"
                >
                <MenuItem >Activo</MenuItem>
                <MenuItem >Inactivo</MenuItem>
              </Select>
          </FormControl>
          <FormControl>
                <InputLabel id="demo-simple-select-label">ID, Nombre, Correo</InputLabel>
                <Select
                sx={{ width:500 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="ID, Nombre, Correo"
                >
                  <MenuItem >Borrar</MenuItem>
                  </Select>  
          </FormControl>                
        </CardContent>
    </Card>
      <br></br>
      <Card>
        <CardContent className='header__content__table'>
          <header class="flex flex--space-between">
            <FormControl fullWidth>
              <InputLabel sx={{ width:250 }} id="demo-simple-select-label">Acciones</InputLabel>
                <Select
                  sx={{ width:250 }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Acciones"
                >
                <MenuItem >Borrar</MenuItem>
                </Select>
            </FormControl>
                
            <Button className='button' variant="contained" href='/ticket/create-tickets'>Nuevo Ticket</Button>
          </header>
            
          <br />
          <Table></Table>
        </CardContent>
      </Card>
    </div>
    )
  }