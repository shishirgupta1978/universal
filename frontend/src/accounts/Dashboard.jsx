import React from 'react'
import {Grid, Button,CssBaseline, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ChangePassword from './ChangePassword'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    const navigate=useNavigate()
    const handelLogout=()=>{
        navigate('/login')
    }

  return (
    <>
    <CssBaseline/>
    <Navigation/>
    <Outlet/>
  
    <Grid container sx={{height:'100vh'}}>
        <Grid item sm={3} sx={{backgroundColor:'gray', p: 5 , color:'white'}}>
            <Typography variant="h5">
                Email:adfdfdf@gmail.com
            </Typography>
            <Typography variant="h6">
                adfdfdf@gmail
            </Typography>
            <Button variant='contained' color='warning' size='large' onClick={handelLogout} sx={{mt:8}}>Logout</Button>


        </Grid>
        <Grid item sm={9}>
            <ChangePassword/>
        </Grid>
    </Grid>
    </>
  )
}

export default Dashboard