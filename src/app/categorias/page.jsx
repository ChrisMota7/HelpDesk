'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Table from '../components/Table-Categorias/Table'
import { Button } from '@mui/material';


export default function Categorias({children}) {
    return (
      <div>
        <div>
          <h1>Categorias</h1>
        </div>
        <div>
        <Breadcrumbs aria-label="breadcrumb">
            <Typography color="text.primary">Categorias</Typography>
          </Breadcrumbs>
        </div>
        <Card>
          <CardContent>
            <Button variant="contained">Nueva Categoría</Button>
            <Table></Table>
          </CardContent>
        </Card>
      </div>
    )
  }