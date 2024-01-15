'use client'
import './ticket.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from './../components/Table/Table'
import Button from '@mui/material/Button';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function ticket({children}) {
    return (
      <div className='header'>
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
                  
              <Button className='button' variant="contained">Nuevo Ticket</Button>
            </header>
              
            <br />
            <Table></Table>
          </CardContent>
        </Card>
        <br />
        Tickets page Home
      </div>
    )
  }