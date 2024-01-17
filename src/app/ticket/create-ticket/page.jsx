'use client'
import * as React from 'react';
import './Create.scss'
import { Card, CardContent } from "@mui/material"
import {TextField, FormControl, InputLabel, Select, MenuItem} from "@mui/material"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Nuevo({children}) {
    return (
      <div className='header'>
        <div className='header__title'>
          <h1>Nuevo Ticket</h1>
        </div>
        <div>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/ticket">
              Tickets
            </Link>
            <Typography color="text.primary">Nuevo</Typography>
          </Breadcrumbs>
        </div>
        <Card>
          <CardContent>
            Información básica
            <br />
            <TextField id="outlined-basic" label="Asunto" variant="outlined" />
            
            <FormControl >
                <InputLabel sx={{ width:250 }} id="demo-simple-select-label">Categoría</InputLabel>
                  <Select
                    sx={{ width:250 }}
                    labelId="Categoría"
                    id="Categoría"
                    label="Categoría"
                  >
                  <MenuItem >Borrar</MenuItem>
                  </Select>
              </FormControl>
              <br />
              <br />
              <TextField fullWidth id="outlined-basic" label="Descripción" variant="outlined" />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            Filtros
            <FormControl fullWidth>
                <InputLabel sx={{ width:250 }} id="demo-simple-select-label">Cliente</InputLabel>
                  <Select
                    sx={{ width:250 }}
                    labelId="Cliente"
                    id="Cliente"
                    label="Cliente"
                  >
                  <MenuItem >Borrar</MenuItem>
                  </Select>
              </FormControl>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            Evidencia
          </CardContent>
        </Card>
      </div>
    )
  }