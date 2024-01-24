import './Profile.scss'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Profile() {
  return (
    <Stack className='avatar'>
      <Avatar src="user.png"/>
    </Stack>
  );
}