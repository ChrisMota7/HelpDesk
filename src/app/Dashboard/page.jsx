'use client'
import './dashboard.scss'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Dashboard() {
    return (
        <div className='header'>
            <div className='header__title'>
                <h1>Dashboard</h1>
            </div>
            <div className='header__nav'>
                <Breadcrumbs aria-label="breadcrumb">
                <Typography color="text.primary">HelpDesk</Typography>
                <Typography color="text.primary">Dashboard</Typography>
                </Breadcrumbs>
            </div>
        </div>
    )
}