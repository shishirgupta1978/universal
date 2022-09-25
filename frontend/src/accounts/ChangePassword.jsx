import React,{ useState } from 'react'
import {Grid, TextField,Button, Box,Alert } from "@mui/material"


const ChangePassword = () => {
    const [error,setError] = useState({
        status:false,
        msg:"",
        type:""
    })



    const handleSubmit=(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData={
        password:data.get('password'),
        confirmpassword:data.get('confirmpassword')
    }
    if(actualData.password && actualData.password===actualData.confirmpassword){
        document.getElementById('password-change-form').reset()
        setError({status:true, msg:"Password changed successfully.", type:'success'})
    }else{
        setError({status:true, msg:"Please enter valid password.", type:'error'})

    }

}

  return (
    <>
<Grid container justifyContent='center'>
    <Grid item sm={6} xs={12}>

    <h1>Change Password</h1>
<Box component='form' noValidate sx={{mt:1}} id="password-change-form" onSubmit={handleSubmit}>
<TextField margin="normal" required fullWidth id='password' name='password' label='New Password' type='password'/>
<TextField margin="normal" required fullWidth id='confirmpassword' name='confirmpassword' label='New Confirm Password' type='password'/>

<Box textAlign='center'>
<Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Update</Button>
</Box>
 {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''} 
</Box>
</Grid>
</Grid>
</>

  )
}

export default ChangePassword