'use client'
import './categorias.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Table from '../components/Tables/Table-Categorias/Table'
import { Button } from '@mui/material';


export default function Categorias() {
    return (
      <div className='header'>
        <div className='header__title'>
          <h1>Categorías</h1>
        </div>
        <div className='header__nav'>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" onClick={() => router.push('/ticket')}>
              HelpDesk
            </Link>
            <Link underline="hover" color="inherit" onClick={() => router.push('/ticket')}>
              Tickets
            </Link>
            <Typography color="text.primary">Solicitudes</Typography>
          </Breadcrumbs>
        </div>
        <div className='content'>
          <Card>
            <div className='content__divisor'>
            <CardContent className='content__table'>
              <div className='content__button'>
                <Button variant="contained" onClick={() => router.push('/ticket/create-ticket')}>Nueva categoría</Button>
              </div>
              <Table></Table>
            </CardContent>
            </div>
          </Card>
        </div>
      </div>
    )
  }