'use client'
import './Ver.scss'
import { Card, CardContent, Button } from "@mui/material"
import {TextField, FormControl, InputLabel, Select, MenuItem} from "@mui/material"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import { useRouter } from 'next/navigation';

import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';

const actions = [
  { icon: <ImageOutlinedIcon />, name: 'Imagen' },
  { icon: <UnarchiveOutlinedIcon />, name: 'Archivo' },
  { icon: <VideoCameraBackOutlinedIcon />, name: 'Video' },
];


      

export default function verTicket (){
    const router = useRouter()

    return(
        <div className='header'>
            <div className='header__title'>
                <h1 className='header__title__name'>Ticket #1</h1>
                <h1 className='header__title__problem'>Laptop ya no carga</h1>
            </div>
            <div className='header__nav'>
            <Breadcrumbs aria-label="breadcrumb">
                <Typography color="text.primary">HelpDesk</Typography>
                <Typography color="text.primary">Tickets</Typography>
                <Typography color="text.primary">Ver ticket</Typography>
            </Breadcrumbs>
            </div>
            <div className='content__button'>
                <Button variant="contained" onClick={() => router.push('/ticket/create-ticket')}>Finalizar Ticket</Button>
            </div>
            <div className='content'>
                <Card>
                    <div className='content__date'> 
                        <Typography color="text">Creado en: </Typography>
                        <Typography color="text.primary">Respuestas: </Typography>
                        <Typography color="text.primary">Ultima respuesta: </Typography>
                    </div>
                </Card>
                    <br></br>
                <Card>
                    <div className='content__divisor'>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </Card>
                <div className='footer'>
                    <div className='footer__label'>
                        <TextField  className='footer__label' id="outlined" label="Escribe algo..." />    
                    </div>
                    <div className='footer__button'>
                        <IconButton aria-label="send" size="large">
                            <SendOutlinedIcon fontSize="inherit" />
                        </IconButton>
                        <SpeedDial
                            ariaLabel="SpeedDial basic example"
                            sx={{ position: 'absolute', bottom:0, right: 0 }}
                            icon={<SpeedDialIcon />}
                        >
                            {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                            />
                            ))}
                        </SpeedDial>
                    </div>
                </div>
            </div>
    </div>
    )
}