import * as React from 'react';
import {AppBar,Toolbar, Button} from '@mui/material'
import { useContext } from 'react';
import AuthContext from './AuthContext';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  let {user, logoutUser}= useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{flexGrow:1}}>
      <AppBar position="static" color='secondary'>
    <Toolbar>
   <Typography variant='h5' component="div" sx={{flexGrow:1}}>
       Task Manage
       </Typography>
       <Button component={NavLink} to='/' style={({isActive}) => { return { backgroundColor:isActive ? '#6d1b7b':''}}} sx={{color:'white',textTransform:'none'}}>Home</Button> 
       <Button component={NavLink} to='/contact' style={({isActive}) => { return { backgroundColor:isActive ? '#6d1b7b':''}}} sx={{color:'white',textTransform:'none'}}>Contact</Button>
       
       { user ? (

          <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>):<Button component={NavLink} to='/loginreg' style={({isActive}) => { return { backgroundColor:isActive ? '#6d1b7b':''}}} sx={{color:'white',textTransform:'none'}}>Login/Registration</Button> }
        </Toolbar>
</AppBar>

      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> <Button component={NavLink} to='/changepassword' style={({isActive}) => { return { backgroundColor:isActive ? '#6d1b7b':''}}} sx={{color:'black',textTransform:'none'}}>Change Password</Button>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={logoutUser}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

    </React.Fragment>
  );
}
