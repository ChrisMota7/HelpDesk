'use client'
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import Image from "next/image";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

import Tooltip from '@mui/material/Tooltip';

import { useRouter } from 'next/navigation';

import Profile from '../Profile/Profile'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Menu({children}) {

  const router = useRouter()
    
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <ListItem disablePadding>
            <ListItemIcon>
            <Image
            src="/LogoNegro.png"
            alt="Image Componente"
            className='Image'
            width={63}
            height={63}
            />
            </ListItemIcon>
            <h2>HELP-DESK</h2>
          </ListItem>
          <Profile></Profile>
          
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
        </DrawerHeader>
        
        <Divider />
        <List>
              <div className='tickets'>
                <ListItem disablePadding>
                  
                  <ListItemButton onClick={() => router.push('/ticket')}>
                    <ListItemIcon>
                    <Tooltip title="Tickets" placement="right-start">
                      <LeaderboardOutlinedIcon />
                    </Tooltip>
                    </ListItemIcon>
                    <ListItemText primary="Tickets"  />
                  </ListItemButton>
                </ListItem>
                </div>

                <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push('/ticket/create-ticket')}>
                    <ListItemIcon>
                    <Tooltip title="Nuevo Ticket" placement="right-start">
                      <AssignmentOutlinedIcon />
                    </Tooltip>
                    </ListItemIcon>
                    <ListItemText primary="Nuevo ticket" />
                  </ListItemButton>
                </ListItem>
                {/* <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push('/ticket/solicitud-ticket')}>
                    <ListItemIcon>
                    <Tooltip title="Solicitudes de Ticket" placement="right-start"> 
                      <PendingActionsOutlinedIcon />
                    </Tooltip> 
                    </ListItemIcon>
                    <ListItemText primary="Solicitud ticket" />
                  </ListItemButton>
                </ListItem> */}
                <Divider /> 
                <div className='tickets'>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push('/categorias')}>
                    <ListItemIcon>
                    <Tooltip title="Categorías" placement="right-start">
                      <CategoryOutlinedIcon />
                    </Tooltip>
                    </ListItemIcon>
                    <ListItemText primary="Categorías" />
                  </ListItemButton>
                </ListItem>
                </div>
                <Divider /> 
                <div className='tickets'>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push('/Dashboard')}>
                    <ListItemIcon>
                      <Tooltip title="Dashboard" placement="right-start">
                        <LeaderboardOutlinedIcon />
                      </Tooltip>  
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                </ListItem>
                </div>
                <Divider />
                <div className='tickets'>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push('/configuracion')}>
                    <ListItemIcon>
                    <Tooltip title="Configuración" placement="right-start">
                      <SettingsOutlinedIcon />
                    </Tooltip>  
                    </ListItemIcon>
                    <ListItemText primary="Configuración" />
                  </ListItemButton>
                </ListItem>
                </div>
                <Divider />
              </List>     
      </Drawer>
      <Box div component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader/>
        {children}
      </Box>
    </Box>
  );
}