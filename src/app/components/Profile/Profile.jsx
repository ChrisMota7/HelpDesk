import './Profile.scss'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { Link } from '@mui/material';

export default function Profile() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Stack className='avatar'>
      <Avatar >
            <IconButton onClick={handleClickOpen} sx={{ p: 0 }}>
              <Avatar  src="user.png" />
            </IconButton>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Aqui irá el nombre del usuario que inicio sesión"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Aquí irán las licencias de microsoft que tiene el usuario 
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              
              <Link onClick={handleClose}>Cerrar cesión</Link>
            </DialogActions>
          </Dialog>
      </Avatar>
    </Stack>
  );
}

