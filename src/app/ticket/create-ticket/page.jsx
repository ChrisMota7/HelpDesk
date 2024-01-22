'use client'
import './Create.scss'
import * as React from 'react';
import { Card, CardContent, Button } from "@mui/material"
import {TextField, FormControl, InputLabel, Select, MenuItem} from "@mui/material"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';

export default function Nuevo({children}) {
  const router = useRouter()

    return (
      <div className='header'>
    <div className='header__title'>
      <h1>Nuevo Ticket</h1>
    </div>
    <div className='header__nav'>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="text.primary">Categorías</Typography>
      </Breadcrumbs>
    </div>
    <div className='content'>
      <Card className='content__card'>
      <h4 className='content__text'>Información básica</h4>
      <div className='content__division'> 
          <div className='content__label'>
            <TextField  className='content__label' id="outlined-basic" label="Asunto" />    
          </div>
          <div className='content__label__select'>
            <FormControl className='content__label__select'>
              <InputLabel id="select-label">Categoría</InputLabel>
               <Select 
                 labelId="select-label"
                 id="select"
                 label="Estado"
               >
               <MenuItem >Hardware</MenuItem>
               <MenuItem >Software</MenuItem>
               </Select>
             </FormControl>
          </div>
      </div>
      <div className='content__Descripcion'>
        <TextField  className='content__Descripcion' id="outlined-basic" label="Descripción" />
      </div>
      </Card>
      <Card>
      <h4 className='content__text'>Filtros</h4>
        <div className='content__divisor'>
          <div className='content__categoria'>
            <FormControl className='content__label__select'>
              <InputLabel id="select-label">Categoría</InputLabel>
               <Select 
                 labelId="select-label"
                 id="select"
                 label="categoria"
               >
               <MenuItem >Hardware</MenuItem>
               <MenuItem >Software</MenuItem>
               </Select>
             </FormControl>
          </div>
        </div>
      </Card>
      <Card>
      <h4 className='content__evidencia'>Evidencia</h4>
          <div className='content__evidencia'>
            <TextField  className='content__Descripcion' id="outlined-basic" label="Evidencia" />
          </div>
          <div className='content__button'>
            <Button variant="contained" onClick={() => router.push('/ticket')}>Ver Dashboard</Button>
          </div>
      </Card>
      
    </div>
  </div>
    )
  }