'use client'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function configuracion() {
    return (
        <div className='header'>
            <div className='header__title'>
                <h1>Configuración</h1>
            </div>
            <div className='header__nav'>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" onClick={() => router.push('/ticket')}>
                        Tickets
                    </Link>
                    <Typography color="text.primary">Categorías</Typography>
                </Breadcrumbs>
            </div>
        </div>
    )
}