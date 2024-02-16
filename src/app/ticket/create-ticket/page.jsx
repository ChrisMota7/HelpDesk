'use client'
import './Create.scss'
import * as React from 'react';
import { Card, CardContent, Button } from "@mui/material"
import {TextField, FormControl, InputLabel, Select, MenuItem} from "@mui/material"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

export default function Nuevo() {
  const router = useRouter()

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 1000,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
      <div className='header'>
        <div className='header__title'>
          <h1>Nuevo Ticket</h1>
        </div>
        <div className='header__nav'>
          <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" onClick={() => router.push('/ticket')}>
                Tickets
              </Link>
              <Typography color="text.primary">Nuevo</Typography>
          </Breadcrumbs>
        </div>
        <div className='content'>
          <Card className='content__card'>
            <h4 className='content__text'>Información básica</h4>
              <div className='content__column'>
                <div className='content__division'> 
                  <div className='content__label'>
                    <TextField  className='content__label' id="outlined-basic" label="Asunto" />    
                  </div>
                  <div fullWidth className='content__label__select'>
                    <FormControl fullWidth className='content__label__select'>
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
                  <div  className='content__tipoProblema'>
                  <FormControl fullWidth className='content__tipoProblema'>
                    <InputLabel  id="select-label">Tipo de problema        </InputLabel>
                    <Select 
                      labelId="select-label"
                      id="select"
                      label="Tipo de problema"
                    >
                    <MenuItem >Gestión de usuarios</MenuItem>
                    <MenuItem >Seguridad</MenuItem>
                    <MenuItem >General</MenuItem>
                    <MenuItem >Administrar cuentas</MenuItem>
                    <MenuItem >Administrar equipos</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className='content__Descripcion'>
                  <TextField   className='content__Descripcion' id="outlined-basic" label="Descripción del problema"/>
                </div>
              </div>
            
            
          </Card>
          <Card>
            <div className='content__evidencia'>
              <h4 className='content__evidencia__title'>Evidencia</h4>
                <Button className='content__evidencia__button' component="label"  startIcon={<CloudUploadIcon />}>
                  Subir archivos, fotos o videos
                  <VisuallyHiddenInput type="file" />
                </Button>
                  <div className='content__evidencia__buttonSave'>
                    <Button  className='content__evidencia__buttonSave' variant="contained" onClick={() => router.push('/ticket')}>Guardar Ticket</Button>
                  </div>
            </div>
          </Card>
          
        </div>
      </div>
    )
  }