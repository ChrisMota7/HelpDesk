'use client'
import * as React from 'react';
import { Card, CardContent } from "@mui/material"
import {TextField, FormControl, InputLabel, Select, MenuItem} from "@mui/material"
import Box from "@mui/material"


export default function Nuevo({children}) {
  const [name, setName] = React.useState('Cat in the Hat');
    return (
      <div>
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