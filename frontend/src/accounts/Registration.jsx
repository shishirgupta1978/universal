import React,{ useState } from "react";
import { TextField,Button, Box,Alert, FormControlLabel, Checkbox } from "@mui/material"
import  {NavLink,useNavigate}  from "react-router-dom";



const Registration = () => {

    const [error,setError] = useState({
        status:false,
        msg:"",
        type:""
    })

    const navigate= useNavigate();
    const handleSubmit=(e)=>{
    setError({status:false, msg:"", type:''})
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData={
        email:data.get('email'),
        password:data.get('password'),
        confirmpassword:data.get('confirmpassword'),
        tnc:data.get('tnc')
    }
    if(actualData.email && actualData.password && actualData.confirmpassword && actualData.tnc ){
      
        if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(actualData.email)))
        {
            setError({status:true, msg:"Email address is not valid.", type:'error'})
        } else if(actualData.password=== actualData.confirmpassword){
        document.getElementById('registration-form').reset()
        setError({status:true, msg:"Registration Success.", type:'success'})
        navigate('/dashboard')
        }
        else{
            setError({status:true, msg:"Password and Confirm password does not match.", type:'error'})

        }

    }else
    {
        if(!actualData.tnc)
        {
            setError({status:true, msg:"Please Accept all Terms and Conditions.", type:'error'})
        }
        else{
            setError({status:true, msg:"All Fields are Required.", type:'error'})

        }
        

    }
   
   //     setError({status:true, msg:actualData.tnc, type:'error'})

   

}

  return (
    <>
<Box component='form' noValidate sx={{mt:1}} id="registeration-form" onSubmit={handleSubmit}>
<TextField margin="normal" required fullWidth id='email' name='email' label='Email Address' type="email"/>
<TextField margin="normal" required fullWidth id='password' name='password' label='Password' type='password'/>
<TextField margin="normal" required fullWidth id='confirmpassword' name='confirmpassword' label='Confirm Password' type='password'/>
<FormControlLabel control={<Checkbox value="agree" color="primary" name="tnc" id="tnc"/>}/>I agree to <NavLink to='/tnc'>term and conditions.</NavLink>
<Box textAlign='center'>
<Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Register</Button>
</Box>
 {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''} 
</Box>
</>
  )
}

export default Registration
